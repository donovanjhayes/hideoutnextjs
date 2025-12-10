/** @type {import('postcss-load-config').Config} */
const config = {
  // reference the plugin by name so PostCSS loads it at runtime
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
