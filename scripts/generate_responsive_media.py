from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
MEDIA_DIRS = [ROOT / "public" / "media", ROOT / "public" / "media" / "inspiration"]
WIDTHS = [360, 640, 960, 1280, 1600]
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def generate_variant(source: Path, width: int, output: Path, fmt: str) -> None:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        target_width = min(width, image.width)
        ratio = target_width / image.width
        target_height = max(1, round(image.height * ratio))
        resized = image.resize((target_width, target_height), Image.Resampling.LANCZOS)
        output.parent.mkdir(parents=True, exist_ok=True)

        if fmt == "WEBP":
            resized.save(output, "WEBP", quality=78, method=6)
        else:
            resized.save(output, "JPEG", quality=82, optimize=True, progressive=True)


def main() -> None:
    created = 0
    for media_dir in MEDIA_DIRS:
        if not media_dir.exists():
            continue
        optimized_dir = media_dir / "optimized"
        for source in sorted(media_dir.iterdir()):
            if not source.is_file() or source.suffix.lower() not in EXTENSIONS:
                continue
            stem = source.stem
            for width in WIDTHS:
                generate_variant(source, width, optimized_dir / f"{stem}-{width}.webp", "WEBP")
                generate_variant(source, width, optimized_dir / f"{stem}-{width}.jpg", "JPEG")
                created += 2
    print(f"Generated {created} responsive image variants.")


if __name__ == "__main__":
    main()
