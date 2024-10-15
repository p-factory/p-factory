import React from 'react';
import sparkleIcon from '../../../global/Img/sparkleIcon.svg';
import circleIcon from '../../../global/Img/circleIcon.svg';

const Manual = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col">
        {/* 위 박스 */}
        <div className="relative">
          <img
            src={sparkleIcon}
            alt="Sparkle Icon"
            className="w-[75px] h-[88px] absolute z-20 top-[clamp(0px,15.42%,68px)] right-[clamp(0px,11.21%,130px)]"
          />
          <div className="flex items-start justify-between pt-[clamp(0px,2.13%,23px)] pl-[clamp(0px,1.88%,36px)] pr-[clamp(0px,2.86%,55px)] pb-[clamp(0px,2.41%,26px)] --Pretendard">
            <div className="flex items-start">
              <img src={circleIcon} alt="Circle Icon" className="z-20" />
              <div className="--font-xl --medium pl-[clamp(0px,0.93%,17.9px)] pt-[clamp(0px,0.9%,9.76px)] z-20 leading-[150%] whitespace-nowrap">
                어디서든 <br />
                <span className="--bold --primary-bg-Color">
                  편리하고 재밌게!
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full pl-[clamp(0px,8.36%,97px)] pr-[clamp(0px,9.4%,109px)] pb-[clamp(0px,5.61%,60.58px)] --Pretendard">
            <div className="pl-[clamp(0px,3.62%,42px)] pt-[clamp(0px,2.41%,26px)] pb-[clamp(0px,12.96%,140px)] pr-[clamp(0px,25.34%,294px)] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
              월요일 아침 <br />
              지옥철 안에서도!
            </div>
            <div className="pl-[clamp(0px,3.1%,36px)] pt-[clamp(0px,2.41%,26px)] pb-[clamp(0px,12.96%,140px)] pr-[clamp(0px,23.28%,270px)] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
              인터넷 안되는 <br />
              장거리 비행 속에서도!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manual;
