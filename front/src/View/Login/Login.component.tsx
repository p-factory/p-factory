import React from 'react';
import loginBlackImage from '../DEV/img/login-black-logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full pt-[16.09%] pb-[20.71%] bg-yellow-300">
      {/* 기본 템플릿 */}
      <div className="bg-orange-500">
        <div className="--neutral-font-Color --JejuDoldam --font-xl">
          &apos;나만의 단어공장&apos;
        </div>
        <div className="--JejuDoldam --font-xxl">ㅍ토리</div>
      </div>
      {/* 여러 종류 Components 예정 */}
      <div className="flex flex-col items-center w-full mt-[clamp(0px,7.12%,54px)]">
        <div
          className="--Pretendard --semi-bold --font-xl --primary-bg-Color w-full flex justify-center pt-[clamp(0px,4.09%,31px)] pb-[clamp(0px,4.09%,31px)] rounded-[30px] cursor-pointer"
          onClick={() => {
            console.log('Login page');
            navigate('/LoginIn');
          }}
        >
          나의 공장 들어가기
          <img src={loginBlackImage} alt="img" />
        </div>
        <div
          className="--neutral-font-Color --Pretendard --font-xxs mt-[clamp(0px,2.51%,19px)] mb-[clamp(0px,5.94%,45px)] cursor-pointer"
          onClick={() => {
            // console.log('find id');
            alert('해당 페이지는 아직 존재하지 않습니다.');
          }}
        >
          <u>공장 열쇠를 잊어버렸나요?</u>
        </div>
        <div className="flex flex-col items-center w-full">
          <div
            className="--Pretendard --semi-bold --font-xl --status-font-Color-08 --status-bg-Color-01 w-full flex justify-center pt-[clamp(0px,4.09%,31px)] pb-[clamp(0px,4.09%,31px)] rounded-[30px] cursor-pointer"
            onClick={() => {
              console.log('signUp');
              navigate('/SignUp');
            }}
          >
            공장 새로 만들기
          </div>
        </div>
        <div
          className="--neutral-font-Color --Pretendard --font-xxs mt-[clamp(0px,2.51%,19px)] cursor-pointer"
          onClick={() => {
            console.log('signUp');
            navigate('/SignUp');
          }}
        >
          <u>몇 초만에 가능한 회원가입으로 ㅍ토리를 사용해보세요!</u>
        </div>
      </div>
    </div>
  );
};

export default Login;
