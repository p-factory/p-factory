import React from 'react';
import Dev from '../../DEV/Dev';
const DEV = Dev.ToolButton;
const Login = () => {
  return (
    <div className="--root-flex">
      <DEV />
      <div>ㅍ토리</div>
      <div className="--primary-flex-col bg-statusColor-08 w-[39.48%] h-[75.83%] rounded-[36px]">
        <div>&apos;나만의 단어공장&apos;</div>
        <div>ㅍ토리</div>
        <div className="flex flex-col" style={{ display: 'contents' }}>
          <div className="bg-primaryColor --primary-flex w-[84.43%] h-[11.23%] rounded-[30px]">
            나의 공장 들어가기
            <img src="#" alt="img" />
          </div>
          <div>공장 열쇠를 잊어버렸나요?</div>
          <div className="bg-statusColor-01 text-statusColor-08 --primary-flex w-[84.43%] h-[11.23%] rounded-[30px]">
            공장 새로 만들기
          </div>
          <div>몇 초만에 가능한 회원가입으로 ㅍ토리를 사용해보세요!</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
