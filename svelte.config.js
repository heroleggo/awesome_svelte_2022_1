import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    $components: resolve('./src/components'),
                },
            },
        },
    },
    preprocess: preprocess({
        scss: {
            prependData: `@import 'src/style/_variables.scss';`,
        },
        postcss: {
            plugins: [autoprefixer],
        },
    }),
};

export default config;
