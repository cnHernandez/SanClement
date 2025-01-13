import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/nombre-del-repositorio/', // Reemplaza 'nombre-del-repositorio' con el nombre de tu repositorio
});
