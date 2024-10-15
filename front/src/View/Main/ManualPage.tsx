import React from 'react';
import Template from '../../global/components/Template';
import ManualComponentTop from './component/Manual.componentTop';
import ManualComponentBottom from './component/Manual.componentBottom';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';

const ManualPage = () => {
  return (
    <div>
      {/* 제목 부분 */}
      <div className="relative pl-[clamp(0px,18.59%,357px)] pr-[clamp(0px,18.02%,346px)]">
        <div className="text-[60px] --JejuDoldam font-bold relative z-10">
          ㅍ토리 사용법
        </div>
        <div className="--primary-bg-Color rounded-[13px] absolute z-0 top-[34px] pl-[clamp(0px,28.88%,335px)] pr-[clamp(0px,31.03%,360px)] h-[clamp(0px,49.25%,33px)]" />
      </div>
      <div className="pt-[clamp(0px,10.93%,118px)] pb-[clamp(0px,2.08%,40px)]" />
      {/* 토리가 말하는 부분 */}
      <div className="--medium pl-[clamp(0px,15.99%,307px)] pr-[clamp(0px,17.71%,340px)] pb-[clamp(0px,3.7%,40px)] --Pretendard">
        <div className="--font-m">
          나<span className="--bold --primary-bg-Color"> 토리!</span> 이 공장의
          초절정 귀염둥이 마스코트지
        </div>
        <div className="--font-xs --status-font-Color-05 whitespace-nowrap">
          ㅍ토리를 어떻게 사용하는지 모르겠다고? 이래서 MZ란.. 한번만 알려준다
          따라와!!!
        </div>
      </div>
      <Template component={ManualComponentTop} />
      <Template component={ManualComponentBottom} />
      {/* 버튼 부분 */}
      <div className="pt-[clamp(0px,18.52%,200px)] pl-[clamp(0px,11.93%,229px)] pr-[clamp(0px,12.97%,249px)]">
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
  );
};

export default ManualPage;
