import React, { useRef, useState } from "react";
import Dev from "./dev.Calculator";
const devCalculator = Dev.devCalculator;

export const DevTool = () => {
  // useRef의 초기값을 명시적으로 `HTMLInputElement | null`로 설정
  const targetRef = useRef<HTMLInputElement | null>(null);
  const widthRef = useRef<HTMLInputElement | null>(null);

  // 상태로 result 값 관리
  const [result, setResult] = useState<number>(0);

  // 계산 핸들러 함수
  const handleCalculate = () => {
    // `targetRef.current`가 `null`이 아니면 처리
    if (targetRef.current !== null && widthRef.current !== null) {
      const targetValue = targetRef.current.value;
      const widthValue = widthRef.current.value;
      const calcResult = devCalculator(Number(targetValue), Number(widthValue)); // 값을 숫자로 변환하여 전달
      setResult(calcResult); // 상태로 업데이트하여 UI 리렌더링
      console.log(
        // eslint-disable-next-line prettier/prettier
        `기준 값: ${widthValue} /n 입력 값: ${targetValue}, 계산 결과: ${calcResult}`
      );
    }
  };

  return (
    <div
      style={{
        position: "fixed", // 화면 상단에 고정
        top: 10, // 상단에 위치
        left: "88%", // 가로로 화면 중앙에 위치
        // transform: 'translateX(-50%)', // 정확하게 중앙 정렬
        zIndex: 9999, // 레이어를 최상단으로 설정
        backgroundColor: "white", // 배경색을 흰색으로 설정하여 다른 요소와 분리
        padding: "10px 20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // 약간의 그림자 추가
        opacity: "70%",
      }}
    >
      {/* input 값의 배경을 흰색으로 설정 */}
      <input
        type="number"
        ref={widthRef}
        style={{ backgroundColor: "white", width: "100px" }}
        placeholder="std 1920px"
        // value={1920}
      />
      <input
        type="number"
        ref={targetRef}
        style={{ backgroundColor: "white", width: "100px" }}
        placeholder="width px"
      />
      {/* 버튼을 클릭하여 devCalculator 호출 및 결과 출력 */}
      <button onClick={handleCalculate}>실행</button>
      {/* 상태로 관리된 result 값을 UI에 표시 */}
      <div>결과: {result}%</div>
    </div>
  );
};

export const ToolButton = () => {
  // DevTool의 활성화 여부를 상태로 관리
  const [isActive, setIsActive] = useState(false);

  // 버튼 클릭 시 DevTool의 활성화 여부를 토글하는 함수
  const toggleDevTool = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* 원형 버튼 */}
      <button
        onClick={toggleDevTool}
        style={{
          position: "fixed", // 화면 상단에 고정
          top: 17, // 상단에 위치
          left: isActive ? "84%" : "95%", // 가로로 화면 중앙에 위치
          // transform: 'translateX(-50%)', // 정확하게 중앙 정렬
          zIndex: 9999, // 레이어를 최상단으로 설정
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: isActive ? "white" : "white",
          color: "balck",
          border: "none",
          cursor: "pointer",
          opacity: isActive ? "60%" : "80%",
        }}
      >
        Cal
      </button>

      {/* isActive가 true일 때 DevTool 컴포넌트 표시 */}
      {isActive ? <DevTool /> : null}
    </div>
  );
};

export default { DevTool, ToolButton };
