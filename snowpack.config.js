/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    ["@snowpack/plugin-run-script",
    {
      "cmd": "postcss src/styles.css -o public/styles.css",
      "watch": "postcss src/styles.css -o public/styles.css -w"
    }],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  optimize: {
      "bundle": false,
      "minify": true,
      "splitting": true,
      "treeshake": true,
      "preload": true,
      "target": 'es2020'
  }
};
