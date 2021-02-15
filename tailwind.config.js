module.exports = {
  purge: {
    content: ['./src/**/*.svelte', './public/*.html'],
    options: {
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
