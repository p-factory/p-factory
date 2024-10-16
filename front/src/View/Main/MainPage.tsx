import React from 'react';
import spannerIconBlack from '../../global/Img/spannerIconBlack.svg';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';
import DevTool from '../../DEV/Dev';

const DEV = DevTool.ToolButton;

const MainPage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <DEV />
      <div className="flex flex-col bg-white pt-[clamp(0px,29vh,316px)] pl-[clamp(0px,15.05%,289px)] pb-[clamp(0px,30vh,334px)]">
        <div className="flex items-center --bold text-[83px] --JejuDoldam pb-[clamp(0px,2.5%,27px)] pl-[clamp(0px,0.83%,16px)]">
          ㅍ토리
          <img
            src={spannerIconBlack}
            alt="Spanner Icon"
            className="pl-[clamp(0px,0.73%,14px)] w-[5%]"
          />
        </div>
        <div className="--font-xl --medium --Pretendard --status-font-Color-05 pl-[clamp(0px,0.83%,16px)] pb-[clamp(0px,6.2%,67px)]">
          토리와 함께 내가 만들어가는
          <br />
          나만의 <span className="--status-font-Color-01">단어 공장</span>
        </div>
        <div className="pr-[clamp(0px,66.88%,1284px)]">
          <div className="flex items-center justify-center --font-m --bold --Pretendard btn-secondary pt-[clamp(0px,1.67%,18px)] pb-[clamp(0px,1.57%,17px)] pl-[clamp(0px,5.94%,114px)] pr-[clamp(0px,4.79%,92px)]">
            ㅍ토리 사용법
            <img
              src={spannerIconWhite}
              alt="Spanner Icon"
              className="pl-[clamp(0px,0.46%,5px)]"
            />
          </div>
          <div className="pt-[clamp(0px,1.85%,20px)]" />
          <div className="flex items-center justify-center --font-m --bold --Pretendard btn-primary pt-[clamp(0px,1.67%,18px)] pb-[clamp(0px,1.48%,16px)] pl-[clamp(0px,3.85%,74px)] pr-[clamp(0px,2.81%,54px)]">
            단어 공장 작업 시작하기
            <img
              src={spannerIconBlack}
              alt="Spanner Icon"
              className="pl-[clamp(0px,0.46%,5px)]"
            />
          </div>
        </div>
        <div className="pt-[clamp(0px,0.93%,10px)]" />
        <div className="--font-xs --medium --Pretendard --status-font-Color-05 pl-[clamp(0px,1.09%,21px)]">
          Click me!!! 당신만의 단어 공장, 지금 바로 작업해 보세요!
        </div>
      </div>
    </div>
  );
};

export default MainPage;
