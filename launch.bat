@echo off
title BMS Web Supervision
echo Lancement du backend (FastAPI)...
start cmd /k "cd /d backend && uvicorn main:app --reload"

timeout /t 2 >nul
echo Lancement du frontend (React / Vite)...
start cmd /k "cd /d frontend && npm run dev"

timeout /t 2 >nul
echo Ouverture du navigateur...
start http://localhost:5173

echo Serveur lance. Vous pouvez fermer cette fenetre si tout est OK.
pause
exit