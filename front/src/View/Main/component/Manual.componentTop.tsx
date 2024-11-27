import React from "react";
import sparkleIcon from "../../../global/Img/sparkleIcon.svg";
import circleIcon from "../../../global/Img/circleIcon.svg";

const Manual = () => {
  return (
    <div className="flex flex-col w-full pr-[34px] pt-[clamp(0px,11.26%,52px)] pb-[clamp(0px,16.88%,78px)]">
      <div className="flex flex-col">
        {/* 위 박스 */}
        <div className="relative">
          <img
            src={sparkleIcon}
            alt="Sparkle Icon"
            className="w-[75px] h-[88px] absolute z-20 top-[clamp(0px,13.29%,44px)] right-0"
          />
          <div className="flex items-start justify-between --Pretendard">
            <div className="flex items-start">
              <img src={circleIcon} alt="Circle Icon" />
              <div className="--Pretendard --font-xl --medium z-20 leading-[150%] whitespace-nowrap ml-[10px] mt-[10px]">
                어디서든 <br />
                <span className="--bold --primary-bg-Color">
                  편리하고 재밌게!
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full pl-[60px] --Pretendard --medium --font-xs gap-[clamp(0px,4.73%,47px)] mt-[clamp(0px,8.46%,28px)]">
            <div className="w-full pl-[clamp(0px,3.69%,42px)] pt-[clamp(0px,1.94%,21px)] pb-[clamp(0px,13.33%,144px)] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
              월요일 아침 <br />
              지옥철 안에서도!
            </div>
            <div className="w-full pl-[clamp(0px,3.69%,42px)] pt-[clamp(0px,1.94%,21px)] pb-[clamp(0px,13.33%,144px)] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
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
