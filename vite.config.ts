import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
			'@services': path.resolve(__dirname, './src/services'),
			'@interface': path.resolve(__dirname, './src/interface'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		},
	},
});
