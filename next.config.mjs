/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',  // Включаем статический экспорт для GitHub Pages
  images: {
    unoptimized: true,  // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  // basePath только в production (для GitHub Pages). В dev приложение на корне /
  basePath: isProd ? '/e-commerce-tearapy' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  // Отключаем trailing slash для корректной работы на GitHub Pages
  trailingSlash: true,
}

export default nextConfig
