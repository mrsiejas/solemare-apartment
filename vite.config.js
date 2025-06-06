import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		server: {
			port: 5173,
			open: true,
		},
		build: {
			outDir: 'dist',
			sourcemap: true,
		},
		define: {
			// Prefix all environment variables with VITE_ to make them available in the client
			'import.meta.env.VITE_N8N_WEBHOOK_URL': JSON.stringify(env.VITE_N8N_WEBHOOK_URL),
			'import.meta.env.VITE_GOOGLE_CALENDAR_ID': JSON.stringify(env.VITE_GOOGLE_CALENDAR_ID),
			'import.meta.env.VITE_WEATHER_API_URL': JSON.stringify(env.VITE_WEATHER_API_URL || 'https://api.open-meteo.com/v1/forecast'),
			'import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL': JSON.stringify(env.VITE_GOOGLE_MAPS_EMBED_URL),
		},
	};
});
