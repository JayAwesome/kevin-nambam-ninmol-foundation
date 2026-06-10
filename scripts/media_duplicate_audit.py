from __future__ import annotations

import csv
import hashlib
import json
import math
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "Images"
VIDEO_DIR = ROOT / "Video"
AUDIT_DIR = ROOT / "audit"
CONTACT_DIR = AUDIT_DIR / "contact-sheets"

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".m4v", ".webm"}


@dataclass
class ImageRecord:
    path: str
    name: str
    width: int
    height: int
    pixels: int
    size_bytes: int
    sha256: str
    ahash: str
    dhash: str
    phash: str
    sharpness: float
    quality_score: float


@dataclass
class VideoRecord:
    path: str
    name: str
    size_bytes: int
    sha256: str
    duration_seconds: float | None
    width: int | None
    height: int | None


def file_sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def bits_to_hex(bits: Iterable[int]) -> str:
    value = 0
    count = 0
    output = []
    for bit in bits:
        value = (value << 1) | int(bit)
        count += 1
        if count == 4:
            output.append(format(value, "x"))
            value = 0
            count = 0
    if count:
        value <<= 4 - count
        output.append(format(value, "x"))
    return "".join(output)


def hex_hamming(a: str, b: str) -> int:
    return sum(bin(int(x, 16) ^ int(y, 16)).count("1") for x, y in zip(a, b))


def average_hash(image: Image.Image, hash_size: int = 8) -> str:
    gray = ImageOps.grayscale(image).resize((hash_size, hash_size), Image.Resampling.LANCZOS)
    pixels = list(gray.getdata())
    average = sum(pixels) / len(pixels)
    return bits_to_hex(pixel >= average for pixel in pixels)


def difference_hash(image: Image.Image, hash_size: int = 8) -> str:
    gray = ImageOps.grayscale(image).resize((hash_size + 1, hash_size), Image.Resampling.LANCZOS)
    pixels = list(gray.getdata())
    bits = []
    for row in range(hash_size):
        start = row * (hash_size + 1)
        for col in range(hash_size):
            bits.append(pixels[start + col] > pixels[start + col + 1])
    return bits_to_hex(bits)


def dct_2d(values: list[list[float]], size: int = 32, low_size: int = 8) -> list[list[float]]:
    coefficients: list[list[float]] = []
    factor = math.pi / (2 * size)
    for u in range(low_size):
        row = []
        cu = math.sqrt(1 / size) if u == 0 else math.sqrt(2 / size)
        for v in range(low_size):
            cv = math.sqrt(1 / size) if v == 0 else math.sqrt(2 / size)
            total = 0.0
            for x in range(size):
                cos_x = math.cos((2 * x + 1) * u * factor)
                for y in range(size):
                    total += values[x][y] * cos_x * math.cos((2 * y + 1) * v * factor)
            row.append(cu * cv * total)
        coefficients.append(row)
    return coefficients


def perceptual_hash(image: Image.Image, size: int = 32, hash_size: int = 8) -> str:
    gray = ImageOps.grayscale(image).resize((size, size), Image.Resampling.LANCZOS)
    pixels = list(gray.getdata())
    values = [[float(pixels[row * size + col]) for col in range(size)] for row in range(size)]
    dct = dct_2d(values, size=size, low_size=hash_size)
    flattened = [dct[row][col] for row in range(hash_size) for col in range(hash_size) if row or col]
    median = sorted(flattened)[len(flattened) // 2]
    return bits_to_hex(value > median for row in dct for value in row)


def sharpness_score(image: Image.Image) -> float:
    gray = ImageOps.grayscale(image).resize((256, 256), Image.Resampling.LANCZOS)
    edges = gray.filter(ImageFilter.FIND_EDGES)
    pixels = list(edges.getdata())
    average = sum(pixels) / len(pixels)
    variance = sum((pixel - average) ** 2 for pixel in pixels) / len(pixels)
    return round(variance, 2)


def image_quality(width: int, height: int, sharpness: float, size_bytes: int) -> float:
    megapixels = (width * height) / 1_000_000
    orientation_bonus = 0.2 if width >= height else 0
    efficient_size = max(1, size_bytes / 100_000)
    return round((megapixels * 8) + (sharpness / 120) + orientation_bonus - (efficient_size * 0.06), 3)


def semantic_filename_score(record: ImageRecord | VideoRecord) -> float:
    name = record.name.lower()
    score = 0.0
    if "whatsapp" in name:
        score -= 3
    if name[:1].isdigit():
        score -= 1
    if any(keyword in name for keyword in ["community", "clinic", "certificate", "founder", "program", "hero"]):
        score += 2
    if "-" in name:
        score += 0.5
    return score


def video_filename_score(record: VideoRecord) -> float:
    name = record.name.lower()
    score = 0.0
    if name.startswith("1whatsapp video") or name.startswith("22whatsapp video"):
        score += 3
    if "(1)" in name:
        score -= 1
    if name == "featured-story.mp4":
        score += 1
    return score


def analyze_images() -> list[ImageRecord]:
    records = []
    for path in sorted(IMAGE_DIR.iterdir()):
        if not path.is_file() or path.suffix.lower() not in IMAGE_EXTENSIONS:
            continue
        with Image.open(path) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            width, height = image.size
            sharpness = sharpness_score(image)
            records.append(
                ImageRecord(
                    path=str(path.relative_to(ROOT)),
                    name=path.name,
                    width=width,
                    height=height,
                    pixels=width * height,
                    size_bytes=path.stat().st_size,
                    sha256=file_sha256(path),
                    ahash=average_hash(image),
                    dhash=difference_hash(image),
                    phash=perceptual_hash(image),
                    sharpness=sharpness,
                    quality_score=image_quality(width, height, sharpness, path.stat().st_size),
                )
            )
    return records


def analyze_videos() -> list[VideoRecord]:
    records = []
    for path in sorted(VIDEO_DIR.iterdir()):
        if not path.is_file() or path.suffix.lower() not in VIDEO_EXTENSIONS:
            continue
        duration_seconds, width, height = mp4_metadata(path)
        records.append(
            VideoRecord(
                path=str(path.relative_to(ROOT)),
                name=path.name,
                size_bytes=path.stat().st_size,
                sha256=file_sha256(path),
                duration_seconds=duration_seconds,
                width=width,
                height=height,
            )
        )
    return records


def iter_mp4_boxes(data: bytes, start: int = 0, end: int | None = None):
    end = len(data) if end is None else end
    offset = start
    while offset + 8 <= end:
        size = int.from_bytes(data[offset : offset + 4], "big")
        box_type = data[offset + 4 : offset + 8].decode("latin1", errors="replace")
        header = 8
        if size == 1 and offset + 16 <= end:
            size = int.from_bytes(data[offset + 8 : offset + 16], "big")
            header = 16
        elif size == 0:
            size = end - offset
        if size < header or offset + size > end:
            break
        yield box_type, offset, offset + header, offset + size
        offset += size


def mp4_metadata(path: Path) -> tuple[float | None, int | None, int | None]:
    data = path.read_bytes()
    duration_seconds = None
    width = None
    height = None

    def walk(start: int, end: int) -> None:
        nonlocal duration_seconds, width, height
        for box_type, box_start, content_start, box_end in iter_mp4_boxes(data, start, end):
            if box_type in {"moov", "trak", "mdia", "minf", "stbl"}:
                walk(content_start, box_end)
            elif box_type == "mvhd" and duration_seconds is None:
                content = data[content_start:box_end]
                if len(content) < 24:
                    continue
                version = content[0]
                if version == 1 and len(content) >= 32:
                    timescale = int.from_bytes(content[20:24], "big")
                    duration = int.from_bytes(content[24:32], "big")
                else:
                    timescale = int.from_bytes(content[12:16], "big")
                    duration = int.from_bytes(content[16:20], "big")
                if timescale:
                    duration_seconds = round(duration / timescale, 2)
            elif box_type == "tkhd":
                content = data[content_start:box_end]
                if len(content) >= 8:
                    track_width = int.from_bytes(content[-8:-4], "big") >> 16
                    track_height = int.from_bytes(content[-4:], "big") >> 16
                    if track_width and track_height and (
                        width is None or height is None or track_width * track_height > width * height
                    ):
                        width = track_width
                        height = track_height

    walk(0, len(data))
    return duration_seconds, width, height


def similarity(record_a: ImageRecord, record_b: ImageRecord) -> tuple[int, int, int, int]:
    phash_distance = hex_hamming(record_a.phash, record_b.phash)
    dhash_distance = hex_hamming(record_a.dhash, record_b.dhash)
    ahash_distance = hex_hamming(record_a.ahash, record_b.ahash)
    total = phash_distance + dhash_distance + ahash_distance
    return phash_distance, dhash_distance, ahash_distance, total


def build_image_clusters(records: list[ImageRecord]) -> list[dict]:
    parent = list(range(len(records)))

    def find(index: int) -> int:
        while parent[index] != index:
            parent[index] = parent[parent[index]]
            index = parent[index]
        return index

    def union(a: int, b: int) -> None:
        root_a = find(a)
        root_b = find(b)
        if root_a != root_b:
            parent[root_b] = root_a

    pair_reasons: dict[tuple[int, int], dict] = {}
    for i, record_a in enumerate(records):
        for j in range(i + 1, len(records)):
            record_b = records[j]
            if record_a.sha256 == record_b.sha256:
                union(i, j)
                pair_reasons[(i, j)] = {"type": "exact", "distances": [0, 0, 0, 0]}
                continue
            distances = similarity(record_a, record_b)
            phash_distance, dhash_distance, ahash_distance, total = distances
            same_aspect = abs((record_a.width / record_a.height) - (record_b.width / record_b.height)) < 0.08
            if total <= 18 or (phash_distance <= 6 and same_aspect) or (phash_distance <= 10 and dhash_distance <= 10):
                union(i, j)
                pair_reasons[(i, j)] = {
                    "type": "near",
                    "distances": [phash_distance, dhash_distance, ahash_distance, total],
                }

    grouped: dict[int, list[int]] = {}
    for index in range(len(records)):
        grouped.setdefault(find(index), []).append(index)

    clusters = []
    for indexes in grouped.values():
        if len(indexes) < 2:
            continue
        members = sorted(
            (records[index] for index in indexes),
            key=lambda item: (item.quality_score, semantic_filename_score(item), item.pixels),
            reverse=True,
        )
        best = members[0]
        cluster_pairs = []
        for i in indexes:
            for j in indexes:
                if i < j and (i, j) in pair_reasons:
                    cluster_pairs.append(
                        {
                            "a": records[i].path,
                            "b": records[j].path,
                            **pair_reasons[(i, j)],
                        }
                    )
        clusters.append(
            {
                "best_retained": best.path,
                "best_score": best.quality_score,
                "members": [asdict(member) for member in members],
                "removed_from_consideration": [member.path for member in members[1:]],
                "pairs": cluster_pairs,
            }
        )
    return sorted(clusters, key=lambda cluster: len(cluster["members"]), reverse=True)


def build_video_clusters(records: list[VideoRecord]) -> list[dict]:
    by_hash: dict[str, list[VideoRecord]] = {}
    by_hash_size: dict[tuple[str, int], list[VideoRecord]] = {}
    for record in records:
        by_hash.setdefault(record.sha256, []).append(record)
        by_hash_size.setdefault((record.sha256, record.size_bytes), []).append(record)

    clusters = []
    for same_hash_records in by_hash.values():
        if len(same_hash_records) < 2:
            continue
        members = sorted(
            same_hash_records,
            key=lambda item: (item.size_bytes, video_filename_score(item), semantic_filename_score(item)),
            reverse=True,
        )
        clusters.append(
            {
                "best_retained": members[0].path,
                "type": "exact-binary",
                "members": [asdict(member) for member in members],
                "removed_from_consideration": [member.path for member in members[1:]],
            }
        )
    return clusters


def write_csv(records: list[ImageRecord], path: Path) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(asdict(records[0]).keys()))
        writer.writeheader()
        for record in records:
            writer.writerow(asdict(record))


def make_cluster_contact_sheet(clusters: list[dict], output_path: Path) -> None:
    rows = []
    thumb_w, thumb_h = 180, 140
    padding = 18
    label_h = 54
    for cluster_index, cluster in enumerate(clusters, start=1):
        row_images = []
        for member in cluster["members"][:8]:
            path = ROOT / member["path"]
            with Image.open(path) as image:
                image = ImageOps.exif_transpose(image).convert("RGB")
                image.thumbnail((thumb_w, thumb_h), Image.Resampling.LANCZOS)
                canvas = Image.new("RGB", (thumb_w, thumb_h + label_h), "white")
                x = (thumb_w - image.width) // 2
                y = (thumb_h - image.height) // 2
                canvas.paste(image, (x, y))
                draw = ImageDraw.Draw(canvas)
                retained = "KEEP" if member["path"] == cluster["best_retained"] else "DROP"
                label = f"C{cluster_index} {retained}\n{member['name'][:24]}"
                draw.text((6, thumb_h + 5), label, fill=(20, 30, 42))
                row_images.append(canvas)
        row_width = len(row_images) * thumb_w + (len(row_images) - 1) * padding
        row = Image.new("RGB", (row_width, thumb_h + label_h), (244, 247, 251))
        for idx, img in enumerate(row_images):
            row.paste(img, (idx * (thumb_w + padding), 0))
        rows.append(row)

    if not rows:
        output_path.write_text("No duplicate image clusters found.", encoding="utf-8")
        return

    sheet_width = max(row.width for row in rows)
    sheet_height = sum(row.height for row in rows) + (len(rows) - 1) * padding
    sheet = Image.new("RGB", (sheet_width, sheet_height), (235, 239, 245))
    y = 0
    for row in rows:
        sheet.paste(row, (0, y))
        y += row.height + padding
    sheet.save(output_path, optimize=True)


def write_report(
    images: list[ImageRecord],
    image_clusters: list[dict],
    videos: list[VideoRecord],
    video_clusters: list[dict],
    output_path: Path,
) -> None:
    duplicate_images = sum(len(cluster["removed_from_consideration"]) for cluster in image_clusters)
    duplicate_videos = sum(len(cluster["removed_from_consideration"]) for cluster in video_clusters)
    image_reduction = (duplicate_images / len(images) * 100) if images else 0
    video_reduction = (duplicate_videos / len(videos) * 100) if videos else 0
    exact_video_hashes = {
        member["sha256"]
        for cluster in video_clusters
        for member in cluster["members"]
    }
    possible_video_variants = []
    for index, video_a in enumerate(videos):
        for video_b in videos[index + 1 :]:
            if video_a.sha256 == video_b.sha256:
                continue
            if (
                video_a.duration_seconds is not None
                and video_b.duration_seconds is not None
                and abs(video_a.duration_seconds - video_b.duration_seconds) <= 0.5
                and video_a.width == video_b.width
                and video_a.height == video_b.height
            ):
                possible_video_variants.append((video_a, video_b))

    lines = [
        "# Duplicate Media Audit",
        "",
        "## Scope",
        f"- Images scanned: {len(images)}",
        f"- Videos scanned: {len(videos)}",
        "- Method: SHA-256 exact matching plus pure-Python perceptual image hashes (aHash, dHash, pHash), resolution, sharpness, and composition-quality scoring.",
        "- Safety: Originals were not deleted. Lower-quality duplicates are removed from curated website/media consideration only.",
        "",
        "## Summary",
        f"- Image duplicate/near-duplicate clusters: {len(image_clusters)}",
        f"- Images removed from consideration: {duplicate_images}",
        f"- Image duplicate reduction opportunity: {image_reduction:.1f}%",
        f"- Exact duplicate video clusters: {len(video_clusters)}",
        f"- Videos removed from consideration: {duplicate_videos}",
        f"- Video duplicate reduction opportunity: {video_reduction:.1f}%",
        "",
        "## Image Duplicate Clusters",
    ]

    if not image_clusters:
        lines.append("- No image duplicate clusters found.")
    for index, cluster in enumerate(image_clusters, start=1):
        lines.extend(
            [
                "",
                f"### Cluster {index}",
                f"- Best retained: `{cluster['best_retained']}`",
                f"- Removed from consideration: {len(cluster['removed_from_consideration'])}",
            ]
        )
        for member in cluster["members"]:
            status = "KEEP" if member["path"] == cluster["best_retained"] else "REMOVE FROM CONSIDERATION"
            lines.append(
                f"- {status}: `{member['path']}` ({member['width']}x{member['height']}, "
                f"{member['size_bytes']} bytes, sharpness {member['sharpness']}, score {member['quality_score']})"
            )

    lines.extend(["", "## Video Duplicate Clusters"])
    if not video_clusters:
        lines.append("- No exact binary duplicate videos found.")
    for index, cluster in enumerate(video_clusters, start=1):
        lines.extend(
            [
                "",
                f"### Video Cluster {index}",
                f"- Type: {cluster['type']}",
                f"- Best retained: `{cluster['best_retained']}`",
            ]
        )
        for member in cluster["members"]:
            status = "KEEP" if member["path"] == cluster["best_retained"] else "REMOVE FROM CONSIDERATION"
            lines.append(
                f"- {status}: `{member['path']}` ({member['size_bytes']} bytes, "
                f"{member.get('duration_seconds')}s, {member.get('width')}x{member.get('height')})"
            )

    lines.extend(["", "## Non-Exact Video Variant Check"])
    if possible_video_variants:
        for video_a, video_b in possible_video_variants:
            lines.append(
                f"- Review manually: `{video_a.path}` and `{video_b.path}` share duration/resolution but differ by hash."
            )
    else:
        lines.append("- No non-exact same-duration/same-resolution video variants were detected.")

    lines.extend(["", "## Video Inventory"])
    for video in sorted(videos, key=lambda item: (item.duration_seconds or 0, item.size_bytes)):
        exact_status = "duplicate group member" if video.sha256 in exact_video_hashes else "unique file"
        lines.append(
            f"- `{video.path}`: {video.size_bytes} bytes, {video.duration_seconds}s, "
            f"{video.width}x{video.height}, {exact_status}"
        )

    lines.extend(
        [
            "",
            "## Gallery Optimization Notes",
            "- Avoid showing more than one image from the same cluster in a public gallery.",
            "- Retain varied story beats: court mentorship, indoor clinic, relief supplies, school/community visit, recognition, and wellbeing conversation.",
            "- Use the retained file in each cluster for future web optimization, then generate mobile/tablet/desktop derivatives from that source.",
            "",
            "## Video Placement Notes",
            "- Use `Video/22WhatsApp Video 2026-03-24 at 10.06.26 AM.mp4` or its deployed copy for clinic highlights because it is the smaller of the clinic-style files already in use.",
            "- Use `Video/1WhatsApp Video 2026-03-24 at 10.02.13 AM.mp4` or its deployed copy for community engagement because it is the smaller community clip already in use.",
            "- Keep `featured-story.mp4` out of the homepage until it is compressed because it is much larger than the currently deployed clips.",
            "",
            "## Remaining Recommendation",
            "- If you want physical cleanup, archive the files marked REMOVE FROM CONSIDERATION into a backup folder first. Do not permanently delete until the live website is confirmed after deployment.",
        ]
    )
    output_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    AUDIT_DIR.mkdir(exist_ok=True)
    CONTACT_DIR.mkdir(parents=True, exist_ok=True)

    images = analyze_images()
    videos = analyze_videos()
    image_clusters = build_image_clusters(images)
    video_clusters = build_video_clusters(videos)

    write_csv(images, AUDIT_DIR / "image-media-inventory.csv")
    (AUDIT_DIR / "video-media-inventory.json").write_text(
        json.dumps([asdict(record) for record in videos], indent=2),
        encoding="utf-8",
    )
    (AUDIT_DIR / "media-deduplication.json").write_text(
        json.dumps(
            {
                "images_scanned": len(images),
                "videos_scanned": len(videos),
                "image_clusters": image_clusters,
                "video_clusters": video_clusters,
            },
            indent=2,
        ),
        encoding="utf-8",
    )
    make_cluster_contact_sheet(image_clusters, CONTACT_DIR / "duplicate-image-clusters.png")
    write_report(images, image_clusters, videos, video_clusters, AUDIT_DIR / "duplicate-media-report.md")
    print(f"Images scanned: {len(images)}")
    print(f"Videos scanned: {len(videos)}")
    print(f"Image clusters: {len(image_clusters)}")
    print(f"Video clusters: {len(video_clusters)}")
    print(f"Report: {AUDIT_DIR / 'duplicate-media-report.md'}")


if __name__ == "__main__":
    main()
