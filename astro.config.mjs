import { defineConfig } from 'astro/config'

export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  
  buildOptions: {
    site: 'https://zoleg.github.io',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    base: 'Astro',         // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    hostname: 'localhost',  // The hostname to run the dev server on.
    port: 3000,             // The port to run the dev server on.
  },
  renderers: [
    "@astrojs/renderer-svelte"
  ],

  // GitLab Pages requires exposed files to be located in a folder called "public".
  // So we're instructing Astro to put the static build output in a folder of that name.
  dist: 'public',

  // The folder name Astro uses for static files (`public`) is already reserved 
  // for the build output. So in deviation from the defaults we're using a folder
  // called `static` instead.
  public: 'static',
};
