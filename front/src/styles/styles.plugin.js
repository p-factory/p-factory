import plugin from 'tailwindcss/plugin';

import rootUtils from './root.utils';
import colorUtils from './colorStyles.plugin';
import fontUtils from './fontStyles.utils';
import componentStylesUtils from './componentStyles.utils';

const rootVariables = rootUtils;
const colorStyles = colorUtils;
const fontStyles = fontUtils.fontStyles;
const fontSizes = fontUtils.fontSizes;
const fontWeight = fontUtils.fontWeight;
const displayComponents = componentStylesUtils.displayFlexComponents;

const stylesPlugin = plugin(({ addUtilities, addComponents }) => {
  //, theme : theme은 extend를 사용해서 확장하기 위해 존재하는 매개변수
  // addComponents, : addComponents,는 기존에 있는 utils들을 활용, @apply를 활용해서 커스텀한 컴포넌트를 추가하는 매개변수

  // Tailwind 플러그인에 스타일 추가
  addUtilities(rootVariables); // CSS 변수 추가
  addUtilities(fontStyles); // 커스텀 폰트 스타일 추가, 폰트 스타일 정의
  addUtilities(fontSizes); // 커스텀 폰트 크기 추가, 폰트 크기 정의
  addUtilities(fontWeight);
  addUtilities(colorStyles); // 색상 스타일 추가, 텍스트와 배경색에 같은 CSS 변수를 사용하는 유틸리티 스타일 정의

  // addComponents(buttonComponents); 버튼 컴포넌트 스타일 추가, 버튼 스타일 정의
  addComponents(displayComponents);
});

export default stylesPlugin;
