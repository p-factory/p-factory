import React from "react";
import Dev from "../../DEV/Dev";
import testIMG from "../../View/DEV/img/Vector.svg";
const DEV = Dev.ToolButton;
const Login = () => {
  return (
    <div className="--root-flex">
      <DEV />
      <div className="z-10 --primary-flex-col bg-statusColor-08 w-[39.48%] h-[75.83%] rounded-[36px]">
        <div className="fixed top-[8vh] left-[30.30vw] bg-statusColor-08 w-[5%] h-[20%] rounded-[37px]"></div>
        <div className="--font-xl JejuDoldam text-neutralColor mb-[27px]">
          &apos;나만의 단어공장&apos;
        </div>
        <div className="--font-xxl JejuDoldam mb-[54px]">ㅍ토리</div>
        <div className="flex flex-col" style={{ display: "contents" }}>
          {/* "flex flex-col" style={{ display: 'contents' }} */}
          <div className="--font-xl Pretendard semibold bg-primaryColor --primary-flex w-[84.43%] h-[11.23%] rounded-[30px] mb-[15px]">
            {/* w-[84.43%] h-[11.23%] rounded-[30px] */}
            나의 공장 들어가기
            <img src={testIMG} alt="img" />
          </div>
          <div className="--font-xxs Pretendard text-neutralColor mb-[45px]">
            <u>공장 열쇠를 잊어버렸나요?</u>
          </div>
          <div className="--font-xl Pretendard semibold bg-statusColor-01 text-statusColor-08 --primary-flex w-[84.43%] h-[11.23%] rounded-[30px] mb-[15px]">
            공장 새로 만들기
          </div>
          <div className="--font-xxs Pretendard text-neutralColor">
            <u>몇 초만에 가능한 회원가입으로 ㅍ토리를 사용해보세요!</u>
          </div>
        </div>
      </div>
      <div className="fixed top-[9vh] left-[32vw] z-[-1] --primary-flex-col bg-statusColor-01 w-[39.48%] h-[75.83%] rounded-[36px]">
        <div className="fixed top-[5vh] left-[32.30vw] bg-statusColor-01 w-[5%] h-[20%] rounded-[37px]"></div>
      </div>
    </div>
  );
};

export default Login;
