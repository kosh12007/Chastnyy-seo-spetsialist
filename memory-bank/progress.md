# Progress: Прогресс проекта и текущий статус

## 1. Что работает и готово (100%)

### Страницы и маршрутизация:
- [x] Главная страница (`/`) со всеми конверсионными секциями
- [x] Каталог услуг (`/uslugi/`) и динамические страницы услуг (`/uslugi/:slug/`)
- [x] Страница тарифов и цен (`/ceny/`) с таблицей опций
- [x] Портфолио (`/portfolio/`) и карточки кейсов (`/portfolio/:slug/`)
- [x] Страница отзывов (`/otzyvy/`)
- [x] Обо мне (`/obo-mne/`) с блоком навыков, сертификатов и принципов работы
- [x] Страница контактов (`/kontakty/`) с формой, реквизитами и картой
- [x] Блог (`/blog/`) и статьи блога (`/blog/:slug/`)
- [x] Юридические страницы (`/politika-konfidentsialnosti/`, `/soglasie-opd/`)
- [x] Страница 404 (`NotFoundPage`)

### Компоненты и логика:
- [x] UI-библиотека (`Button`, `Input`, `Textarea`, `Card`, `Badge`, `PhoneInput`, `Container`)
- [x] Layout (`Header` с эффектом скролла, `Footer`, `MobileMenu`, `Breadcrumbs`)
- [x] Интерактивные модальные окна (`CallbackModal`, `DiscussionModal`)
- [x] Валидация форм (React Hook Form + Zod) и маска телефона (libphonenumber-js)
- [x] Анимации появления секций (`AnimatedSection` на Framer Motion)
- [x] Слайдеры на Swiper

### SEO и инфраструктура:
- [x] Управление мета-тегами через `react-helmet-async`
- [x] Микроразметка Schema.org (`LocalBusiness`, `FAQPage`, `Article`, `WebPage`)
- [x] Канонические URL и Open Graph теги
- [x] `sitemap.xml` и `robots.txt`
- [x] Favicon (`favicon.svg`, `favicon.ico`)
- [x] Docker Dev (Nginx прокси на 8085 + Vite Dev Server на 3000)
- [x] Docker Prod (Nginx SSL Let's Encrypt + кэширование статики 365d + no-cache HTML)
- [x] Скрипты запуска и бэкапа под Windows (`start.bat`, `stop.bat`, `REstart.bat`, `create_backup.bat`)

---

## 2. Что осталось сделать (Backlog)

### Высокий приоритет:
- [ ] Подключение реальной отправки заявок из форм (в Telegram-бот / email / CRM) вместо заглушек `console.log`.
- [ ] Замена тестового домена `https://yoursite.ru/` в `public/robots.txt` и `public/sitemap.xml` на реальный боевой домен.
- [ ] Заполнение реальных контактных данных в `.env` (телефон, email, telegram).

### Средний приоритет:
- [ ] Подключение скрипта аналитики (Яндекс.Метрика / цели на отправку форм).
- [ ] Написание юнит-тестов (Vitest / React Testing Library) для схем валидации и UI-компонентов.
- [ ] Оптимизация и добавление реальных фото кейсов и сертификатов в формате `.webp`.

---

## 3. Известные особенности и решения (Known Issues)
* **Ошибка 403 Forbidden в Dev Nginx**: решена добавлением `server.allowedHosts: true` в `vite.config.ts` и пробросом корректных `Host $host` заголовков в `docker/nginx/nginx.conf`.
* **Порты**: Nginx слушает порт `8085` на хосте, Vite внутри контейнера слушает порт `3000`. Оба порта доступны локально.

