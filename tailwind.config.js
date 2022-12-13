/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darker: '#151613',
      dark: '#20201d',
      darkless: '#2b2b27',
      black: '#1d201d',
      text: '#1d201d',
      slate: '#3b413a',
      muted: '#777f76',
      smoke: '#d5d8d5',
      sunken: '#d5d8d5',
      snow: '#f5f5f4',
      background: '#f5f5f4',
      white: '#ffffff',
      sheet: '#ffffff',
      elevated: '#ffffff',
      pink: '#ff62dc',
      orange: '#ff5b00',
      yellow: '#f7ff00',
      green: '#28ff00',
      cyan: '#00ffff',
      blue: '#00a4ff',
      purple: '#c210ff',
      red: '#ec3750',
      progress: '#ec3750',
    },
    fontFamily: {
      sans: [
        '"Josefin Sans"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        "'Segoe UI'",
        'Roboto',
        'sans-serif',
      ],
      mono: `'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace`,
      header: `'Josefin Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    backgroundImage: {
      'gradient-header':
        'radial-gradient(ellipse farthest-corner at top left, var(--tw-gradient-stops))',
    },
    extend: {
      lineClamp: {
        8: '8',
      },
    },
  },
};
