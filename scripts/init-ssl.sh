#!/bin/bash
# Инициализация SSL сертификата Let's Encrypt
# Запускать ПЕРЕД первым стартом prod-окружения

set -e

DOMAIN=${1:?"Usage: ./init-ssl.sh example.ru"}
EMAIL=${2:?"Usage: ./init-ssl.sh example.ru email@example.com"}

echo "🔐 Инициализация SSL сертификата для $DOMAIN..."

# Создаём директории
mkdir -p certbot/conf
mkdir -p certbot/www
mkdir -p logs/nginx

# Запускаем Nginx для верификации
echo "📦 Запуск Nginx для верификации..."
docker compose -f docker-compose.prod.yml up -d nginx

# Получаем сертификат
echo "🔑 Получение сертификата..."
docker compose -f docker-compose.prod.yml run --rm certbot \
    certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    -d "$DOMAIN" \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    --force-renewal

echo "✅ SSL сертификат получен!"
echo "📂 Сертификаты: ./certbot/conf/live/$DOMAIN/"

# Перезапускаем Nginx с SSL
echo "🔄 Перезапуск Nginx с SSL..."
docker compose -f docker-compose.prod.yml restart nginx

echo "🎉 Готово! Сайт доступен по https://$DOMAIN"
