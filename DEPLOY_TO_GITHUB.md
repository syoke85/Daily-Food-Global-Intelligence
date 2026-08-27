# Deploy to GitHub

The project is prepared for GitHub Pages and GitHub Actions. No credentials are stored in the files.

Deployment root: `C:\Users\Yoke\Documents\Codex\2026-08-27\files-pasted-by-the-user-codex`.
Upload/push the complete contents of this folder, including `.github`, `data`, `sources`, `services`, `scripts`, and `tests`.

1. Authorize/connect a GitHub account and create a repository named `Daily-Food-Global-Intelligence`.
2. Run `deploy-to-github.bat` in this folder, then push the repository with the connected GitHub client.
3. In repository Settings → Pages, choose GitHub Actions as the source.

The Pages workflow deploys the static app. The daily workflow runs at `22:00 UTC`, which is `06:00 Asia/Kuala_Lumpur`, and supports `workflow_dispatch`. Add `OPENAI_API_KEY` as a GitHub Actions Secret if AI analysis is desired; never put it in frontend code or JSON data.
