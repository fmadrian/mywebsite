/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['sans-serif', 'system-ui', 'ui-sans-serif'],
      'serif': ['serif', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"'],
      'mono': ['monospace', 'Consolas', '"Courier New"', 'ui-monospace'],
      'header': ['"Sora"', 'Georgia', 'Cambria', 'serif', 'ui-serif'],
      'body': ['"Sora"', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      'link': ['"Sora"', 'sans-serif', 'ui-sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}