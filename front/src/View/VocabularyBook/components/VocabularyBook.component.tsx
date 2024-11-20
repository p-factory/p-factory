import React from 'react';
import spannerIconWhite from '../../../global/Img/spannerIconWhite.svg';
import trashCanIcon from '../../../global/Img/trashCanIcon.svg';
import highlighterIcon from '../../../global/Img/highlighterIcon.svg';
import VocabularyBookList from './VocabularyBookList.component';

const VocabularyBook = ({ isUpdateList }: { isUpdateList: boolean }) => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative w-[clamp(0px,83.18%,1597px)]">
        {/* 뒷배경 */}
        <div className="absolute w-full top-[138px] left-[clamp(0px,2.13%,34px)] bottom-[-52px] z-[-1] bg-[#8f8f8f] pt-[73px] pb-[163px] rounded-[53px]" />
        {/* 콘텐츠 */}
        <div className="flex flex-col items-center bg-white pt-[73px] pb-[163px] rounded-[53px] shadow-[0_0_24px_4px_rgba(0,0,0,0.24)]">
          {/* 단어장 header */}
          <div className="flex w-[clamp(0px,74.51%,1190px)] justify-between">
            <div className="flex">
              <div className="--primary-flex-col normal w-[126px] h-[57px] mr-[19px] border-[1px] border-black border-solid rounded-[17px] bg-white --font-m shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                최신순▼
              </div>
              <div className="--primary-flex-col normal w-[126px] h-[57px] border-[1px] border-black border-solid rounded-[17px] bg-white --font-m shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                전체보기▼
              </div>
            </div>
            <div className="flex gap-[25px]">
              <div className="--primary-flex bg-white w-[57px] h-[57px] border-[1px] border-black border-solid rounded-[14px] shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                <img
                  src={trashCanIcon}
                  alt="Trash Can Icon"
                  className="w-[29px] h-[29px]"
                />
              </div>
              <div className="--primary-flex --primary-bg-Color w-[57px] h-[57px] border-[1px] border-black border-solid rounded-[14px] shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                <img
                  src={highlighterIcon}
                  alt="Highlighter Icon"
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div className="--primary-flex bg-black w-[58px] h-[57px] border-[1px] border-black border-solid rounded-[14px] shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                <img
                  src={spannerIconWhite}
                  alt="Spanner Icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
            </div>
          </div>
          {/* 전체 단어장 리스트 */}
          <VocabularyBookList isUpdateList={isUpdateList} />
          {/* 단어장 footer */}
          <div className="flex justify-center w-[clamp(0px,60.8%,971px)] h-[82px] gap-[95px] --Pretendard --semi-bold --font-l mt-[66px]">
            <div className="flex items-center justify-center w-full relative bg-white border-[0.9px] border-black border-solid rounded-[18px] shadow-[0_3.58px_3.58px_0_rgba(0,0,0,0.25)]">
              <div className="flex">전체 단어 숨김</div>
            </div>
            <div className="flex items-center justify-center w-full relative bg-white border-[0.9px] border-black border-solid rounded-[18px] shadow-[0_3.58px_3.58px_0_rgba(0,0,0,0.25)]">
              <div className="flex">전체 뜻 숨김</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyBook;
