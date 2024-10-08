import React from 'react';
import spannerIconBlack from '../../global/Img/spannerIconBlack.svg';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';
import DevTool from '../../DEV/Dev';

const DEV = DevTool.ToolButton;

const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <DEV />
      <div className="flex flex-col w-[clamp(0px,19.69%,378px)], h-[clamp(0px,39.72%,429px)] bg-white">
        <div className="">
          <div className="text-[83px] --JejuDoldam bold">
            ㅍ토리
            <img src={spannerIconBlack} alt="Spanner Icon" className="" />
          </div>
        </div>
        <div className="--font-xl --Pretendard text-statusColor-05 medium">
          토리와 함께 내가 만들어가는
          <br />
          나만의 <span className="text-statusColor-01">단어 공장</span>
        </div>
        <div className="--font-m --Pretendard bold btn-secondary">
          ㅍ토리 사용법
          <img src={spannerIconWhite} alt="Spanner Icon" className="" />
        </div>
        <div className="--font-m --Pretendard bold btn-primary">
          단어 공장 작업 시작하기
          <img src={spannerIconBlack} alt="Spanner Icon" className="" />
        </div>
        <div className="--font-xs medium --Pretendard text-statusColor-05">
          Click me!!! 당신만의 단어 공장, 지금 바로 작업해 보세요!
        </div>
      </div>
    </div>
  );
};

export default MainPage;
