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
      padding: '0.75rem',
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
      fontSize: {
        lg: ['1.125rem', '1.625rem'],
      },
      padding: {
        18: '4.5rem',
      },
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
        dark: '#1c1c1c',
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
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-border-gradients')(),
    require('tailwind-scrollbar-hide'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '768px',
          },
          '@screen md': {
            maxWidth: '984px',
          },
          '@screen lg': {
            maxWidth: '1320px',
          },
        },
      });
    },
    function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme('bgGradientDeg', {}), {
            104: '104deg',
            107: '107deg',
            99: '99deg',
            102: '102deg',
          }),
        }
      );
    },
  ],
};
