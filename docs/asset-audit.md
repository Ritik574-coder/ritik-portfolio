# Asset Inventory and Cleanup Plan

Audit date: 2026-07-10. This inventory intentionally distinguishes verified use from inferred subject matter; it does not claim that generated-looking images are authentic photographs.

## Used production assets

| Asset | Current use | Assessment | Action |
| --- | --- | --- | --- |
| `public/assets/profile/ritik-kumar-portrait.png` | Hero profile image | 992×1056, 1.23 MB; exact duplicate content of source `my_images/portrait.jpg` despite extension | Owner-approved for Hero use; retain and convert from an approved source to WebP/AVIF later |
| `public/assets/certificates/*.pdf` | Certification view/download | 32 files, all referenced by portfolio data | Retain |
| `public/assets/resume/ritik-resume.pdf` | Resume preview/download | Includes public PII per audit | Replace only after owner provides a redacted resume |

## Source portraits and visuals requiring owner verification

| Asset group | Count | Observation | Recommended status |
| --- | ---: | --- | --- |
| `my_images/portrait.jpg` and `public/assets/profile/ritik-kumar-portrait.png` | 2 | Byte-identical/duplicate visual, stored under mismatched extensions | Keep one approved source; regenerate web variants from it |
| `my_images/178169*.png` | 7 | Portrait-style images that appear AI-styled, with monitors/computer scenes | Do not use as owner photos until Ritik confirms they are authorized likenesses |
| `my_images/ChatGPT Image Jun 17, 2026*.png` | 6 | AI-named dashboard/person composites | Do not use as profile or project proof; archive or remove after owner review |
| `my_images/image_b4ceaba7.png` | 1 | AI-styled developer portrait | Do not use until owner verification |

## Orphaned and duplicate assets

- The 14 non-portrait source images in `my_images/` are not referenced by the application.
- `dist/` is a generated build copy of production assets and should not be treated as source-of-truth content.
- The source and app portrait are duplicate image bytes with different filenames/extensions. This should be consolidated during an owner-approved image conversion pass.
- Root `certificate/` and `public/assets/certificates/` contain duplicate certificate collections. Retain the root directory as source and make the public copy build-generated in a future asset pipeline.

## Missing, approved assets

No verified project screenshots, data dashboard captures, architecture diagrams, alternate owner portraits, favicon, or purpose-built Open Graph card were found. Do not substitute AI composites for these. Recommended next input: owner-approved headshots (hero/about/resume/contact), project screenshots from actual repositories or dashboards, and exported architecture diagrams.

## Image inventory and placement recommendations

| Category | Inventory finding | Current use | Recommendation |
| --- | --- | --- | --- |
| Verified personal photos | None can be verified from repository evidence | N/A | Do not select an image for Hero, About, or Contact until Ritik explicitly approves individual original photos |
| Owner-approved profile portrait | `public/assets/profile/ritik-kumar-portrait.png` matches `my_images/portrait.jpg` | Hero and About | Owner-approved for both placements |
| Potential project visuals | `project-dbt.jpg`, `project-sql.jpg`, `project-ecosystem.jpg`, `project-python.jpg` | Unused | Not verified as genuine project screenshots; do not attach to project cards |
| Potential diagrams | The same `project-*.jpg` set includes generic diagram-like visuals | Unused | Not verified as dbt DAGs, schemas, Medallion diagrams, or real data flows; do not attach |
| Other public images | 38 image files including `gallery-*`, `cube-*`, `skill-*`, `tech-*`, and `hero-bg.jpg` | Unused by source | Keep outside the portfolio UI until provenance and intended use are confirmed |

### Recommended images

- Hero: `public/assets/profile/ritik-kumar-portrait.png` — owner-approved.
- About: **No recommendation yet** — needs a distinct approved original owner photo.
- Contact: **No recommendation yet** — use no photo until an approved original owner photo is supplied.

The application now supports real project screenshots and verified architecture diagrams, but deliberately renders an explicit placeholder until an approved source asset is available.
