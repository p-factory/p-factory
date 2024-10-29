import React from 'react';

const MyFactory = () => {
  return (
    <div className="flex flex-col w-full pr-[54px] pt-[clamp(0px,11.26%,52px)] pb-[clamp(0px,16.88%,78px)]">
      <div className="flex flex-col">
        <div className="relative">
          <div className="flex justify-between w-full pl-[21px] --Pretendard --medium --font-xs gap-[clamp(0px,4.62%,53px)] mt-[clamp(0px,8.46%,28px)] h-[192px]">
            <div className="flex w-full items-center pl-[46px] rounded-[36px] border shadow-[0_0_16px_rgba(99,160,0,1)] leading-[175%] --primary-bg-Color">
              등굣길에서 <br />
              해야하는 공부들
            </div>
            <div className="flex w-full items-center pl-[46px] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
              하루 10분 투자 / <br />
              불어
            </div>
            <div className="flex w-full items-center pl-[46px] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%]">
              아 뭐라적지
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFactory;
