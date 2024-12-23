import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Разрешает подключения извне
    port: 3000,      // Порт, на котором будет запущен сервер
    strictPort: true // Оставляет порт 3000, если он доступен
  }
});

