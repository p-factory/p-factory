import React from 'react';
import sparkleIcon from '../../../global/Img/sparkleIcon.svg';
import closeIcon from '../../../global/Img/closeIcon.svg';
import circleIcon from '../../../global/Img/circleIcon.svg';
import DevTool from '../../../DEV/Dev';

const DEV = DevTool.ToolButton;

const Manual = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <DEV />
      <div className="flex flex-col bg-white pt-[clamp(0px,19.81vh,214px)] pl-[clamp(0px,30.39%,392px)] pb-[clamp(0px,33.06vh,357px)] pr-[clamp(0px,19.11%,367px)]">
        {/* 아래 박스 */}
        <div className="relative mr-[clamp(0px,1.09%,21px)] ">
          <div className="relative border-[1px] bg-white border-black border-solid rounded-[43px] z-10 w-full h-full">
            <img
              src={sparkleIcon}
              alt="Sparkle Icon"
              className="w-[75px] h-[88px] absolute z-20 top-[clamp(0px,15.42%,68px)] right-[clamp(0px,11.21%,130px)]"
            />
            <div className="flex items-start justify-between pt-[clamp(0px,2.13%,23px)] pl-[clamp(0px,1.88%,36px)] pr-[clamp(0px,2.86%,55px)] pb-[clamp(0px,2.41%,26px)] --Pretendard">
              <div className="flex items-start">
                <img src={circleIcon} alt="Circle Icon" className="" />
                <div className="--font-xl --medium pl-[clamp(0px,0.93%,17.9px)] pt-[clamp(0px,0.9%,9.76px)] z-20 leading-[150%] whitespace-nowrap">
                  다양한 단어장을 통한 <br />
                  <span className="--bold --primary-bg-Color">
                    학습효과 극대화!
                  </span>
                </div>
              </div>
              <img
                src={closeIcon}
                alt="X"
                className="pt-[clamp(0px,2.42%,10px)]"
              />
            </div>
            <div className="flex justify-between w-full pl-[clamp(0px,9.48%,108px)] pr-[clamp(0px,7.99%,91px)] pb-[clamp(0px,5.61%,60.58px)] --Pretendard">
              <div className="pl-[clamp(0px,3.69%,42px)] pt-[clamp(0px,1.94%,21px)] pb-[clamp(0px,13.33%,144px)] pr-[clamp(0px,24.76%,282px)] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
                친구네 공장에 <br />
                구경갈 수도 있어요!
              </div>
              <div className="pl-[clamp(0px,2.37%,27px)] pt-[clamp(0px,1.94%,21px)] pb-[clamp(0px,10.74%,116px)] pr-[clamp(0px,19.58%,223px)] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
                여러 카테고리의 <br />
                단어장을 통해 <br />
                학습목표에 맞추어 공부하세요!
              </div>
            </div>
          </div>
          <div className="border-[1px] border-black border-solid rounded-[43px] left-[clamp(0px,1.09%,21px)] top-[clamp(0px,6.28%,26px)] w-full h-full --primary-bg-Color absolute z-0" />
        </div>
      </div>
    </div>
  );
};

export default Manual;
