module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
     /**⚠ airbnb-Config 설정, Prettier 통합 */
    "airbnb",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    /**⚠ arrow 함수만 사용 할 수 있게 추가하는 plugin */
    "prefer-arrow",
    "prettier"
  ],
  "rules": {
     /**⚠ prettier를 ESlint안에서 통합관리 */
    "prettier/prettier": [
      "error",
      {
        // 문자열은 따옴표로 formatting
        "singleQuote": true,
        // 코드 마지막에 세미콜론이 있게 formatting
        "semi": true,
        // 탭의 사용을 금하고 스페이스바 사용으로 대체하게 formatting
        "useTabs": false,
        // 들여쓰기 너비는 2칸 VSC 세팅에선 indentation을 검색하고 확인 하면 된다.
        "tabWidth": 2,
        // 객체나 배열 키:값 뒤에 항상 콤마를 붙히도록 formatting
        "trailingComma": "all",
        // 코드 한 줄이 maximum 80칸
        "printWidth": 80,
        // 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략하게 formatting
        "arrowParens": "avoid"
      }
    ]
  }
}
