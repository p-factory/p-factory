import React from 'react';
import loginBlackImage from '../DEV/img/login-black-logo.svg';

const LoginPassWord = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-[12.01%] pb-[clamp(0px,10.39%,56px)] bg-yellow-300">
      <div className="flex flex-col justify-center items-center bg-orange-500 mb-[49px]">
        <div className="--neutral-font-Color --JejuDoldam --font-xl">
          &apos;나만의 단어공장&apos;
        </div>
        <div className="--JejuDoldam --font-xxl">ㅍ토리</div>
        <div className="--semi-bold --font-l">회원가입</div>
      </div>
      {/* 컨텐츠 영역 */}
      <div className="flex flex-col items-center justify-center w-full pt-[] pb-[] bg-yellow-100 mb-[clamp(0px,9.1%,69.45px)]">
        <div className="flex flex-col justify-start items-start w-full --Pretendard text-[33px] --bold mb-[clamp(0px,17.94%,136px)]">
          <span>토리가 만나기 위한</span>
          <span>준비를 하고 있어요!</span>
        </div>
        <div className="flex flex-col w-full --Pretendard">
          <div className="--bold --font-m mb-[15px]">
            공장을 위한 비밀번호가 필요해요!
            <span className="--error-font-Color">*</span>
          </div>
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input type="text" className="bg-red-200 w-[100%]" />
          </div>
          <div className="mt-[10px] mb-[15px]">
            <span className="--error-font-Color --Pretendard --medium text-[14px] mt-[10px] mb-[15px]">
              *영문, 숫자를 포함한 8~20자리 이내로 입력해주세요.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full --Pretendard">
          <div className="--bold --font-m mb-[15px]">
            비밀번호를 다시한번 확인할게요!
            <span className="--error-font-Color">*</span>
          </div>
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input type="text" className="bg-red-200 w-[100%]" />
          </div>
          <div className="mt-[10px]">
            <span className="--error-font-Color --Pretendard --medium text-[14px]">
              *비밀번호가 일치하지 않아요!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full --Pretendard --semi-bold --font-xl --status-bg-Color-07 py-[clamp(0px,3.3%,25px)] rounded-[30px]">
          가입 하기
          <img className="ml-[16px]" src={loginBlackImage} alt="img" />
        </div>
        <div className="--status-font-Color-04 border-[--status-font-Color-04] border-b-[1px] --Pretendard --medium --font-xs mt-[clamp(0px,1.98%,15px)]">
          이미 만들어진 공장이 있어요!
        </div>
      </div>
    </div>
  );
};

export default LoginPassWord;
