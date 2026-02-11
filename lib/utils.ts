import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Для GitHub Pages нужен basePath в production
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/e-commerce-tearapy' : ''
  return `${basePath}${path}`
}
