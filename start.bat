@echo off
setlocal
where node >nul 2>nul
if errorlevel 1 (echo Node.js 20+ is required. Install it from https://nodejs.org/ & pause & exit /b 1)
if not exist node_modules (echo Installing dependencies... & npm install)
echo Starting Daily Intelligence at http://localhost:4173
start "Daily Intelligence Server" /b cmd /c "npm start"
timeout /t 2 /nobreak >nul
start "" http://localhost:4173
