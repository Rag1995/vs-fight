const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {},
    container: {
      center: true,
      padding: '2rem',
      screens: {},
    },
    extend: {
      fontFamily: {
        'hetilica': ['hetilica', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          DEFAULT: colors.zinc[50],
        },
        dark: {
          DEFAULT: colors.zinc[800],
        },
      },
      keyframes: {
        sprite: {
          'from': {
            opacity: 1,
            'background-position': '0px',
          },
          'to': {
            opacity: 1,
            'background-position': 'var(--sprite-full-width)',
          },
        },
        'h-shake': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(var(--anim-shake-range))' },
          '50%': { transform: 'translateX(-1 * var(--anim-shake-range))' },
          '75%': { transform: 'translateX(var(--anim-shake-range))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  corePlugins: {
    // aspectRatio: false,
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('current', '&.active')
      addVariant('link-active', '&.router-link-active')
      addVariant('link-exact', '&.router-link-exact-active')
    }),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi', 'ic']),
    }),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
