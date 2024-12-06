// 기준 너비를 기본값으로 설정하고, 대상 너비를 매개변수로 받아서 퍼센트 계산하는 함수
export const devCalculator = (target, WIDTH = 1920) => {
  const percentage = (target / WIDTH) * 100;
  // console.log(percentage);
  return Math.round(percentage * 100) / 100; // 소수점 2자리까지 표시
};

// 함수 호출 예시
const result = devCalculator(1597);
console.log(`1597px은 1920px의 ${result} 입니다.`);

export default { devCalculator };
