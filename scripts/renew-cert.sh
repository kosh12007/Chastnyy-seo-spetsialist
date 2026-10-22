#!/bin/bash
# Обновление SSL сертификата

set -e

echo "🔄 Обновление SSL сертификата..."

docker compose -f docker-compose.prod.yml run --rm certbot \
    certbot renew \
    --webroot \
    --webroot-path=/var/www/certbot

echo "🔄 Перезапуск Nginx..."
docker compose -f docker-compose.prod.yml restart nginx

echo "✅ Сертификат обновлён!"
