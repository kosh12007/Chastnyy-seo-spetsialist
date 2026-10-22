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
├── create_backup.bat                 # Скрипт создания zip-бэкапа проекта с меткой времени
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

## 📝 Руководство по добавлению контента

Вся контентная часть проекта спроектирована по модульному принципу: страницы формируются динамически на основе типизированных данных без необходимости вручную верстать новые JSX-страницы или менять роутинг в `App.tsx`.

---

### 1. Как добавить новую коммерческую страницу (Услугу)

Все страницы услуг работают через динамический маршрут `/uslugi/:slug/`. Для добавления новой услуги:

#### Шаг 1.1. Создайте файл услуги в `src/data/services/`
Создайте файл `src/data/services/<slug-uslugi>.ts`, например, `src/data/services/ecommerce-seo.ts`:

```typescript
import { Service } from '@/types';

export const service: Service = {
  id: 'ecommerce-seo',
  title: 'SEO для интернет-магазинов',
  description: 'Комплексное продвижение каталогов товаров, оптимизация фильтров и страниц категорий для взрывного роста продаж.',
  icon: 'ShoppingBag', // Имя иконки из библиотеки Lucide React (Search, BarChart, Layers, etc.)
  slug: 'seo-dlya-internet-magazina', // ЧПУ адрес страницы
  content: `
    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Особенности продвижения E-commerce</h2>
        <p class="mb-6 text-dark-800">
          Продвижение интернет-магазина требует особого подхода: оптимизации тысяч страниц фильтров, пагинации, карточек товаров и микроразметки Product/Offer.
        </p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-dark-50">
            <span class="text-primary-600 font-bold">01.</span>
            <span class="text-dark-800"><b>Оптимизация фильтрации:</b> Генерация посадочных страниц под низкочастотные запросы.</span>
          </div>
          <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-dark-50">
            <span class="text-primary-600 font-bold">02.</span>
            <span class="text-dark-800"><b>Коммерческие факторы:</b> Цены, доставка, наличие, отзывы и удобство оформления заказа.</span>
          </div>
        </div>
      </section>

      <section class="bg-dark-50 p-8 rounded-2xl">
        <h2 class="text-2xl font-bold font-heading mb-6">Этапы работ для магазинов</h2>
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <h3 class="font-bold text-lg">Аудит структуры и индексации</h3>
              <p class="text-dark-800 text-sm">Поиск дублей, страниц пагинации и настройка канонических адресов.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
};
```

#### Шаг 1.2. Зарегистрируйте услугу в `src/data/index.ts`
Откройте файл [src/data/index.ts](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/src/data/index.ts), импортируйте новую услугу и добавьте её в массив `services`:

```typescript
import { service as ecommerceSeo } from './services/ecommerce-seo';

export const services: Service[] = [
  seoProdvizhenie,
  seoAudit,
  yandex,
  google,
  contentMarketing,
  konsultatsiya,
  ecommerceSeo, // <-- Добавлено
];
```

#### Что произойдет автоматически:
* Карточка услуги мгновенно появится в общем каталоге `/uslugi/` и на главной странице в блоке «Услуги».
* Будет доступна отдельная детальная страница по адресу `/uslugi/seo-dlya-internet-magazina/`.
* Для страницы автоматически сгенерируются мета-теги `title`, `description`, `canonical` и микроразметка Schema.org `Service` / `ProfessionalService`.

#### Шаг 1.3. Добавьте URL в карту сайта `public/sitemap.xml`
Внесите новый адрес в [public/sitemap.xml](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/public/sitemap.xml):

```xml
  <url>
    <loc>https://yoursite.ru/uslugi/seo-dlya-internet-magazina/</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
```

---

### 2. Как добавить новую статью в Блог

Все статьи блога работают через динамический маршрут `/blog/:slug/`. Добавление новой публикации выполняется в 2 шага:

#### Шаг 2.1. Создайте файл статьи в `src/data/blog/`
Создайте файл `src/data/blog/<slug-stati>.ts`, например, `src/data/blog/optimizatsiya-kartochek-tovara.ts`:

```typescript
import { Article } from '@/types';

export const article: Article = {
  slug: 'optimizatsiya-kartochek-tovara',
  title: 'Как оптимизировать карточки товаров для интернет-магазина в 2026 году',
  date: '2026-04-15', // Формат ГГГГ-ММ-ДД (статьи автоматически сортируются от свежих к старым)
  readTime: '7 мин',
  excerpt: 'Пошаговое руководство по внутренней оптимизации товарных карточек: шаблоны тегов Title и H1, микроразметка Schema.org Product, отзывы и блоки перелинковки.',
  content: `
    <p>
      Карточки товаров часто приносят интернет-магазинам до 60% всего органического трафика по «горячим» транзакционным запросам. Разберем ключевые элементы их правильной SEO-оптимизации.
    </p>

    <h2>1. Формирование мета-тегов по шаблону</h2>
    <p>
      Для тысяч товаров невозможно прописать теги вручную. Настройте автогенерацию:
    </p>
    <ul>
      <li><b>Title:</b> [Название товара] [Артикул] — купить в Москве по цене [Цена] руб.</li>
      <li><b>Description:</b> Закажите [Название товара] в интернет-магазине с быстрой доставкой по РФ. В наличии, гарантия качества, отзывы покупателей.</li>
      <li><b>H1:</b> [Название товара] [Бренд / Модель].</li>
    </ul>

    <h2>2. Микроразметка Schema.org Product и Offer</h2>
    <p>
      Разметка структурированных данных позволяет поисковикам выводить цену, статус наличия и рейтинг со звездочками прямо в поисковой выдаче.
    </p>

    <h2>Заключение</h2>
    <p>
      Внедрение этих рекомендаций повышает CTR в поиске Яндекса и Google на 25-40%.
    </p>
  `,
};
```

#### Шаг 2.2. Зарегистрируйте статью в `src/data/blog.ts`
Откройте файл [src/data/blog.ts](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/src/data/blog.ts) и подключите новую статью:

```typescript
import { Article } from '@/types';
import { article as kakVybratSeo } from './blog/kak-vybrat-seo';
import { article as seoVsContext } from './blog/seo-vs-context';
import { article as stoimostSeo2026 } from './blog/stoimost-seo-2026';
import { article as optimizatsiyaKartochek } from './blog/optimizatsiya-kartochek-tovara'; // <-- Импорт

export const blogArticles: Article[] = [
  kakVybratSeo,
  seoVsContext,
  stoimostSeo2026,
  optimizatsiyaKartochek, // <-- Добавлено в список
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
```

#### Что произойдет автоматически:
* Массив `blogArticles` отсортирует статьи по дате `date` (самая свежая публикация встанет первой).
* Статья сразу отобразится в каталоге `/blog/`.
* Будет доступна отдельная страница `/blog/optimizatsiya-kartochek-tovara/`.
* Автоматически сформируется микроразметка `Article` с автором, датами публикации и логотипом.

#### Шаг 2.3. Добавьте URL в `public/sitemap.xml`:
```xml
  <url>
    <loc>https://yoursite.ru/blog/optimizatsiya-kartochek-tovara/</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
```

---

### 3. Как добавить новый кейс в Портфолио

Кейсы хранятся в массиве `cases` в файле [src/data/index.ts](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/src/data/index.ts):

1. Откройте `src/data/index.ts`.
2. Добавьте новый объект в массив `cases`:
```typescript
{
  id: 'case-5',
  title: 'SEO-продвижение сервиса доставки еды',
  niche: 'Доставка готовой еды и рационов',
  region: 'Москва и МО',
  duration: '5 месяцев',
  before: { traffic: 1200, positions: 22, conversion: 1.4 },
  after: { traffic: 6800, positions: 4, conversion: 3.9 },
  growth: { traffic: 466, positions: 82, conversion: 178 },
  slug: 'dostavka-edy',
  image: '/images/cases/food-delivery.webp',
  tasks: [
    'Вывести ключевые запросы по рационам в ТОП-5 Яндекса',
    'Увеличить конверсию из поискового трафика',
  ],
  done: [
    'Собрана семантика на 400+ транзакционных запросов',
    'Проведена внутренняя перелинковка меню',
    'Оптимизирована мобильная версия сайта',
  ],
}
```
3. Кейс появится на странице `/portfolio/` и получит индивидуальный экран `/portfolio/dostavka-edy/`.

---

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

В проект встроен скрипт создания резервных копий [create_backup.bat](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/create_backup.bat).
Он автоматически исключает `node_modules`, `.git`, кэши и собирает чистый ZIP-архив с датой и временем:
```
seo_site_backup_YYYY-MM-DD_HH-MM-SS.zip
```

