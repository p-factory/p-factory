import React from 'react';
// import pencilIcon from '../../global/Img/pencilIcon.svg';
import trashCanIcon from '../../global/Img/trashCanIcon.svg';
import highlighterIcon from '../../global/Img/highlighterIcon.svg';
import spannerIconWhite from '../../global/Img/spannerIconWhite.svg';
import spannerIconBlack from '../../global/Img/spannerIconBlack.svg';
import speechBubbleBg from '../../global/Img/speechBubbleBg.svg';
import toryTop from '../../global/Img/toryTop.svg';
import DevTool from '../../DEV/Dev';

const DEV = DevTool.ToolButton;

const VocabularyBookPage = () => {
  return (
    <div className="flex flex-col item-center --Pretendard">
      <DEV />
      {/* 제목 부분 */}
      <div className="relative flex flex-col items-center justify-end">
        <div className="text-[60px] --JejuDoldam font-bold relative z-10">
          토익 단어
        </div>
      </div>
      {/* 토리가 말하는 부분 */}
      <div className="relative flex justify-center">
        <div>
          <img src={toryTop} alt="" />
        </div>
        <img
          src={speechBubbleBg}
          alt=""
          className="w-[727px] h-[135px] relative z-0 mb-[53px]"
        />
        <div className="absolute z-10 flex flex-col text-white">
          <div className="">
            <div className="--font-xl medium --Pretendard">재료생성 버튼</div>
            <div className="flex items-end gap-2 --font-m normal leading-[175%]">
              <span className="opacity-50">오른쪽</span>
              <div className="--primary-flex bg-white w-[38px] h-[37px] rounded-[9px]">
                <img
                  src={spannerIconBlack}
                  alt="Spanner Icon"
                  className="w-[13px] h-[13px]"
                />
              </div>
              <span className="opacity-50">
                아이콘을 누를 시 단어 작성 페이지로 바로 이동 할 수 있다구~~
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-[clamp(0px,83.18%,1597px)] h-[1934px] bg-slate-600 pt-[73px] rounded-[53px] shadow-[0_0_24px_4px_rgba(0,0,0,0.24)]">
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
              <div className="--primary-flex bg-primaryColor w-[57px] h-[57px] border-[1px] border-black border-solid rounded-[14px] shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
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
          <div className="pt-[100px] w-[clamp(0px,74.51%,1190px)]">
            <div className="flex justify-between gap-[clamp(0px,3.78%,45px)]">
              <div className="w-full h-[76px] border-[1px] border-black border-solid rounded-[18px]"></div>
              <div className="w-full h-[76px] border-[1px] border-black border-solid rounded-[18px]"></div>
            </div>
            {/* <img
              src={pencilIcon}
              alt="Pencil Icon"
              className="w-[22px] h-[22px]"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyBookPage;
