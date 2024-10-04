import React from 'react';
import spannerIcon from '../../global/Img/spannerIcon.svg';

const MainPage = () => {
  return (
    <div className="--root-flex">
      <div className="--primary-flex-col w-1500">
        <div>
          {/* 로고와 설명부분 */}
          <div className="--font-main JejuDoldam bold --primary-flex">
            ㅍ토리
            <img
              src={spannerIcon}
              alt="Spanner Icon"
              className="h-[54px] w-[54px]"
            />
          </div>
          <div className="--font-xl Pretendard text-statusColor-05 ">
            {/* #b7b7b7 없어서 임의로 05로 지정 */}
            토리와 함께 내가 만들어가는
            <br />
            나만의 <span className="text-statusColor-01">단어 공장</span>
          </div>
        </div>
        <div className="--font-m Pretendard bold w-[346px] ">
          {/* 346.53 -> 346*/}
          <div className="btn-secondary">ㅍ토리 사용법</div>
          <div className="btn-primary">단어 공장 작업 시작하기</div>
        </div>
        <div className="--font-xs medium Pretendard text-statusColor-05">
          {/* 15.84 -> font-xs */}
          Click me!!! 당신만의 단어 공장, 지금 바로 작업해 보세요!
        </div>
      </div>
    </div>
  );
};

export default MainPage;
