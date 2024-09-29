/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx,ts,tsx,css,scss}', 'public/index.html'],
  theme: {
    extend: {
      /* text */
      fontSize: {
        'xl': '24px',
        'l': '22px',
        'm': '20px',
        's': '18px',
        'xs': '16px',
      },
      /* font */
      fontFamily: {
        JejuDoldam: ['Jeju Doldam'],
        Pretendard: ['Pretendard'],
      },
    },
  },
  plugins: [],
};
