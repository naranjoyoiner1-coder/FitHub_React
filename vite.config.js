import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-huggingface': {
        // Asegúrate de que el target NO tenga una barra final (/)
        target: 'https://router.huggingface.co/hf-inference', 
        changeOrigin: true, 
        // ¡IMPORTANTE! La reescritura es crucial. Quita '/api-huggingface' de la ruta.
        rewrite: (path) => path.replace(/^\/api-huggingface/, ''),
      },
    },
  },
});