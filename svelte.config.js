import adapter from '@sveltejs/adapter-auto';
import svelte_preprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		svelte_preprocess({
			postcss: {
				plugins: [autoprefixer()]
			}
		})
	],
	kit: {
		adapter: adapter(),

	}
};

export default config;
