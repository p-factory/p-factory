import React from 'react';
import spannerIconBlack from '../../global/Img/spannerIconBlack.svg';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';

const MainPage = () => {
  return (
    <div className="--root-flex">
      <div className="items-start w-1500 h-[596px] --primary-flex-col">
        <div className="ml-[289px]">
          <div>
            {/* 로고와 설명부분 */}
            <div className="text-[83px] JejuDoldam bold flex items-center mb-[27px]">
              ㅍ토리
              <img
                src={spannerIconBlack}
                alt="Spanner Icon"
                className="h-[54px] w-[54px] ml-[14px]"
              />
            </div>
            <div className="--font-xl Pretendard text-statusColor-05 medium mb-[67px]">
              {/* #b7b7b7 없어서 임의로 05로 지정 */}
              토리와 함께 내가 만들어가는
              <br />
              나만의 <span className="text-statusColor-01">단어 공장</span>
            </div>
          </div>
          <div className="--font-m Pretendard bold w-[346px] mb-[10px]">
            {/* 346.53 -> 346*/}
            <div className="items-center bold btn-secondary Pretendard h-[61px] mb-[20px]">
              ㅍ토리 사용법
              <img
                src={spannerIconWhite}
                alt="Spanner Icon"
                className="h-[23px] w-[23px] ml-[5px]"
              />
            </div>
            <div className="items-center bold btn-primary Pretendard h-[61px]">
              단어 공장 작업 시작하기
              <img
                src={spannerIconBlack}
                alt="Spanner Icon"
                className="h-[23px] w-[23px] ml-[5px]"
              />
            </div>
          </div>
          <div className="--font-xs medium Pretendard text-statusColor-05 ml-[21px]">
            {/* 15.84 -> font-xs */}
            Click me!!! 당신만의 단어 공장, 지금 바로 작업해 보세요!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
