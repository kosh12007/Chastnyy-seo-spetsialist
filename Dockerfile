FROM node:20-alpine AS dev

WORKDIR /app

# Устанавливаем зависимости
COPY package.json package-lock.json* ./
RUN npm ci

# Копируем исходники
COPY . .

# Открываем порт
EXPOSE 3000

# Запускаем dev-сервер
CMD ["npm", "run", "dev"]
