/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "../backend/resources/**/*.blade.php",
  ],
  theme: {
    extend: {
      colors: {
        // C6 Bank inspired palette - Monocromático com toques de oliva
        primary: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b3b3b3',
          400: '#8e8e8e',
          500: '#6b6b6b',
          600: '#4a4a4a',
          700: '#2d2d2d',
          800: '#1a1a1a',
          900: '#000000',
        },
        accent: {
          // Verde oliva do C6 Bank
          50: '#f7f8f5',
          100: '#eef0e8',
          200: '#dde1d1',
          300: '#c4c9b0',
          400: '#a8b088',
          500: '#8b9466',
          600: '#6d7549',
          700: '#52583a',
          800: '#3f432d',
          900: '#2d3021',
        },
        silver: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        sans: ['"Red Hat Display"', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'c6': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'c6-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'c6-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

