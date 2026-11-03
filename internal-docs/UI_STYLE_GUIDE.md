# Регламент вёрстки, стилей и анимаций сайта (UI Style Guide)

> **Статус**: Обязательный стандарт проекта  
> **Область применения**: Все страницы (`src/pages/**/*.tsx`), компоненты (`src/components/**/*.tsx`) и новые разделы сайта.  
> **Главный эталон**: Главная страница (`src/pages/HomePage/HomePage.tsx` и секции `src/components/sections/**`).

---

## 1. Концепция дизайна и палитра

Сайт использует современную высокотехнологичную эстетику **Dark Obsidian & Emerald Growth** с полноценной поддержкой двух тем (светлая и тёмная).

### 1.1 Цветовые токены
- **Фон страниц**:
  - Светлая тема: `bg-slate-50` (карточки и блоки: `bg-white` или `bg-slate-50`)
  - Тёмная тема: `dark:bg-obsidian-950` (карточки и блоки: `dark:bg-obsidian-900`, выпадающие элементы/панели: `dark:bg-obsidian-850`)
- **Границы и разделители (Borders)**:
  - Светлая тема: `border-slate-200` (hover: `hover:border-slate-300`)
  - Тёмная тема: `dark:border-obsidian-800` (hover: `dark:hover:border-obsidian-750`)
  - Акцентная подсветка: `border-growth-500/30`, при ховере: `hover:border-growth-500/50`
- **Акцентный цвет (Emerald Growth)**:
  - Основной изумруд: `bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold` (для основных CTA-кнопок)
  - Текст акцента: `text-growth-600 dark:text-growth-400`
  - Мягкий фон бейджей: `bg-growth-500/10 border border-growth-500/20 text-growth-700 dark:text-growth-400`
- **Фоновая сетка (Grid Background)**:
  - Обязательный класс для Hero-экранов и конверсионных плашек: `grid-bg` (определен в `src/styles/globals.css`).

---

## 2. Шрифтовой регламент (Типографика)

На сайте строго регламентировано использование трех семейств шрифтов:

| Роль элемента | Семейство шрифта | Tailwind-класс | Пример использования |
| :--- | :--- | :--- | :--- |
| **Заголовки (H1–H6)** | Plus Jakarta Sans | `font-heading font-extrabold tracking-tight` | `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight` |
| **Основной текст** | Plus Jakarta Sans | `font-sans` | `font-sans text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed` |
| **Бейджи, цифры, сроки, метки, код** | JetBrains Mono | `font-mono` | `font-mono text-xs uppercase tracking-wider text-growth-600 dark:text-growth-400` |

### Запрещено:
- Использовать сторонние/случайные системные шрифты (Arial, Times New Roman, Roboto и т.д.).
- Писать бейджи или метки цен без класса `font-mono`.
- Писать главные заголовки без классов `font-extrabold` и `tracking-tight`.

---

## 3. Регламент анимаций (Framer Motion)

### 3.1 Обертывание секций (Обязательно для ВСЕХ страниц!)
Каждая страница в `src/pages/**/*.tsx` **ОБЯЗАНА** использовать компонент `<AnimatedSection>` из `@components/common` (или `@components/common/AnimatedSection`):

```tsx
import { AnimatedSection } from '@components/common';

// Первый экран страницы (Hero):
<AnimatedSection variant="fade" duration={0.8}>
  <section className="py-12 md:py-20 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
    {/* Контент Hero */}
  </section>
</AnimatedSection>

// Все последующие контентные секции:
<AnimatedSection variant="slide-up">
  <section className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
    {/* Контент секции */}
  </section>
</AnimatedSection>
```

### 3.2 Допустимые варианты анимаций `variant`:
- `fade` — плавное проявление (для Hero и фоновых элементов);
- `slide-up` — стандартное появление снизу вверх со смещением `y: 30px` (для всех стандартных секций);
- `slide-left` / `slide-right` — появление сбоку (для двухколоночных сравнений);
- `scale` — мягкое масштабирование `0.95 -> 1.0` (для модальных окон и акцентных карточек).

### 3.3 Микро-анимации карточек и интерактива:
- **Карточки услуг / тарифов / шагов**:
  - Обязательный hover-подъем: `hover:-translate-y-1 hover:shadow-xl hover:border-growth-500/50 transition-all duration-300`
  - Тень карточек: `shadow-sm hover:shadow-xl hover:shadow-growth-500/5`
- **Индикаторы активности (Живые бейджи)**:
  - Обязательно наличие пульсирующей точки:
    ```tsx
    <span className="w-2 h-2 rounded-full bg-growth-500 animate-pulse" />
    ```
- **Кнопки действий**:
  - Основная кнопка: `bg-growth-600 hover:bg-growth-500 active:scale-[0.98] transition-all`
  - Второстепенная кнопка: `bg-white hover:bg-slate-100 dark:bg-obsidian-850 dark:hover:bg-obsidian-800 transition-all`

---

## 4. Обязательная структура Hero-экрана

Каждый Hero-экран услуги или кластера должен содержать:
1. Обертку `<AnimatedSection variant="fade" duration={0.8}>`.
2. Класс фона `grid-bg` и адаптивные цвета: `bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850`.
3. Верхний бейдж с `font-mono text-xs uppercase tracking-wider` и иконкой/пульсацией.
4. Главный заголовок `H1` с градиентным выделением ключевых слов:
   `text-transparent bg-clip-text bg-gradient-to-r from-growth-600 to-emerald-400`.
5. Понятный лид-параграф на `font-sans text-slate-600 dark:text-slate-300 text-base sm:text-lg`.
6. Сетку из 3–4 карточек ключевых метрик/фактов с `font-mono` цифрами и четкими подписями.

---

## 5. Автоматическое тестирование вёрстки (`npm run test:ui`)

Для гарантии соблюдения стандарта создан валидатор `scripts/verify-ui-standards.mjs`.
Он автоматически запускается при выполнении команды:
```bash
npm run test:ui
```
А также включен в общий пайплайн сборки `npm run build`.

### Что проверяет автотест:
1. **Наличие `AnimatedSection`**: Все файлы страниц (`src/pages/**/*.tsx`) обязаны импортировать и использовать `<AnimatedSection>`.
2. **Отсутствие «голых» секций**: Секции верхнего уровня страниц должны быть обернуты в анимационные контейнеры.
3. **Использование сетки `grid-bg`**: На каждой посадочной странице Hero-секция должна содержать координатную сетку `grid-bg`.
4. **Соблюдение шрифтовых классов**: Наличие `font-mono` для бейджей и дат/метрик, `font-heading` или `font-extrabold tracking-tight` для заголовков.
5. **Поддержка Dark Obsidian**: Отсутствие жестко зашитых стилей без префикса `dark:`.

> Любое изменение на сайте, нарушающее этот регламент, блокирует сборку проекта.
