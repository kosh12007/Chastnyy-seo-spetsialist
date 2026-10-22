# Tech Context: Технический контекст и окружение

## 1. Стек и версии

| Компонент / Пакет | Версия | Назначение |
| :--- | :--- | :--- |
| **Node.js** | 20+ (Alpine в Docker) | Среда выполнения JavaScript |
| **React** | 18.3.1 | UI-библиотека с Concurrent Features |
| **TypeScript** | 5.4.2 | Статическая типизация |
| **Vite** | 5.1.5 (runtime 5.4.21) | Сборщик и сервер разработки |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS-фреймворк |
| **Framer Motion** | 12.38.0 | Декларативные анимации появления блоков |
| **Swiper** | 11.0.7 | Слайдеры кейсов и отзывов |
| **Lucide React** | 0.363.0 | Векторные иконки интерфейса |
| **React Hook Form** | 7.51.0 | Неконтролируемые высокопроизводительные формы |
| **Zod** | 3.22.4 | Схемы данных и валидация |
| **React Helmet Async** | 2.0.4 | Асинхронное управление тегами `<head>` |
| **Nginx** | 1.25 Alpine | Реверс-прокси, SSL, сжатие |
| **Certbot** | Latest | Автоматизация сертификатов Let's Encrypt |

---

## 2. Path Aliases (TypeScript & Vite)

В [tsconfig.json](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/tsconfig.json) и [vite.config.ts](file:///d:/Разные%20проекты/Частный%20СЕО%20специалист/site/vite.config.ts) настроены псевдонимы путей:
* `@/` -> `src/`
* `@components/` -> `src/components/`
* `@ui/` -> `src/components/ui/`
* `@hooks/` -> `src/hooks/`
* `@utils/` -> `src/utils/`
* `@types/` -> `src/types/`
* `@data/` -> `src/data/`
* `@assets/` -> `src/assets/`

---

## 3. Инфраструктурные особенности и ограничения

1. **Окружение ОС**:
   * Разработка ведется на Windows (PowerShell / cmd).
   * Все bat-скрипты адаптированы под локальные команды `docker compose` и кодировку CP866/UTF-8.
2. **Безопасность Vite 5.4+**:
   * Включен параметр `server.allowedHosts: true` в `vite.config.ts`, чтобы контейнер Nginx внутри Docker-сети (`react-app`) мог беспрепятственно проксировать вызовы без ошибок 403 Forbidden.
3. **Порты локального окружения**:
   * `8085` — Nginx входная точка (HTTP).
   * `3000` — прямой порт контейнера приложения React (Vite Dev Server).
   * `80` / `443` — порты для боевого продакшн-контейнера `docker-compose.prod.yml`.

