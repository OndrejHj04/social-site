module.exports = {
  content: ["./src/*"],
  theme: {
    fontFamily:{
      "chalk": ['Cabin Sketch'] 
    },
    extend: {
      colors: {
        'logo-blue': '#4267B2',
        'dark-logo-blue': '#294170'
      },
      spacing: {
        'side-box': '250px',
        'main-box':  '900px',
      },
      maxWidth: {
        'scroll-page': '1450px'
      },
      screens:{
        'wrap': '1430px'
      }
    },
  },
  plugins: [],
}
