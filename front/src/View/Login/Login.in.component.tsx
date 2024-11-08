import React from 'react';
import loginBlackImage from '../DEV/img/login-black-logo.svg';

const LoginIn = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-[12.01%] pb-[clamp(0px,10.39%,56px)] bg-yellow-300">
      <div className="bg-orange-500 mb-[32.37px]">
        <div className="--neutral-font-Color --JejuDoldam --font-xl">
          &apos;나만의 단어공장&apos;
        </div>
        <div className="--JejuDoldam --font-xxl">ㅍ토리</div>
      </div>
      {/* 컨텐츠 영역 */}
      <div className="flex flex-col items-center justify-center w-full pt-[] pb-[] bg-yellow-100 mb-[clamp(0px,9.1%,69.45px)]">
        <div className="flex flex-col w-full">
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input type="text" className="bg-red-200 w-[100%]" />
          </div>
          <div className="mb-[clamp(0px,4.49%,34px)] mt-[clamp(0px,2.24%,17px)]">
            <span className="--error-font-Color --Pretendard --medium text-[14px]">
              *아이디 & 비밀번호가 올바르지 않습니다. 다시 입력해 주세요.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input type="text" className="bg-red-200 w-[100%]" />
          </div>
          <div className="mt-[clamp(0px,2.24%,17px)]">
            <span className="--error-font-Color --Pretendard --medium text-[14px]">
              *아이디 & 비밀번호가 올바르지 않습니다. 다시 입력해 주세요.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full --Pretendard --semi-bold --font-xl --status-bg-Color-07 py-[clamp(0px,3.3%,25px)] rounded-[30px]">
          로그인
          <img className="ml-[16px]" src={loginBlackImage} alt="img" />
        </div>
        <div className="--status-font-Color-04 border-[--status-font-Color-04] border-b-[1px] --Pretendard --medium --font-xs mt-[clamp(0px,1.98%,15px)]">
          아이디·비밀번호 찾기
        </div>
      </div>
    </div>
  );
};

export default LoginIn;
