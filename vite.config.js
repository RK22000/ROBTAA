import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import mdToSvelte from './blog_scripts/vite-plugin-md-to-html-svelte-hmr';

export default defineConfig({
	plugins: [
		sveltekit(),
		mdToSvelte()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
