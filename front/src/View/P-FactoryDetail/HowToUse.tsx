import React from 'react';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';
import sparkleIcon from '../../global/Img/sparkleIcon.svg';
import closeIcon from '../../global/Img/closeIcon.svg';

const HowToUse = () => {
  return (
    <div className="h-auto --root-flex Pretendard">
      <div className="--primary-flex-col w-1500">
        <div className="text-[60px] JejuDoldam mt-[202px] mb-[130px]">
          ㅍ토리 사용법
        </div>
        <div>
          <div className="--font-m medium">
            나<span className="bold bg-primaryColor"> 토리!</span> 이 공장의
            초절정 귀염둥이 마스코트지
          </div>
          <div className="--font-xs medium text-statusColor-05 mb-[40px]">
            ㅍ토리를 어떻게 사용하는지 모르겠다고? 이래서 MZ란.. 한 번만
            알려준다 따라와!!!
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="w-[1139px] h-[414px] border-[1px] bg-white border-black border-solid rounded-[43px] relative z-10">
              <div className="w-[38px] h-[38px] bg-black rounded-full absolute z-10 top-[30px] left-[36px]" />
              <div className="w-[26px] h-[26px] bg-primaryColor rounded-full absolute z-10 top-[23px] left-[78px]" />
              <img
                src={sparkleIcon}
                alt="Sparkle Icon"
                className="w-[75px] h-[88px] absolute z-20 top-[69px] right-[139px]"
              />
              <img
                src={sparkleIcon}
                alt="Sparkle Icon"
                className="w-[49px] h-[57px] absolute z-20 top-[68px] right-[109px]"
              />
              <img
                src={closeIcon}
                alt="X"
                className="w-[34px] h-[34px] absolute z-10 top-[34px] right-[55px]"
              />
              <div className="bg-primaryColor w-[196px] h-[21px] absolute z-[15] top-[90px] left-[122px]" />
              <div className="--font-xl medium mt-[33px] ml-[122px] relative z-20">
                어디서든 <br />
                <span className="bold">편리하고 재밌게!</span>
              </div>
              <div className="flex --font-xs medium mt-[26px] h-[222px]">
                <div className="rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] w-[443px] ml-[96px] mr-[47px] pt-[26px] pl-[43px]">
                  월요일 아침 <br />
                  지옥철 안에서도!
                </div>
                <div className="rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] w-[443px] pt-[26px] pl-[35px]">
                  인터넷 안되는 <br />
                  장거리 비행 속에서도!
                </div>
              </div>
            </div>
            <div className="border-[1px] border-black border-solid rounded-[43px] w-[1139px] h-[414px] bg-primaryColor absolute top-[26px] left-[21px] z-0" />
          </div>
          <div>
            <div className="--font-xl medium">
              다양햔 단어장을 통한 <br />
              <span className="bold">학습효과 극대화!</span>
            </div>
            <div className="--font-xs medium">
              <div>
                친구네 공장에 <br />
                구경갈 수도 있어요!
              </div>
              <div>
                여러 카테고리의 <br />
                단어장을 통해 <br />
                학습목표에 맞추어 공부하세요!
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bold items-center btn-secondary Pretendard h-[102px] w-[682px]">
              <div className="flex items-center">
                <div className="w-[212px] h-[26px] --font-l flex items-center">
                  단어 공장 작업 시작하기
                </div>
                <img
                  src={spannerIconWhite}
                  alt="Spanner Icon"
                  className="h-[26px] w-[26px] ml-[5px]"
                />
              </div>
            </div>
          </div>
          <div className="text-statusColor-05 medium --font-xs">
            Click me!!! 당신만의 단어 공장, 지금 바로 작업해 보세요!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
