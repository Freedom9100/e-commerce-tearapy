/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Включаем статический экспорт для GitHub Pages
  images: {
    unoptimized: true,  // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  // Раскомментируйте basePath если ваш репозиторий НЕ называется username.github.io
  // basePath: '/e-commerce-tearapy',
  typescript: {
    ignoreBuildErrors: true,
  },
  // Отключаем trailing slash для корректной работы на GitHub Pages
  trailingSlash: true,
}

export default nextConfig
