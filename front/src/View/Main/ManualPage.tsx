import React from 'react';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';
import sparkleIcon from '../../global/Img/sparkleIcon.svg';
import closeIcon from '../../global/Img/closeIcon.svg';
import circleIcon from '../../global/Img/circleIcon.svg';
import DevTool from '../../DEV/Dev';

const DEV = DevTool.ToolButton;

const ManualPage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <DEV />
      <div className="flex flex-col bg-white pt-[clamp(0px,19.81vh,214px)] pl-[clamp(0px,30.39%,392px)] pb-[clamp(0px,33.06vh,357px)] pr-[clamp(0px,19.11%,367px)]">
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
            나<span className="--bold --primary-bg-Color"> 토리!</span> 이
            공장의 초절정 귀염둥이 마스코트지
          </div>
          <div className="--font-xs --status-font-Color-05 whitespace-nowrap">
            ㅍ토리를 어떻게 사용하는지 모르겠다고? 이래서 MZ란.. 한번만 알려준다
            따라와!!!
          </div>
        </div>
        {/* 위 박스 */}
        <div className="relative mr-[clamp(0px,1.09%,21px)] mb-[clamp(0px,8.7%,94px)]">
          <div className="relative border-[1px] bg-white border-black border-solid rounded-[43px] z-10 w-full h-full">
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
                  <span className="--bold">편리하고 재밌게!</span>
                </div>
              </div>
              <img
                src={closeIcon}
                alt="X"
                className="pt-[clamp(0px,2.42%,10px)]"
              />
            </div>
            <div className="--primary-bg-Color w-[clamp(0px,18.72%,196px)] h-[clamp(0px,5.07%,21px)] absolute z-[15] top-[clamp(0px,21.01%,87px)] left-[clamp(0px,9.75%,111px)]" />
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
          <div className="border-[1px] border-black border-solid rounded-[43px] left-[clamp(0px,1.09%,21px)] top-[clamp(0px,6.28%,26px)] w-full h-full --primary-bg-Color absolute z-0" />
        </div>
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
                  <span className="--bold">학습효과 극대화!</span>
                </div>
              </div>
              <img
                src={closeIcon}
                alt="X"
                className="pt-[clamp(0px,2.42%,10px)]"
              />
            </div>
            <div className="--primary-bg-Color w-[clamp(0px,18.72%,196px)] h-[clamp(0px,5.07%,21px)] absolute z-[15] top-[clamp(0px,21.01%,87px)] left-[clamp(0px,9.75%,111px)]" />
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
    </div>
  );
};

export default ManualPage;
