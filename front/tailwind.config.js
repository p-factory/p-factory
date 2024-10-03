/** @type {import('tailwindcss').Config} */
const customTailwindPlugin = require("./src/styles/styles.plugin");
// const plugin = require("tailwindcss/plugin"); // plugin을 가져오기

module.exports = {
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
    /**
      plugin(function ({ addComponents, addUtilities, theme }) {  //theme은 extend를 사용해서 확장하기 위해 존재하는 매개변수
        const rootVariables = {
          ":root": {
            // colors
            "--primary-color": "#BAFF4A", // Primary Color
            "--sub-color": "#000000", // Sub Color
            "--error-color": "#FF0000", // Error Color
            "--success-color": "#0038FF", // Success Color
            "--safety-color": "#32BF00", // Safety Color
            "--neutral-color": "#656565", // Neutral Color
  
            // status-colors
            "--status-color-01": "#000000",
            "--status-color-02": "#222222",
            "--status-color-03": "#3E3E3E",
            "--status-color-04": "#666666",
            "--status-color-05": "#888888",
            "--status-color-06": "#A6A6A6",
            "--status-color-07": "#CCCCCC",
            "--status-color-08": "#FFFFFF",
  
            // font-size
            "--font-xl": "24px",
            "--font-l": "22px",
            "--font-m": "20px",
            "--font-s": "18px",
            "--font-xs": "16px"
          },
        };
  
        // 텍스트와 배경색에 같은 CSS 변수를 사용하는 유틸리티 스타일 정의
        const colorStyles = {
          ".text-primaryColor": { color: "var(--primary-color)" },
          ".text-subColor": { color: "var(--sub-color)" },
          ".text-errorColor": { color: "var(--error-color)" },
          ".text-successColor": { color: "var(--success-color)" },
          ".text-safetyColor": { color: "var(--safety-color)" },
          ".text-neutralColor": { color: "var(--neutral-color)" },
          // text-Status Colors
          ".text-statusColor-01": { color: "var(--status-color-01)" },
          ".text-statusColor-02": { color: "var(--status-color-02)" },
          ".text-statusColor-03": { color: "var(--status-color-03)" },
          ".text-statusColor-04": { color: "var(--status-color-04)" },
          ".text-statusColor-05": { color: "var(--status-color-05)" },
          ".text-statusColor-06": { color: "var(--status-color-06)" },
          ".text-statusColor-07": { color: "var(--status-color-07)" },
          ".text-statusColor-08": { color: "var(--status-color-08)" },
  
          ".bg-primaryColor": { backgroundColor: "var(--primary-color)" },
          ".bg-subColor": { backgroundColor: "var(--sub-color)" },
          ".bg-errorColor": { backgroundColor: "var(--error-color)" },
          ".bg-successColor": { backgroundColor: "var(--success-color)" },
          ".bg-safetyColor": { backgroundColor: "var(--safety-color)" },
          ".bg-neutralColor": { backgroundColor: "var(--neutral-color)" },
  
          // bg-Status Colors
          ".bg-statusColor-01": { backgroundColor: "var(--status-color-01)" },
          ".bg-statusColor-02": { backgroundColor: "var(--status-color-02)" },
          ".bg-statusColor-03": { backgroundColor: "var(--status-color-03)" },
          ".bg-statusColor-04": { backgroundColor: "var(--status-color-04)" },
          ".bg-statusColor-05": { backgroundColor: "var(--status-color-05)" },
          ".bg-statusColor-06": { backgroundColor: "var(--status-color-06)" },
          ".bg-statusColor-07": { backgroundColor: "var(--status-color-07)" },
          ".bg-statusColor-08": { backgroundColor: "var(--status-color-08)" },
  
        };
  
        // 폰트 스타일 정의
        const fontStyles = {
          ".JejuDoldam": { fontFamily: "'Jeju Doldam', sans-serif" },
          ".Pretendard": { fontFamily: "'Pretendard', sans-serif" },
        };
  
        // 폰트 크기 정의
        const fontSizes = {
          ".font-xl": { fontSize: "var(--font-xl)" },
          ".font-l": { fontSize: "var(--font-l)" },
          ".font-m": { fontSize: "var(--font-m)" },
          ".font-s": { fontSize: "var(--font-s)" },
          ".font-xs": { fontSize: "var(--font-xs)" },
        };
  
        // 버튼 스타일 정의
        const buttonComponents = {
          ".btn-primary": {
            "@apply text-white font-bold py-2 px-4 rounded": {},
            backgroundColor: "var(--primary-color)", // primaryColor 사용
          },
          ".btn-secondary": {
            "@apply text-white font-medium py-2 px-4 rounded": {},
            backgroundColor: "var(--sub-color)", // subColor 사용
          },
        };
  
        // Tailwind 플러그인에 스타일 추가
        addUtilities(rootVariables); // CSS 변수 추가
        addUtilities(fontStyles); // 커스텀 폰트 스타일 추가
        addUtilities(fontSizes); // 커스텀 폰트 크기 추가
        addUtilities(colorStyles); // 색상 스타일 추가
        addComponents(buttonComponents); // 버튼 컴포넌트 스타일 추가
      }),
       */
    customTailwindPlugin,
  ],
};
