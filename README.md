# Fomi Studio

A responsive image generation interface built with Next.js App Router, JavaScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` to create a production build and `npm start` to serve it. `npm run lint` runs ESLint.

## Structure

- `app/`: App Router page, global styles, and generation/history API routes
- `components/`: navigation, controls, history, result cards, and preview
- `hooks/`: generation, history, and theme state
- `lib/`: API client
- `data/`: static portrait and history fixtures
- `design/`: supplied visual reference
- `public/`: static assets

The image fixtures use Unsplash image URLs and require internet access in the browser.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. In Vercel, select **Add New Project** and import the GitHub repository.
3. Keep the detected Next.js framework and default build settings.
4. Select **Deploy**. No environment variables are required.
