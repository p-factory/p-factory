import React from 'react';
import Dev from '../../DEV/Dev';
const DEV = Dev.ToolButton;
const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <DEV />
      {/* 
        <div>
          <div>&apos;나만의 단어공장&apos;</div>
          <div>ㅍ토리</div>
          <div>
            <div>
              나의 공장 들어가기
              <img src="#" alt="img" />
            </div>
            <div>
              <u>공장 열쇠를 잊어버렸나요?</u>
            </div>
            <div>공장 새로 만들기</div>
            <div>
              <u>몇 초만에 가능한 회원가입으로 ㅍ토리를 사용해보세요!</u>
            </div>
          </div>
        </div> 
      */}
      {/* 뒷 배경 */}
      {/* h설정은 임시 */}
      <div className="w-[clamp(0px,41.25%,792px)] h-[clamp(0px,67.17%,847px)] bg-slate-500">
        {/* w-[clamp(0px,calc(41.25%-142px),calc(792px-142px))] */}
        {/* pt-[clamp(0px,211px,211px)] pr-[clamp(0px,76px,76px)] pb-[clamp(0px,157px,157px)] pl-[clamp(0px,76px,76px)] */}
        {/* 컨텐츠 내용 */}
        <div className="bg-slate-400 w-[72px] h-[63px]"></div>
        <div
          className="bg-blue-200 w-[72px] h-[63px] ml-[-34px] mt-[28px]
            "
        >
          귀
        </div>
        <div className="w-full h-full">
          <div
            className="w-[clamp(0px,95.71%,758px)] h-full bg-white mt-[28px]
          pt-[clamp(0px,122px,122px)] pr-[clamp(0px,42px,42px)] pb-[clamp(0px,157px,157px)] pl-[clamp(0px,76px,76px)]
          "
          >
            <div className="flex flex-col items-center justify-center w-full bg-yellow-300">
              <div>&apos;나만의 단어공장&apos;</div>
              <div>ㅍ토리</div>
            </div>
            <div className="flex flex-col items-center justify-center w-full"></div>
            {/* <div className="w-full">
              <div className="flex flex-col items-center justify-center w-[clamp(0px,95.71%,758px)] mr-2 bg-white">
                <div>&apos;나만의 단어공장&apos;</div>
                <div>ㅍ토리</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
