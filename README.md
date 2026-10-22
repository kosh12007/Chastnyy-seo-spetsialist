# Сайт частного SEO-специалиста

Современный, быстрый и оптимизированный для поисковых систем веб-сайт частного специалиста по SEO-продвижению сайтов в поисковых системах Яндекс и Google.

Разработан в соответствии с требованиями к коммерческим факторам ранжирования, высокой конверсии (CRO) и максимальным показателям Core Web Vitals.

---

## 🛠 Технологический стек

* **Ядро**: [React 18.3](https://react.dev/), [TypeScript 5.4](https://www.typescriptlang.org/), [Vite 5.1+](https://vitejs.dev/)
* **Стилизация**: [Tailwind CSS 3.4](https://tailwindcss.com/) + плагины `@tailwindcss/typography`, `@tailwindcss/forms`
* **Анимации и интерактив**: [Framer Motion](https://www.framer.com/motion/), [Swiper 11](https://swiperjs.com/), [Lucide React](https://lucide.dev/)
* **Формы и валидация**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/), [libphonenumber-js](https://gitlab.com/catamphetamine/libphonenumber-js)
* **SEO и метаданные**: [react-helmet-async](https://github.com/staylor/react-helmet-async), Schema.org микроразметка (JSON-LD), Open Graph
* **Инфраструктура и контейнеризация**: Docker, Docker Compose, Nginx (Alpine), Certbot (Let's Encrypt SSL)

---

## 📁 Структура проекта

```
site/
├── docker/                           # Конфигурации веб-сервера
│   └── nginx/
│       ├── nginx.conf                # Dev-конфигурация (прокси к Vite + WebSockets HMR)
│       └── nginx.prod.conf.template  # Prod-конфигурация (SSL, HSTS, gzip, кэширование 365d)
├── public/                           # Публичные статичные файлы
│   ├── assets/                       # Векторные паттерны
│   ├── .htaccess                     # Конфигурация Apache (MIME-типы, SPA-фолбэк)
│   ├── favicon.ico / favicon.svg     # Иконки сайта
│   ├── robots.txt                    # Инструкции для поисковых роботов
│   └── sitemap.xml                   # Карта сайта с приоритетами обхода
├── src/
│   ├── assets/                       # Медиа-ресурсы, фоновые паттерны
│   ├── components/
│   │   ├── ui/                       # Базовые UI-компоненты (Button, Input, Card, Badge и др.)
│   │   ├── layout/                   # Header, Footer, MainLayout, Breadcrumbs
│   │   ├── navigation/               # Десктопное и мобильное меню (MobileMenu)
│   │   ├── common/                   # AnimatedSection, CallbackModal, DiscussionModal, Spinner
│   │   └── sections/                 # Секции страниц (Hero, Tariffs, Cases, FAQ, Reviews и др.)
│   ├── data/                         # Контент страниц, список услуг, кейсы, статьи блога
│   ├── hooks/                        # Пользовательские хуки React
│   ├── pages/                        # Компоненты страниц с ленивой загрузкой (lazy loading)
│   ├── styles/                       # Глобальные стили (globals.css) и Tailwind директивы
│   ├── types/                        # TypeScript-интерфейсы и типы сущностей
│   └── utils/                        # Хелперы, Zod-схемы валидации, генераторы Schema.org
├── create_backup_serp.bat            # Скрипт создания zip-бэкапа проекта с меткой времени
├── docker-compose.yml                # Локальное dev-окружение (порты 8085 Nginx, 3000 Vite)
├── docker-compose.prod.yml           # Продакшн-окружение со сборкой и Let's Encrypt
├── Dockerfile                        # Сборка контейнера для разработки
├── Dockerfile.prod                   # Многоэтапный (multi-stage) образ для продакшена
├── start.bat / stop.bat / REstart.bat# Скрипты быстрого управления Docker под Windows
├── tailwind.config.ts                # Дизайн-токены, палитра цветов, шрифты Manrope / Inter
└── vite.config.ts                    # Конфигурация сборщика с manualChunks код-сплиттингом
```

---

## 🚀 Быстрый старт

### Вариант 1: Запуск через Docker (рекомендуемый для dev)

1. Убедитесь, что запущен **Docker Desktop**.
2. Скопируйте файл переменных окружения:
   ```cmd
   copy .env.example .env
   ```
3. Запустите скрипт запуска:
   ```cmd
   start.bat
   ```
   Либо выполните команду:
   ```bash
   docker compose up -d
   ```
4. Откройте в браузере:
   * Основной адрес (через Nginx): **[http://localhost:8085](http://localhost:8085)**
   * Прямой адрес Vite: **[http://localhost:3000](http://localhost:3000)**

5. Для остановки проекта:
   ```cmd
   stop.bat
   ```

---

### Вариант 2: Локальный запуск через Node.js (без Docker)

1. Установите зависимости (Node.js 20+):
   ```bash
   npm install
   ```
2. Запустите dev-сервер:
   ```bash
   npm run dev
   ```
3. Откройте **[http://localhost:3000](http://localhost:3000)**.

---

## 📜 Доступные NPM-скрипты

| Скрипт | Назначение |
| :--- | :--- |
| `npm run dev` | Запуск сервера разработки Vite с HMR |
| `npm run build` | Компиляция TypeScript (`tsc`) и сборка production-бандла в папку `dist` |
| `npm run preview` | Локальный предпросмотр собранной production-версии |
| `npm run type-check` | Проверка типов всего проекта без генерации файлов (`tsc --noEmit`) |
| `npm run lint` | Проверка кода линтером ESLint |
| `npm run lint:fix` | Автоматическое исправление ошибок ESLint |
| `npm run format` | Форматирование исходного кода с помощью Prettier |

---

## ⚙️ Переменные окружения (.env)

| Переменная | Описание | Значение по умолчанию |
| :--- | :--- | :--- |
| `VITE_APP_SITE_URL` | Канонический URL сайта | `http://localhost:3000` |
| `VITE_APP_TITLE` | Заголовок сайта для Open Graph | `SEO Специалист` |
| `VITE_APP_PHONE` | Контактный номер телефона | `+79991234567` |
| `VITE_APP_EMAIL` | Контактный email | `info@example.ru` |
| `VITE_APP_WHATSAPP` | Номер WhatsApp без знака `+` | `79991234567` |
| `VITE_APP_TELEGRAM` | Username в Telegram (без `@`) | `seo_specialist` |
| `VITE_APP_ADDRESS` | Физический адрес для микроразметки | `г. Москва, ул. Примерная, д. 1` |
| `VITE_APP_WORKING_HOURS` | Часы работы | `Пн-Пт: 10:00-19:00` |
| `VITE_APP_MAP_LATITUDE` | Широта для карты / Schema.org | `55.7558` |
| `VITE_APP_MAP_LONGITUDE` | Долгота для карты / Schema.org | `37.6173` |

---

## 🌐 Маршрутизация и страницы

Приложение использует React Router v6. Все страницы разделены на отдельные чанки с ленивой загрузкой (`lazy()`):

* `/` — Главная страница (Hero, Услуги, Тарифы, Кейсы, Преимущества, Отзывы, FAQ, CTA)
* `/uslugi/` — Каталог всех услуг
* `/uslugi/:slug/` — Детальная страница конкретной услуги (Яндекс, Google, Аудит и др.)
* `/ceny/` — Страница тарифов с подробной сеткой сравнения
* `/portfolio/` — Портфолио выполненных проектов
* `/portfolio/:slug/` — Разбор отдельного кейса с графиками роста позиций и трафика
* `/otzyvy/` — Отзывы клиентов с верификацией
* `/obo-mne/` — Страница специалиста (опыт, сертификаты, стек инструментов)
* `/kontakty/` — Контактная информация, реквизиты, карта, форма связи
* `/blog/` — Экспертные статьи по SEO-оптимизации
* `/blog/:slug/` — Детальная страница статьи с оглавлением и микроразметкой `Article`
* `/politika-konfidentsialnosti/` — Политика конфиденциальности (152-ФЗ)
* `/soglasie-opd/` — Согласие на обработку персональных данных

---

## 🔍 SEO и поисковая оптимизация

Проект спроектирован с учетом строгих критериев поисковой оптимизации:
1. **Dynamic Meta & Canonical**: `react-helmet-async` управляет `title`, `description`, `canonical` и Open Graph тегами на каждой странице.
2. **Schema.org (JSON-LD)**:
   * `ProfessionalService` / `LocalBusiness` на главной и контактной страницах
   * `FAQPage` на страницах с аккордеонами вопросов и ответов
   * `Article` в блоге (авторство, даты публикации и обновления, логотип)
   * `BreadcrumbList` для хлебных крошек
3. **Краулинг**:
   * Настроенный [robots.txt](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/public/robots.txt) с правилами индексации.
   * Актуальный XML-файл [sitemap.xml](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/public/sitemap.xml) с частотами обновления (`changefreq`) и приоритетами (`priority`).

---

## 🔒 Продакшн-развертывание

Для развертывания на боевом сервере используется `docker-compose.prod.yml`:
1. Укажите домен в `.env` (например, `DOMAIN=seospecialist.ru`).
2. Запустите:
   ```bash
   docker compose -f docker-compose.prod.yml up -d
   ```
3. Nginx автоматически:
   * Получит и настроит бесплатный SSL-сертификат Let's Encrypt через Certbot.
   * Настроит автоматический редирект с HTTP на HTTPS.
   * Применит HTTP security headers (`Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`).
   * Включит долгосрочное кэширование статики на 1 год (`Cache-Control: public, immutable`) для всех чанков Vite.
   * Запретит кэширование `index.html` для гарантированного обновления приложения у пользователей.

---

## 💾 Резервное копирование

В проект встроен скрипт создания резервных копий [create_backup_serp.bat](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/create_backup_serp.bat).
Он автоматически исключает `node_modules`, `.git`, кэши и собирает чистый ZIP-архив с датой и временем:
```
seo_site_backup_YYYY-MM-DD_HH-MM-SS.zip
```

