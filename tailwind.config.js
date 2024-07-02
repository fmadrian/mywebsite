/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      'mono': ['ui-monospace', 'Consolas', '"Courier New"', 'monospace'],
      'header': ['"Sora"', 'ui-serif', 'Georgia', 'Cambria'],
      'body': ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'link': ['"Sora"', 'ui-monospace', 'Consolas'],

    },
    extend: {},
  },
  plugins: [],
}