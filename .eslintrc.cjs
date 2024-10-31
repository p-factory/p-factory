// PTORY_FRONT/.eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',  // TypeScript 파서 (front 디렉토리 내 TypeScript 코드 파싱)
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,  // Node.js 환경을 설정하여 require 사용 허용
  },
  // "compilerOptions": { // 에러로 인한 주석처리
  //   "module": "commonjs",
  // },
  extends: [
    'eslint:recommended',  // 기본 ESLint 규칙
    'plugin:@typescript-eslint/recommended',  // TypeScript 린팅 규칙
    'plugin:react/recommended',  // React 관련 린트 규칙
    'plugin:prettier/recommended'  // Prettier와 eslint 통합
  ],

  plugins: ['@typescript-eslint',
    'react',
    'prettier',
    'react-hooks',  // React Hooks 관련 규칙 추가
    'prefer-arrow',  // 화살표 함수만 허용
    'import',  // Import 규칙 추가 (선택적)
  ],

  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs', '.vscode'],
  env: {
    browser: true,
    es2021: true,
  },

  overrides: [
    // {
    // files: ['front/src/**/*.{js,jsx,ts,tsx}'],  // `front/src` 하위의 모든 JavaScript 및 TypeScript 파일 포함
    // rules: {
    // 'no-console': 'warn',  // 예: 특정 디렉토리의 규칙을 다르게 설정할 수 있음
    // },
    // },
  ],

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'prettier/prettier': 'error',  // Prettier 규칙 위반 시 에러 처리

    // 카멜케이스만 허용
    'camelcase': ['error', { properties: 'always' }],  // 변수, 함수명에서 카멜케이스만 허용

    // 화살표기 함수만 허용
    'prefer-arrow/prefer-arrow-functions': 'error',

    // 화살표기 함수 세부 설정 prefer-arrow/prefer-arrow-functions 둘 중 하나만 사용
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],

    // React 컴포넌트 화살표기 규칙 (모든 React 컴포넌트는 화살 표기 함수)
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // JSX 문법(React의 JSX 코드를 작성하는 방법)을 어떤 파일 확장자에서 사용할 수 있는지를 제한하는 역할
    // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    // React.FC 사용하지 않는게 좋기 때문에 함수형 컴포넌트의 리턴값 타입 지정을 막기
    '@typescript-eslint/explicit-function-return-type': 'off',

    // catch 문에서 any 타입을 사용할 수 있도록 설정
    '@typescript-eslint/no-explicit-any': 'off',

    // JSX 구문을 허용할 파일 확장자를 설정하는 ESLint 규칙
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],

    // button 규칙 비활성화
    'react/button-has-type': 'off',

    // 태그가 반드시 내용을 가져야 한다는 접근성 규칙
    'jsx-a11y/anchor-has-content': 'off',

    // console관련 출력 허용
    'no-console': 'off',

    // 선언은 되었지만 사용되지 않은 선언 변수, 함수 경고 비활성화
    'no-unused-vars': 'off',

    // no-unused-vars가 off로 대신해서 사용하는 규칙
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        //varsIgnorePattern: '^(is|set)[A-Z].*$', // 여기에서 변수 이름 패턴을 지정
      },
    ],

    // CRLF나 LR의 특징인 '\n`, `\r\n`의 관한 에러를 무시한다.
    'linebreak-style': 'off',

    // prettier eslint 통합 설정
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Prettier의 endOfLine 옵션을 LF로 설정
        singleQuote: true,  // Prettier 설정: singleQuote 적용
        semi: true,  // Prettier 설정: 세미콜론 필수
        trailingComma: 'all',  // Prettier 설정: 모든 곳에 trailing comma 추가
        printWidth: 80,  // Prettier 설정: 한 줄의 길이를 80자로 제한
      },
    ],

    // 모든 문자열을 작은따옴표로 강제
    'quotes': ['error', 'single', { 'avoidEscape': true }],

    // 세미콜론을 항상 추가하도록 강제
    'semi': ['error', 'always'],
  }
};
