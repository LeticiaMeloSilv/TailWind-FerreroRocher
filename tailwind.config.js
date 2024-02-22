/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'brown': '#2E1012',
      'yellow': '#F3CC4D',
      'white':'#E6F0F0'
    },
    extend: {
      backgroundImage: {
        'background_text': "url('./src/img/background.png')",
                'bombom': "url('/img/bombom.png')",
                'logo': "url('/img/logo.png')",
                'bombons': "url('/img/ferreiro-rocher.png')",
      },
    },
  },
  plugins: [],
}
