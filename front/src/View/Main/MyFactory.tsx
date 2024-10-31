import React from 'react';
import Template from '../../global/components/Template.test';
import MyFactoryComponent from './component/MyFactory.component';
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
      <div className="relative flex items-end justify-center">
        <div className="relative flex items-end justify-start pl-[108.91px] --medium --Pretendard bottom-[-50.58px] w-[clamp(0px,59.74%,1142px)]">
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
      </div>
      <div className="relative">
        <Template
          component={MyFactoryComponent}
          containerWidth="w-[clamp(0px,59.74%,1142px)]"
          width="w-[clamp(0px, 86.66%, 994px)]"
          height="h-[1069px]"
          background={false}
        />
        {/* 인덱스 부분 */}
        <div className="absolute flex justify-center w-full top-[112px] right-[58px]">
          <div className="w-[clamp(0px,59.74%,1142px)]">
            <div className="flex items-center justify-center w-[116px] h-[83px] --primary-bg-Color mb-[17px]">
              <div className="flex --JejuDoldam --font-m">내공장</div>
            </div>
            <div className="relative flex items-center justify-center w-[116px] h-[83px] bg-black z-[-100] right-[20px]">
              <div className="flex text-white --JejuDoldam --font-m">
                외부공장
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 버튼 부분 */}
      <div className="flex flex-col items-center w-full mt-[108px]">
        <div className="w-[clamp(0px,35.52%,682px)] h-[102px]">
          <div className="--bold btn-secondary --Pretendard pt-[clamp(0px,3.33%,36px)] pb-[clamp(0px,3.61%,39px)] pl-[clamp(0px,10.83%,208px)] pr-[clamp(0px,13.59%,261px)]">
            <div className="flex items-center">
              <div className="--font-l whitespace-nowrap">공장 생성하기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFactory;
