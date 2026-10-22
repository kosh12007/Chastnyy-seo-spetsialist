import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    // Разрешаем проксирование запросов от Nginx и локальных хостов
    // @ts-ignore - параметр поддерживается в Vite 5.4+ / 6.x
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'swiper'],
          // Анимации — меняются редко, кэшируется надолго отдельно от кода секций
          'motion-vendor': ['framer-motion'],
          // Формы-стек: валидация + маски телефона (модалки и формы заявок)
          'forms-vendor': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
            'libphonenumber-js',
            'react-phone-input-2',
          ],
        },
      },
    },
  },
  preview: {
    port: 4173,
  },
});
