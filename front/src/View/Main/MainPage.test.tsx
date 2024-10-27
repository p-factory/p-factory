import React from 'react';
import spannerIconBlack from '../../global/Img/spannerIconBlack.svg';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';
import DevTool from '../../DEV/Dev';

const DEV = DevTool.ToolButton;

const MainPageTest = () => {
  return (
    <div className="h-screen --root-flex">
      <DEV />
      <div className="items-start w-full h-screen --primary-flex-col">
        <div className="ml-[15.05%] h-[39.72%] w-[19.69%] mt-[29.26%] mb-[30.93%]">
          <div className="flex items-center w-[73.02%] h-[18.88%] mb-[2.5%]">
            <div className="text-[83px] w-[75.36%] h-[100%] JejuDoldam bold flex items-center whitespace-nowrap">
              ㅍ토리
              <img
                src={spannerIconBlack}
                alt="Spanner Icon"
                className="ml-[0.73%] h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="h-[16.78%] w-[70.63%] whitespace-nowrap --font-xl Pretendard text-statusColor-05 medium mb-[6.2%]">
            토리와 함께 내가 만들어가는
            <br />
            나만의 <span className="text-statusColor-01">단어 공장</span>
          </div>
          <div className="--font-m Pretendard bold btn-secondary flex items-center w-[91.53%] h-[14.22%] whitespace-nowrap">
            ㅍ토리 사용법
            <img
              src={spannerIconWhite}
              alt="Spanner Icon"
              className="ml-[0.26%] h-full w-auto object-contain"
            />
          </div>
          <div className="--font-m Pretendard bold btn-primary flex items-center w-[91.53%] h-[14.22%] whitespace-nowrap">
            단어 공장 작업 시작하기
            <img
              src={spannerIconBlack}
              alt="Spanner Icon"
              className="ml-[0.26%] h-full w-auto object-contain"
            />
          </div>
          <div className="h-[6.53%] w-[94.44%] --font-xs medium Pretendard text-statusColor-05 mt-[0.93%] ml-[1.09%] mb-[30.93%] whitespace-nowrap">
            Click me!!! 당신만의 단어 공장, 지금 바로 작업해 보세요!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageTest;
