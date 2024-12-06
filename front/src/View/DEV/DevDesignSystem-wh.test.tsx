import React from "react";
import DevTool from "../../DEV/Dev";
import test from "./img/img.jpg";
const DEV = DevTool.ToolButton;

const DevDesignSystem = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {/* h/w-full과 h/w-screen의 차이
      - h/w-full은 정확하게 width,height값이 명시가 되어야한다. 즉, auto같은 경우도 포함이다 이는 즉, main-height, max-height 또한 auto로 적용된다면 발생하는 문제이다. 더불어 h/w-full은 기본적으로 부모 요소의 height를 상속받아 100%**로 계산한다.
      - h/w-screen은 부정확해도 해당 100vh와 같이 계산을 한다. 즉, 지금까지 clamp에서 최상위 바로 하위에서 vh만 적용이 되는 이유는 hight또는 main-height, max-height값 중 하나라도 auto가 되어 있어서 발생한 것이다. 다시 말해서, height는 auto가 적용되어 있는 일부가 있기 때문에 h-full이 아닌 h-screen이 맞다. 더불어 h/w-screen은 기본적으로 브라우저의 v~ 와 동일한 높이 단위로 계산한다. 정리하자면 최상위 root index.css에 auto가 설정되어 있기 때문에 h-full을 사용하지 않고 h-screen으로 직접 100vh를 설정한 것과 동일한 것이다. 즉, h-[100vh]와 h-screen은 동일하다.
      - 왜 tailwind는 이러한 문제가 발생하는가?
      아무래도 utility css를 제공해주다 보니 적용되는, 요구되는 명확한 동작 원리와 구현이 되어 있기 때문이다.
      - 그렇다면 우리는 이 프로젝트에 의문을 가져야한다. '왜 height는 vh여야하고 width는 %여야 하는가?'
       */}
      <div className="text-4xl">TEST w(%)-1920/h(vh)-1261</div>
      {/* width */}
      <div className="bg-teal-400 flex flex-col items-center justify-center w-[clamp(0px,90%,1728px)] h-[100%]">
        {/* <div className="text-2xl mb-[100px]">w-1728px</div> */}
        <div className="text-2xl">w-1728px</div>
        <div>
          <DEV />
        </div>
        {/* 여기서 높이 값은 h-screen vh이기 때문에 w%와 달리 1261픽셀을 기준으로, 단위로 계산해야한다. */}
        <div className="flex flex-wrap flex-col items-center justify-center w-[clamp(0px,90%,1728px)] h-[clamp(0px,70%,882.7px)] bg-red-400">
          {/* 여기서 높이 값은 vh이기 때문에 w%와 달리 1261픽셀을 기준으로 계산해야한다. */}
          <div className="flex flex-col items-start justify-center bg-gray-500 w-[clamp(0px,92.42%,1597px)] h-[clamp(0px,79.3%,700px)]">
            <div className="flex justify-start w-full">
              <span className="text-2xl text-yellow-600">
                Parents w-1597px h-700px
              </span>
            </div>
            <div className="flex justify-center items-center bg-lime-800 text-cyan-50 w-[clamp(0px,80%,1205.6px)] h-[clamp(0px,50%,350px)] mx-auto">
              Child : Center/don&apos;t need `flex-col`& `items-center`, only
              used mx-auto /w-1205.6px(80%) h-350px(50%)
            </div>
            <div className="flex justify-center bg-amber-200 w-[clamp(0px,50%,753.5px)] h-[clamp(0px,10%,70px)]">
              Another Child : Right /
              <span className="text-red-600">
                don&apos;t need items-center, received parents
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src={test} alt="test" />
        </div>
      </div>
    </div>
  );
};

export default DevDesignSystem;
