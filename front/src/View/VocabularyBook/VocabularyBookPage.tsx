import React from 'react';
import pencilIcon from '../../global/Img/pencilIcon.svg';
import pencilIconGrey from '../../global/Img/pencilIconGrey.svg';
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
      <div className="relative flex flex-col items-center w-full">
        <div className="relative flex justify-center w-[clamp(0px,83.18%,1597px)]">
          {/* 뒷배경 */}
          <div className="absolute w-full top-[138px] left-[clamp(0px,1.77%,34px)] bottom-[-52px] z-[-1] flex-grow bg-[#8f8f8f] pt-[73px] pb-[163px] rounded-[53px]" />
          {/* 콘텐츠 */}
          <div className="flex-grow flex flex-col items-center bg-white pt-[73px] pb-[163px] rounded-[53px] shadow-[0_0_24px_4px_rgba(0,0,0,0.24)]">
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
            {/* 전체 단어장 */}
            <div className="pt-[100px] w-[clamp(0px,74.51%,1190px)]">
              <div className="flex justify-between gap-[clamp(0px,3.78%,45px)]">
                {/* 왼쪽 단어장 */}
                <div className="flex flex-col w-full gap-[38px]">
                  {/* 단어 1칸 하이라이트 */}
                  <div className="relative grid grid-cols-[1fr_auto_1fr] h-[76px] border-[0.9px] border-[#959595] border-solid rounded-[18px]">
                    <div className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex w-3/4">
                      <div className="w-full break-all">
                        <span className="--primary-bg-Color">내용 1</span>
                      </div>
                    </div>
                    <div className="h-full border-l-[0.9px] border-[#959595]"></div>
                    <div className="flex justify-center pt-[23px]">내용2</div>
                    <img
                      src={pencilIcon}
                      alt="Pencil Icon"
                      className="absolute top-[23px] right-[40px] w-[22px] h-[22px]"
                    />
                  </div>
                  {/* 단어 2칸 하이라이트 */}
                  <div className="relative grid grid-cols-[1fr_auto_1fr] h-[188px] border-[0.9px] border-[#959595] border-solid rounded-[18px]">
                    <div className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex w-3/4">
                      <div className="w-full break-all">
                        <span className="--primary-bg-Color">
                          pneumonoultramicroscopicsilicovolcanoconiosis
                        </span>
                      </div>
                    </div>
                    <div className="h-full border-l-[0.9px] border-[#959595]"></div>
                    <div className="flex justify-center pt-[23px]">내용2</div>
                    <img
                      src={pencilIcon}
                      alt="Pencil Icon"
                      className="absolute top-[23px] right-[40px] w-[22px] h-[22px]"
                    />
                  </div>
                </div>
                {/* 오른쪽 단어장 */}
                <div className="flex flex-col w-full gap-[38px]">
                  {/* 단어 1칸 삭제 */}
                  <div className="text-[#e8e8e8] relative grid grid-cols-[1fr_auto_1fr] h-[76px] border-[0.9px] border-[#e8e8e8] border-solid rounded-[18px]">
                    <div className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex w-3/4">
                      <div className="w-full break-all">
                        <span className="">내용 1</span>
                      </div>
                    </div>
                    <div className="h-full border-l-[0.9px] border-[#e8e8e8]"></div>
                    <div className="flex justify-center pt-[23px]">내용2</div>
                    <img
                      src={pencilIconGrey}
                      alt="Pencil Icon"
                      className="absolute top-[23px] right-[40px] w-[22px] h-[22px]"
                    />
                    <div className="absolute flex items-center justify-center w-full">
                      <hr className="flex absolute w-4/5 top-[35px] border-black" />
                    </div>
                  </div>
                  {/* 단어 1칸 */}
                  <div className="relative grid grid-cols-[1fr_auto_1fr] h-[76px] border-[0.9px] border-[#959595] border-solid rounded-[18px]">
                    <div className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex w-3/4">
                      <div className="w-full break-all">
                        <span className="">내용 1</span>
                      </div>
                    </div>
                    <div className="h-full border-l-[0.9px] border-[#959595]"></div>
                    <div className="flex justify-center pt-[23px]">내용2</div>
                    <img
                      src={pencilIcon}
                      alt="Pencil Icon"
                      className="absolute top-[23px] right-[40px] w-[22px] h-[22px]"
                    />
                  </div>
                  {/* 단어 1칸 */}
                  <div className="relative grid grid-cols-[1fr_auto_1fr] h-[76px] border-[0.9px] border-[#959595] border-solid rounded-[18px]">
                    <div className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex w-3/4">
                      <div className="w-full break-all">
                        <span className="">내용 1</span>
                      </div>
                    </div>
                    <div className="h-full border-l-[0.9px] border-[#959595]"></div>
                    <div className="flex justify-center pt-[23px]">내용2</div>
                    <img
                      src={pencilIcon}
                      alt="Pencil Icon"
                      className="absolute top-[23px] right-[40px] w-[22px] h-[22px]"
                    />
                  </div>
                  {/* 단어 2칸 삭제 */}
                  <div className="text-[#e8e8e8] relative grid grid-cols-[1fr_auto_1fr] h-[188px] border-[0.9px] border-[#e8e8e8] border-solid rounded-[18px]">
                    <div className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex w-3/4">
                      <div className="w-full break-all">
                        <span className="--primary-bg-Color">
                          pneumonoultramicroscopicsilicovolcanoconiosis
                        </span>
                      </div>
                    </div>
                    <div className="h-full border-l-[0.9px] border-[#e8e8e8]"></div>
                    <div className="flex justify-center pt-[23px]">내용2</div>
                    <img
                      src={pencilIconGrey}
                      alt="Pencil Icon"
                      className="absolute top-[23px] right-[40px] w-[22px] h-[22px]"
                    />
                    <div className="absolute flex items-center justify-center w-full">
                      <hr className="flex absolute w-4/5 top-[35px] border-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 단어장 bottom */}
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
      {/* 버튼 부분 */}
      <div className="flex flex-col items-center w-full mb-[212px] mt-[143px]">
        <div className="w-[clamp(0px,35.52%,682px)] h-[102px]">
          <div className="--bold btn-secondary --Pretendard pt-[clamp(0px,3.33%,36px)] pb-[clamp(0px,3.61%,39px)] pl-[clamp(0px,10.83%,208px)] pr-[clamp(0px,13.59%,261px)]">
            <div className="flex items-center">
              <div className="--font-l whitespace-nowrap">재료 생성하기</div>
              <img
                src={spannerIconWhite}
                alt="Spanner Icon"
                className="pl-[clamp(0px,0.26%,5px)]"
              />
            </div>
          </div>
          <div className="--Pretendard flex flex-col items-center --status-font-Color-05 --medium --font-xs pt-[clamp(0px,2.59%,28px)] pl-[clamp(0px,8.44%,162px)] pr-[clamp(0px,7.4%,142px)] underline">
            설명이 필요하신가요?
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyBookPage;
