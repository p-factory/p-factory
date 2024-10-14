import React from 'react';
import Dev from '../../../DEV/Dev';
import testIMG from '../img/Vector.svg';
const DEV = Dev.ToolButton;
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <DEV />
      <div className="z-10 flex flex-col items-center justify-center bg-orange-400 w-[clamp(0px,41.25%,792px)] h-[clamp(0px,67.17%,847px)]">
        <div>
          <div className="fixed top-[8vh] left-[30.30vw] bg-yellow-400 w-[5%] h-[20%]" />
          <div>
            <div className="--JejuDoldam text-neutralColor mb-[27px]">
              &apos;나만의 단어공장&apos;
            </div>
            <div className="JejuDoldam mb-[54px]">ㅍ토리</div>
            <div className="flex flex-col" style={{ display: 'contents' }}>
              <div className="Pretendard semibold bg-blue-400 --primary-flex w-[84.43%] h-[11.23%] mb-[15px]">
                나의 공장 들어가기
                <img src={testIMG} alt="img" />
              </div>
              <div className="Pretendard text-neutralColor mb-[45px]">
                <u>공장 열쇠를 잊어버렸나요?</u>
              </div>
              <div className="Pretendard semibold --status-bg-Color-01 text-statusColor-08 --primary-flex w-[84.43%] h-[11.23%] mb-[15px]">
                공장 새로 만들기
              </div>
              <div className="Pretendard text-neutralColor">
                <u>몇 초만에 가능한 회원가입으로 ㅍ토리를 사용해보세요!</u>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[9vh] left-[32vw] z-[-1] --status-bg-Color-01  w-[39.48%] h-[75.83%]">
        <div className="fixed top-[5vh] left-[32.30vw] --status-bg-Color-01 w-[5%] h-[20%]"></div>
      </div>
    </div>
  );
};

export default Login;
