module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme ({
        `navbar-pattern`: `url(./images/bg-pattern-mobile-nav.svg)`
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
