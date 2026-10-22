@echo off
setlocal EnableDelayedExpansion

:: --- Настройка логгера (визуальная) ---
echo ============================================
echo   СОЗДАНИЕ РЕЗЕРВНОЙ КОПИИ SEO SITE
echo ============================================

:: Получаем текущую дату и время
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set YYYY=%datetime:~0,4%
set MM=%datetime:~4,2%
set DD=%datetime:~6,2%
set HH=%datetime:~8,2%
set MIN=%datetime:~10,2%
set SS=%datetime:~12,2%

:: Формируем имя архива
set "ARCHIVE_NAME=seo_site_backup_%YYYY%-%MM%-%DD%_%HH%-%MIN%-%SS%.zip"

:: Создаем временную директорию для сбора файлов
set TEMP_DIR=temp_backup_%YYYY%-%MM%-%DD%_%HH%-%MIN%-%SS%
mkdir %TEMP_DIR%

:: Создаем список исключений для xcopy
echo .git > exclude_list.txt
echo node_modules >> exclude_list.txt
echo __pycache__ >> exclude_list.txt
echo .env >> exclude_list.txt
echo .venv >> exclude_list.txt
echo build >> exclude_list.txt
echo dist >> exclude_list.txt

echo [1/4] Копирование основных директорий...
:: Копируем основные папки проекта
xcopy /E /I /Q /Y src "%TEMP_DIR%\src" /EXCLUDE:exclude_list.txt
xcopy /E /I /Q /Y public "%TEMP_DIR%\public"
xcopy /E /I /Q /Y docker "%TEMP_DIR%\docker"
xcopy /E /I /Q /Y scripts "%TEMP_DIR%\scripts"
xcopy /E /I /Q /Y static "%TEMP_DIR%\static"

echo [2/4] Копирование конфигурационных файлов...
copy package.json "%TEMP_DIR%\"
copy package-lock.json "%TEMP_DIR%\"
copy tsconfig.json "%TEMP_DIR%\"
copy tsconfig.node.json "%TEMP_DIR%\"
copy vite.config.ts "%TEMP_DIR%\"
copy tailwind.config.ts "%TEMP_DIR%\"
copy postcss.config.js "%TEMP_DIR%\"
copy index.html "%TEMP_DIR%\"
copy .env.example "%TEMP_DIR%\"
copy Dockerfile "%TEMP_DIR%\"
copy Dockerfile.prod "%TEMP_DIR%\"
copy docker-compose.yml "%TEMP_DIR%\"
copy docker-compose.prod.yml "%TEMP_DIR%\"
copy *.bat "%TEMP_DIR%\"

echo [3/4] Создание архива... это может занять время
powershell Compress-Archive -Path "%TEMP_DIR%\*" -DestinationPath "%ARCHIVE_NAME%" -Force

echo [4/4] Очистка временных файлов...
rmdir /S /Q %TEMP_DIR%
del exclude_list.txt

echo.
echo ============================================
echo   БЭКАП УСПЕШНО СОЗДАН: %ARCHIVE_NAME%
echo ============================================
echo.
pause