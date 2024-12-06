import React from "react";
import { useNavigate } from "react-router-dom";
const MyFactory = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full pr-[54px] pt-[clamp(0px,11.26%,52px)] pb-[clamp(0px,16.88%,78px)]">
      <div className="flex flex-col">
        <div className="relative">
          <div className="flex justify-between w-full pl-[21px] --Pretendard --medium --font-xs gap-[clamp(0px,4.62%,53px)] mt-[clamp(0px,8.46%,28px)] h-[192px]">
            <div
              className="flex w-full items-center pl-[46px] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%] cursor-pointer hover:--primary-bg-Color hover:shadow-[0_0_24px_rgba(99,160,0,0.8)]"
              onClick={() => {
                navigate("/VocabularyBook");
              }}
            >
              등굣길에서 <br />
              해야하는 공부들
            </div>
            <div
              className="flex w-full items-center pl-[46px] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%] cursor-pointer hover:--primary-bg-Color hover:shadow-[0_0_24px_rgba(99,160,0,0.8)]"
              onClick={() => {
                navigate("/VocabularyBook");
              }}
            >
              하루 10분 투자
            </div>
            <div
              className="flex w-full items-center pl-[46px] rounded-[36px] border shadow-[0_0_16px_rgba(0,0,0,0.25)] leading-[175%] cursor-pointer hover:--primary-bg-Color hover:shadow-[0_0_24px_rgba(99,160,0,0.8)]"
              onClick={() => {
                navigate("/VocabularyBook");
              }}
            >
              생활 영어
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFactory;
