import React from "react";
import Dev from "../../../DEV/Dev";
const DEV = Dev.ToolButton;
// 부모-relative 적용, 배경-absolute,vh,vw
// X

const Login = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <DEV />
      {/* h설정은 임시 */}
      {/* relative로 부모 요소 수정 */}
      <div className="relative w-[clamp(0px,41.25%,792px)] h-[clamp(0px,67.17%,847px)]">
        {/* 컨탠츠 영역 */}
        <div>
          <div className="bg-white w-[72px] h-[63px]" />
          <div className="w-[clamp(0px,95.71%,758px)] bg-white pt-[clamp(0px,122px,122px)] pr-[clamp(0px,42px,42px)] pb-[clamp(0px,157px,157px)] pl-[clamp(0px,76px,76px)]">
            <div className="flex flex-col items-center justify-center w-full bg-yellow-300">
              <div>&apos;나만의 단어공장&apos;</div>
              <div>ㅍ토리</div>
              <div>&apos;나만의 단어공장&apos;</div>
              <div>ㅍ토리</div>
              <div>&apos;나만의 단어공장&apos;</div>
              <div>ㅍ토리</div>
              <div>&apos;나만의 단어공장&apos;</div>
              <div>ㅍ토리</div>
              <div>&apos;나만의 단어공장&apos;</div>
              <div>ㅍ토리</div>
            </div>
            <div className="flex flex-col items-center justify-center w-full"></div>
          </div>
        </div>
        {/* 뒷 배경 영역 */}
        {/* 배경 absolute로 수정 vh,vw는 위치만 수정 */}
        {/* vw,vh로 놓게 되면 배경 즉, 부모요소가 뷰포트가 됨 따라서 화면 크기에 따라 위치가 변하게됨 */}
        <div className="absolute top-[-1vh] left-[3vw] z-[-1] w-[clamp(0px,41.25%,792px)] h-[clamp(0px,67.17%,847px)]">
          <div className="bg-slate-400 w-[72px] h-[63px]" />
          <div className="w-[clamp(0px,95.71%,758px)] h-full bg-slate-400 pt-[clamp(0px,122px,122px)] pr-[clamp(0px,42px,42px)] pb-[clamp(0px,157px,157px)] pl-[clamp(0px,76px,76px)]">
            {/* <div className="w-full h-full">뒷 배경</div> */} 뒷 배경
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
