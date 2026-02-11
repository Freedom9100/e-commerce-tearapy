/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Включаем статический экспорт для GitHub Pages
  images: {
    unoptimized: true,  // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  // basePath необходим для GitHub Pages когда репозиторий не username.github.io
  basePath: '/e-commerce-tearapy',
  typescript: {
    ignoreBuildErrors: true,
  },
  // Отключаем trailing slash для корректной работы на GitHub Pages
  trailingSlash: true,
}

export default nextConfig
