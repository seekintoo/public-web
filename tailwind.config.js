module.exports = {
  content: ['./layouts/**/*.html'],
  safelist: [
    'bg-slate-100',
  ],   
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
      borderRadius: {
        '4xl': '3rem',
      },    
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      letterSpacing: {
        widest: '.25em',
      },      
      maxWidth: {
        'screen-2xl': '1340px'
      },
      screens: {
        's-a-f': { 'raw': '(max-height: 450px)'},
        'n-a-f': { 'raw': '(max-width: 350px)'},
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
};
