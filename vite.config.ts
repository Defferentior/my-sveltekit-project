import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	envDir: './src',
	test: {
		globals: true, 
		environment: 'jsdom', 
		exclude: [
		'node_modules' 
		]
	}
});
