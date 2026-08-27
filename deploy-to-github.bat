@echo off
setlocal
where git >nul 2>nul
if errorlevel 1 (echo Git is required. Install Git for Windows, then run this file again.&pause&exit /b 1)
git rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (git init)
git add -A
git diff --cached --quiet
if errorlevel 1 git commit -m "Initial Daily Food and Global Intelligence app"
echo.
echo Deployment package is ready.
echo Recommended GitHub repository name: Daily-Food-Global-Intelligence
echo Next external action: authorize/connect GitHub and create that repository.
echo Then add the repository remote and push the current branch using your GitHub client.
echo GitHub Pages should use the GitHub Actions source.
pause
