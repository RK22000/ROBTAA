import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import mdToSvelte from './blog_scripts/vite-plugin-md-to-html-svelte-hmr';
import postCard from './blog_scripts/vite-plugin-post-card';
export default defineConfig({
	plugins: [
		sveltekit(),
		mdToSvelte(),
		postCard()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
