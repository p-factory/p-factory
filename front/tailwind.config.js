/** @type {import('tailwindcss').Config} */
const customStylesPlugin = require("./src/styles/styles.plugin");

module.exports = {
  mode: "jit",
  content: ['src/**/*.{html,js,jsx,ts,tsx,css,scss}', 'public/index.html'],
  theme: {
    extend: {
      /** 
      // font-size
      fontSize: {
        'xl': '24px',
        'l': '22px',
        'm': '20px',
        's': '18px',
        'xs': '16px',
      },
      // font
      fontFamily: {
        JejuDoldam: ['Jeju Doldam'],
        Pretendard: ['Pretendard'],
      },
      // font-color
      colors: {
        'primaryColor': '#BAFF4A',
        'subColor': '#000000',
        'statusColor': {
          '01': '#000000',
          '02': '#222222',
          '03': '#3E3E3E',
          '04': '#666666',
          '05': '#888888',
          '06': '#A6A6A6',
          '07': '#CCCCCC',
          '08': '#FFFFFF',
        },
        'errorColor': '#FF0000',
        'successColor': '#0038FF',
        'safetyColor': '#32BF00',
        'neutralColor': '#656565',
      },
      */
    },
  },
  plugins: [
    customStylesPlugin,
  ],
};
