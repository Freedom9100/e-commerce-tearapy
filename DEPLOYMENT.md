# 🚀 Деплой (чистый HTML/CSS)

Этот репозиторий — **статический сайт**: `*.html`, `style.css`, ассеты в `public/`.
Деплой на GitHub Pages настроен через GitHub Actions (`.github/workflows/deploy.yml`).

## GitHub Pages (автоматически)

### 1) Один раз включить Pages

- **Settings → Pages**
- **Source**: выберите **GitHub Actions**

### 2) Пуш в `main`

Workflow сам соберёт артефакт `site/`:
- копирует `*.html`
- копирует `style.css`
- копирует папку `public/` (например картинки `public/drinks/...`)

После успешного прогона сайт будет доступен по адресу GitHub Pages вашего репозитория.

## Локальный просмотр

Лучше открывать сайт через локальный сервер (чтобы не было нюансов с путями).

### Вариант A: Python

```bash
python -m http.server 5173
```

Откройте `http://localhost:5173/index.html`.

### Вариант B: Node (если установлен)

```bash
npx serve .
```

## Troubleshooting

- **Картинки не грузятся**: проверьте, что пути в HTML начинаются с `public/...` (например `public/drinks/hero-drink.jpg`).
- **Pages показывает 404**: убедитесь, что в Pages выбран **GitHub Actions**, и последний workflow завершился успешно во вкладке **Actions**.
