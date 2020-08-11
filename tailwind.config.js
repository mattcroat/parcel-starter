module.exports = {
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif',
    },
    extend: {
      /* place things here you want to extend and not override */
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // set to true for production
    enabled: false,
    // include every file with tailwind classes
    content: [
      './src/**/*.tsx',
      './src/index.html'
    ],
  },
};
