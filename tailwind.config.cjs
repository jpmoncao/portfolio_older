const brandColors = {
  fauxDark: '#151E29',
  fauxBlue: '#385170',
  fauxCerulean: '#163F70',
  fauxSkyBlue: '#79B0F2',
  fauxBleuFrance: '#3086F0'
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...brandColors
      }
    },
  },
  plugins: [],
}