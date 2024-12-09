import React from "react";
import DevTool from "../../DEV/Dev";
import test from "./img/img.jpg";
const DEV = DevTool.ToolButton;

const DevDesignSystem = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      {/* must DELETED items-center */}
      {/* width값과 height값은 display(flex)와 연관이 깊다 하지만 padding으로 계산을 하면 display(flex)로부터 영향을 받지 않고 원하는 크기와 사이즈를 정할 수 있다.  */}
      {/* pt-[], pr-[], pb-[], pl-[] 만일, padding을 CSS의 padding: 10px 20px 10px 40px;과 동일한 방식으로 Tailwind CSS에서 설정하고자 한다면, 사용자 정의 유틸리티 클래스를 사용 */}
      <div className="text-4xl">TEST w(%)-1920/h(vh)-1261</div>
      <div className="text-3xl">must DELETED items-center</div>
      {/* padding */}
      <div className="flex flex-col items-center w-[clamp(0px,90%,1728px)] p-8 bg-teal-400">
        {/* 자식 요소들 간 간격을 `mb` 속성으로 설정 */}
        <div className="mb-8 text-2xl">w-1728px</div>
        <div className="text-2xl">
          must DELETED items-center h-screen or h-full
        </div>
        <div className="mb-8">
          <DEV />
        </div>

        {/* 자식 요소들에 `padding`과 `margin`을 사용하여 간격 설정 */}
        <div className="flex flex-col flex-wrap items-center justify-center w-full p-8 mb-8 bg-red-400">
          {/* 내부 자식 요소 1 */}
          <div className="flex flex-col items-start justify-center w-full p-8 mb-8 bg-gray-500">
            <div className="flex justify-start w-full mb-4">
              <span className="text-2xl text-yellow-600">
                Parents w-full h-auto (using padding instead of width/height)
              </span>
            </div>

            {/* 내부 자식 요소 2 */}
            <div className="flex items-center justify-center w-full p-8 mx-auto mb-4 bg-lime-800 text-cyan-50">
              Child : Center / `mx-auto` and `p-8` instead of fixed width/height
            </div>

            {/* 내부 자식 요소 3 */}
            <div className="flex justify-center w-full p-4 bg-amber-200">
              Another Child : Full Width (using padding instead of width)
              <span className="ml-2 text-red-600">received parents</span>
            </div>
          </div>
        </div>

        {/* 이미지 영역 (주석 해제 시 사용 가능) */}
        <div className="flex">
          <img src={test} alt="test" />
        </div>
      </div>
    </div>
  );
};

export default DevDesignSystem;
