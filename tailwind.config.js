/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html, ts}"],
  theme: {
    extend: {
      colors: {
        'passwraith-main': '#282828',
        'passwraith-secondary': '#1E1E1E',
        'passwraith-semi': '#404040',
        'passwraith-text': '#595959'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

