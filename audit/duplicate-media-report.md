# Duplicate Media Audit

## Scope
- Images scanned: 47
- Videos scanned: 7
- Method: SHA-256 exact matching plus pure-Python perceptual image hashes (aHash, dHash, pHash), resolution, sharpness, and composition-quality scoring.
- Safety: Originals were not deleted. Lower-quality duplicates are removed from curated website/media consideration only.

## Summary
- Image duplicate/near-duplicate clusters: 3
- Images removed from consideration: 3
- Image duplicate reduction opportunity: 6.4%
- Exact duplicate video clusters: 2
- Videos removed from consideration: 2
- Video duplicate reduction opportunity: 28.6%

## Image Duplicate Clusters

### Cluster 1
- Best retained: `Images\indoor-clinic.jpeg`
- Removed from consideration: 1
- KEEP: `Images\indoor-clinic.jpeg` (720x563, 91064 bytes, sharpness 3703.95, score 34.249)
- REMOVE FROM CONSIDERATION: `Images\8WhatsApp Image 2026-03-24 at 12.27.45 PM.jpeg` (720x563, 91064 bytes, sharpness 3703.95, score 34.249)

### Cluster 2
- Best retained: `Images\community-group.jpeg`
- Removed from consideration: 1
- KEEP: `Images\community-group.jpeg` (720x558, 111487 bytes, sharpness 4596.62, score 41.652)
- REMOVE FROM CONSIDERATION: `Images\WhatsApp Image 2026-03-24 at 10.02.07 AM.jpeg` (720x558, 111487 bytes, sharpness 4596.62, score 41.652)

### Cluster 3
- Best retained: `Images\program-certificate.jpeg`
- Removed from consideration: 1
- KEEP: `Images\program-certificate.jpeg` (714x599, 133095 bytes, sharpness 5807.72, score 51.939)
- REMOVE FROM CONSIDERATION: `Images\WhatsApp Image 2026-03-24 at 10.07.43 AM.jpeg` (714x599, 133095 bytes, sharpness 5807.72, score 51.939)

## Video Duplicate Clusters

### Video Cluster 1
- Type: exact-binary
- Best retained: `Video\1WhatsApp Video 2026-03-24 at 10.02.13 AM.mp4`
- KEEP: `Video\1WhatsApp Video 2026-03-24 at 10.02.13 AM.mp4` (11057894 bytes, 61.1s, 640x360)
- REMOVE FROM CONSIDERATION: `Video\WhatsApp Video 2026-03-24 at 10.06.26 AM.mp4` (11057894 bytes, 61.1s, 640x360)

### Video Cluster 2
- Type: exact-binary
- Best retained: `Video\22WhatsApp Video 2026-03-24 at 10.06.26 AM.mp4`
- KEEP: `Video\22WhatsApp Video 2026-03-24 at 10.06.26 AM.mp4` (8247005 bytes, 45.63s, 640x360)
- REMOVE FROM CONSIDERATION: `Video\WhatsApp Video 2026-03-24 at 10.02.12 AM (1).mp4` (8247005 bytes, 45.63s, 640x360)

## Non-Exact Video Variant Check
- No non-exact same-duration/same-resolution video variants were detected.

## Video Inventory
- `Video\WhatsApp Video 2026-03-24 at 10.02.13 AM.mp4`: 19281849 bytes, 14.7s, 1280x720, unique file
- `Video\22WhatsApp Video 2026-03-24 at 10.06.26 AM.mp4`: 8247005 bytes, 45.63s, 640x360, duplicate group member
- `Video\WhatsApp Video 2026-03-24 at 10.02.12 AM (1).mp4`: 8247005 bytes, 45.63s, 640x360, duplicate group member
- `Video\1WhatsApp Video 2026-03-24 at 10.02.13 AM.mp4`: 11057894 bytes, 61.1s, 640x360, duplicate group member
- `Video\WhatsApp Video 2026-03-24 at 10.06.26 AM.mp4`: 11057894 bytes, 61.1s, 640x360, duplicate group member
- `Video\WhatsApp Video 2026-03-24 at 10.02.12 AM.mp4`: 12129990 bytes, 67.11s, 640x360, unique file
- `Video\featured-story.mp4`: 26584112 bytes, 263.91s, 640x360, unique file

## Gallery Optimization Notes
- Avoid showing more than one image from the same cluster in a public gallery.
- Retain varied story beats: court mentorship, indoor clinic, relief supplies, school/community visit, recognition, and wellbeing conversation.
- Use the retained file in each cluster for future web optimization, then generate mobile/tablet/desktop derivatives from that source.

## Video Placement Notes
- Use `Video/22WhatsApp Video 2026-03-24 at 10.06.26 AM.mp4` or its deployed copy for clinic highlights because it is the smaller of the clinic-style files already in use.
- Use `Video/1WhatsApp Video 2026-03-24 at 10.02.13 AM.mp4` or its deployed copy for community engagement because it is the smaller community clip already in use.
- Keep `featured-story.mp4` out of the homepage until it is compressed because it is much larger than the currently deployed clips.

## Remaining Recommendation
- If you want physical cleanup, archive the files marked REMOVE FROM CONSIDERATION into a backup folder first. Do not permanently delete until the live website is confirmed after deployment.
