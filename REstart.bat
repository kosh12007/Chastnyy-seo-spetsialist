@echo off
echo ==========================================
echo  Перезапуск проекта SEO Site (Docker)
echo ==========================================
echo.

echo Останавливаем контейнеры...
docker compose down

echo.
echo Запускаем контейнеры...
docker compose up -d

if %errorlevel% neq 0 (
    echo [ERROR] Ошибка при перезапуске docker compose!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo  Проект SEO Site перезапущен!
echo ==========================================
echo.
echo URL:      http://localhost:8085
echo.
echo Для просмотра логов: docker compose logs -f
echo Для остановки:       docker compose down
echo.
pause
