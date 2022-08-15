const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{html,ejs,js}'],
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '2rem',
        lg: '4.5rem',
      },
    },
    fontFamily: {
      sans: ['Noto Sans TC', ...fontFamily.sans],
      mono: ['Azeret Mono', ...fontFamily.mono],
    },
    linearBorderGradients: {
      directions: {
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      },
      colors: {
        primary: ['#62DB54', '#09ACF5'],
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#62DB54',
        },
        secondary: {
          DEFAULT: '#09ACF5',
        },
        gray: {
          border: '#00000012',
          light: '#C1C1C1',
          DEFAULT: '#2D2D2D',
          dark: '#202020',
        },
        backdrop: '#00000062',
      },
      linearBorderGradients: {
        DEFAULT: 'linear-gradient(to right, #2D2D2D 0%, #202020 100%)',
      },
      shadows: {
        DEFAULT: '0 0.25rem 1.5rem #0000002E',
      },
    },
  },
  variants: {
    linearBorderGradients: ['responsive'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive'], // 
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-border-gradients')(),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '744px',
          },
          '@screen md': {
            maxWidth: '960px',
          },
          '@screen lg': {
            maxWidth: '1296px',
          },
        },
      });
    },
  ],
};
