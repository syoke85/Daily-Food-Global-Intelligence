# Deployment Status

Deployment root: `C:\Users\Yoke\Documents\Codex\2026-08-27\files-pasted-by-the-user-codex`.
This is the complete deployment-ready repository and the source of truth for GitHub upload.

| Area | Status | Evidence |
|---|---|---|
| Project | READY | Static frontend, Node API, data pipeline and documentation present |
| Build | READY | `node --check` passes for application and generator |
| GitHub Actions | READY | `.github/workflows/daily-intelligence.yml` with `workflow_dispatch` |
| Daily schedule | READY | `0 22 * * *` UTC = 06:00 Asia/Kuala_Lumpur |
| GitHub Pages | READY | `.github/workflows/pages.yml` with subpath asset handling |
| Static daily JSON | READY | `data/index.json` and safe versioned writes |
| News sources | BLOCKED | No authenticated GitHub Actions runtime yet; FoodNavigator default feed is configured; Sin Chew/Nanyang need legitimate feed discovery |
| OpenAI | OPTIONAL/BLOCKED | Workflow reads `OPENAI_API_KEY`; absent analysis is `AI_ANALYSIS_PENDING` |
| Archive | READY | Frontend reads versioned daily JSON architecture |
| PWA | READY | Manifest, service worker and icon included |
| Tests | READY | 8/8 Node tests pass |
| Production URL | BLOCKED | No GitHub account/repository authorization or remote available |

The only deployment blocker is GitHub authorization. No secret is stored in this repository.
