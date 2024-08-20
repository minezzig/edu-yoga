/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "serif"],
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.hover-line': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: '-5px',
            width: '0',
            height: '1px',
            backgroundColor: 'white',
            transition: 'width 0.3s ease, left 0.3s ease',
          },
          '&:hover::before': {
            width: '100%',
            left: 0,
          },
        },
      });
    },
  ],
};
