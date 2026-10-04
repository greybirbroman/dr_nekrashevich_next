# Сайт Марины Некрашевич

Сайт стоматолога на Next.js с контентом Sanity Studio, встроенной по адресу `/studio`.

## Требования

- Node.js 22.12 или новее
- npm 10 или новее

## Локальный запуск

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Заполните `NEXT_PUBLIC_SANITY_PROJECT_ID` и `NEXT_PUBLIC_SANITY_DATASET` значениями проекта Sanity. API version задаётся в `NEXT_PUBLIC_SANITY_API_VERSION`; если переменная отсутствует, используется версия из `sanity/env.js`.

## Проверки и production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Развёртывание должно запускать Next.js как Node.js сервер (`next start`). Статический экспорт не используется: он отключает ISR, автоматическое обновление Sanity Live и маршрут Sanity Studio.

## Дизайн-система

Общие цвета, шрифты, размеры текста, тени и breakpoints заданы через Tailwind 4 `@theme` в `styles/globals.css`. Палитра использует графитово-синий `primary` (`#27333e`), основной текст `secondary` (`#4a515a`), цианово-синий `brand-700` (`#08708f`), тёмный `brand-900` (`#143a4d`) и светлый фон `light-bg` (`#f1f5f9`). Для отступов контейнера используются `gutter-sm`, `gutter-md` и `gutter-lg`; семантические названия не переопределяют стандартную шкалу размеров Tailwind. Основные breakpoint-ы: `sm` — 375 px, `md` — 768 px, `tablet` — 1024 px, `lg` — 1280 px. Новые цвета и размеры следует добавлять как токены и повторно использовать через utility-классы.

Появление первого экрана и элементов при прокрутке анимируется GSAP 3.15.0; при `prefers-reduced-motion: reduce` анимации отключаются.

## Обновление контента Sanity

Опубликованный контент подключён через Sanity Live: открытые страницы получают изменения после публикации без новой сборки или ручной перезагрузки. Если live-соединение недоступно, серверный кэш страницы обновляется по ISR с интервалом до 15 минут.

В настройках Sanity добавьте в **API → CORS origins** точные origin-ы сайта: `http://localhost:3000` для разработки, `https://msnek.ru` для production и любой другой используемый адрес (например, `http://127.0.0.1:3002` для локального production smoke test). Для origin-а, который обслуживает только публичный сайт, оставьте **Allow credentials** выключенным. Если на этом же origin доступен `/studio`, включите **Allow credentials**, чтобы работала авторизация редактора; Sanity Live использует публичные опубликованные данные и не требует credentials. О настройках см. [документацию Sanity CORS](https://www.sanity.io/docs/content-lake/cors). Для опубликованного контента API-токен не нужен. Токены с правом чтения нельзя хранить в переменных `NEXT_PUBLIC_*`.
