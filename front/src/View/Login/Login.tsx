import React from 'react';
import Dev from '../../DEV/Dev';
import loginImage from '../DEV/img/Vector.svg';
const DEV = Dev.ToolButton;
const Login = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <DEV />
      {/* h설정은 임시 */}
      {/* h-[clamp(0px,67.17%,847px)] */}
      <div className="relative flex w-[clamp(0px,41.25%,792px)]">
        {/* 컨탠츠 영역 */}
        <div className="flex flex-col justify-end w-full">
          <div className="bg-white w-[72px] h-[63px] rounded-[30px]" />
          {/* pt pb 값은 %로 계산이 필요  */}
          <div className="w-[clamp(0px,95.71%,758px)] h-[clamp(0px,89.49%,758px)] bg-white pr-[clamp(0px,42px,42px)] pl-[clamp(0px,76px,76px)] rounded-[30px]">
            {/* pt-[clamp(0px,122px,122px)] pb-[clamp(0px,157px,157px)]  */}
            <div className="flex flex-col items-center justify-center w-full pt-[16.09%] pb-[20.71%] bg-yellow-300">
              {/* 기본 템플릿 */}
              <div className="bg-orange-500">
                <div className="--neutral-font-Color --JejuDoldam --font-xl">
                  &apos;나만의 단어공장&apos;
                </div>
                <div className="--JejuDoldam --font-xxl">ㅍ토리</div>
              </div>
              {/* 여러 종류 Components 예정 */}
              <div className="flex flex-col items-center w-full mt-[54px]">
                <div className="--Pretendard --semi-bold --font-xl --primary-bg-Color w-full flex justify-center pt-[31px] pb-[31px] rounded-[30px]">
                  나의 공장 들어가기
                  <img src={loginImage} alt="img" />
                </div>
                <div className="--neutral-font-Color --Pretendard --font-xxs mt-[19px] mb-[45px]">
                  <u>공장 열쇠를 잊어버렸나요?</u>
                </div>
                <div className="flex flex-col items-center w-full">
                  <div className="--Pretendard --semi-bold --font-xl --status-font-Color-08 --status-bg-Color-01 w-full flex justify-center pt-[31px] pb-[31px] rounded-[30px]">
                    공장 새로 만들기
                  </div>
                </div>
                <div className="--neutral-font-Color --Pretendard --font-xxs mt-[19px]">
                  <u>몇 초만에 가능한 회원가입으로 ㅍ토리를 사용해보세요!</u>
                </div>
              </div>
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
        {/* 뒷 배경 영역 */}
        {/* h값 다시 계산 필요 */}
        <div className="absolute top-[-7px] left-[30px] z-[-1] w-full h-[clamp(0px,67.17%,847px)]">
          <div className="bg-slate-400 w-[72px] h-[63px] rounded-[30px]" />
          <div className="w-[clamp(0px,95.71%,758px)] h-full bg-slate-400 pt-[clamp(0px,122px,122px)] pr-[clamp(0px,42px,42px)] pb-[clamp(0px,157px,157px)] pl-[clamp(0px,76px,76px)] rounded-[30px]">
            뒷 배경
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
