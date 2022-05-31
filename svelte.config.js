import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
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
