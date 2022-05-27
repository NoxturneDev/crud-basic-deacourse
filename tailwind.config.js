module.exports = {
  mode: "jit",
  content: ["./view/**/*.ejs"],
  theme: {
    extend: {
      keyframes: {
        popUp : {
          '0%': {transform : 'translateY(0), opacity: 0'},
          '100%': {transform: 'translateY(1rem), opacity: 100'}
        },
      },
      animation: {
        'pop-up' : 'popUp 2s linear'
      }
    },
  },
  plugins: [],
}
