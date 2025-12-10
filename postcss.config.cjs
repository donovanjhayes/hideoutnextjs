/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    // reference the package by name so PostCSS requires it at runtime
    '@tailwindcss/postcss': {},
  },
};
