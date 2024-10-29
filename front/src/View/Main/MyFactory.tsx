import React from 'react';
import Template from '../../global/components/Template.test';
import ManualComponentTop from './component/Manual.componentTop';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';
import toryTop from '../../global/Img/toryTop.svg';

const MyFactory = () => {
  return (
    <div className="mt-[200px] mb-[200px]">
      {/* 제목 부분 */}
      <div className="relative flex flex-col items-center justify-end">
        <div className="text-[60px] --JejuDoldam font-bold relative z-10">
          나만의 단어공장
        </div>
        <div className="--primary-bg-Color absolute z-0 w-[450px] h-[clamp(0px,49.25%,33px)]" />
      </div>
      {/* 토리가 말하는 부분 */}
      <div className="relative flex items-end justify-center --medium --Pretendard bottom-[-50.58px]">
        <div>
          <img src={toryTop} alt="" />
        </div>
        <div className="mb-[18px]">
          <div className="--font-m">내가 직접 작성하는 단어 공장</div>
          <div className="--font-xs --status-font-Color-05 whitespace-nowrap">
            아 좀 작성하라고!!
          </div>
        </div>
      </div>
      <Template
        component={ManualComponentTop}
        containerWidth="w-[clamp(0px,59.74%,1142px)]"
        width="w-[clamp(0px, 86.66%, 994px)]"
        background={false}
      />
      {/* 버튼 부분 */}
      <div className="flex flex-col items-center w-full">
        <div className="w-[clamp(0px,35.52%,682px)] h-[102px]">
          <div className="--bold btn-secondary --Pretendard pt-[clamp(0px,3.33%,36px)] pb-[clamp(0px,3.61%,39px)] pl-[clamp(0px,10.83%,208px)] pr-[clamp(0px,13.59%,261px)]">
            <div className="flex items-center">
              <div className="--font-l whitespace-nowrap">
                단어 공장 작업 시작하기
              </div>
              <img
                src={spannerIconWhite}
                alt="Spanner Icon"
                className="pl-[clamp(0px,0.26%,5px)]"
              />
            </div>
          </div>
          <div className="--Pretendard flex flex-col items-center --status-font-Color-05 --medium --font-xs pt-[clamp(0px,2.59%,28px)] pl-[clamp(0px,8.44%,162px)] pr-[clamp(0px,7.4%,142px)]">
            Click me!!! 당신만의 단어 공장, 지금 바로 작업해 보세요!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFactory;
