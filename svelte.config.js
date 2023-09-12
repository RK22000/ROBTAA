import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
            base: dev ? '' : process.env.BASE_PATH,
        },
		prerender: {
			handleHttpError: (err) => {
				if (/\/blogs\//.test(err.path)) {
					console.warn(`WARNING: ${err.path} is not implemented and will render a shiny 404 page`);
				} else {
					throw err;
				}
			} 
		}
	},
	preprocess: vitePreprocess()
};

export default config;
