/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'background':"url('../img/background.jpg')",
        'background2':"url('../img/background2.jpg')",
        'background3':"url('../img/background3.jpg')",
      },
      spacing: {
        '128': '74rem',
        '112': '28rem',
        '114': '43rem',
      },
      colors:{
        'gray-150': '#eeeeee',
      },
      padding: {
        '500': '600px',
      },
      height: () => ({
        '15': '3.75rem',
        '480': '30rem',
        '640': '40rem',
        '444': '27.75rem',
    }),
    },
  },
  plugins: [],
}

