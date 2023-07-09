import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
			'@services': path.resolve(__dirname, './src/services'),
			'@interface': path.resolve(__dirname, './src/interface'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@client': path.resolve(__dirname, './src/pages/client'),
			'@admin': path.resolve(__dirname, './src/pages/admin'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@context': path.resolve(__dirname, './src/context'),
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		},
	},
});
