import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SanClement/', // Asegúrate de que el nombre del repositorio sea correcto
});
