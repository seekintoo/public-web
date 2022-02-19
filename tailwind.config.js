module.exports = {
  content: ['./layouts/**/*.html'],
  // safelist: [
  //   'bg-blue-50',
  // ],   
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#ED7365",
          500: "#EB6050",
          600: "#E35443",
        },
        secondary: {
          50: "#F6F6FF",
          100: "#D8DCFF",
          300: "#AEADF0",
          500: "#4D28A4",
          700: "#2E1863",
          900: "#1F1042",
        },
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
        serif: ['PT Serif', 'serif'],
      },
      // fontSize: {
      //   '4xl': ['2.375rem', '1.1'],
      //   '5xl': ['3rem', '1.1'],
      //   '6xl': ['3.75rem', '1.1'],
      // },
      maxWidth: {
        'screen-2xl': '1400px'
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
};
