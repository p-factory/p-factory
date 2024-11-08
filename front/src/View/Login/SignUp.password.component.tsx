import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import loginBlackImage from '../DEV/img/login-black-logo.svg';
import { useNavigate } from 'react-router-dom';
import { userState } from '../../Model/atom';
// import loginWhiteImage from '../DEV/img/login-white-logo.svg';
const SignUpPassWord = () => {
  const [isState, setState] = useState(false);
  const [isCheckedState, setCheckedState] = useState(false);
  const [isButton, setButton] = useState(false);
  const [isPassword, setPassword] = useState('');
  const [isCheckedPassword, setCheckedPassword] = useState('');
  const navigate = useNavigate();
  const [isUser, setUser] = useRecoilState(userState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value !== '') {
      setState(false);
    } else {
      setState(true);
    }
  };

  const handleCheckedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckedPassword(value);
    // if()
  };

  useEffect(() => {
    // Recoil 확인을 위한 log
    console.log(isUser);
    if (isPassword !== '' && isPassword !== isCheckedPassword) {
      setCheckedState(true);
      setButton(false);
      console.log('일치하지 않습니다.');
      console.log(isButton);
    } else if (isPassword !== '' && isPassword === isCheckedPassword) {
      setCheckedState(false);
      setButton(true);
      console.log('일치합니다.');
      console.log(isButton);
    }
  }, [isPassword, isCheckedPassword]);

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
            <input
              type="text"
              className="bg-red-200 w-[100%]"
              value={isPassword}
              onChange={handlePassword}
            />
          </div>
          <div className="mt-[10px] mb-[15px]">
            {isState ? (
              <span className="--error-font-Color --Pretendard --medium text-[14px] mt-[10px] mb-[15px]">
                *영문, 숫자를 포함한 8~20자리 이내로 입력해주세요.
              </span>
            ) : (
              <div className="--error-font-Color --Pretendard --medium text-[14px] mt-[10px] mb-[15px]" />
            )}
          </div>
        </div>
        <div className="flex flex-col w-full --Pretendard">
          <div className="--bold --font-m mb-[15px]">
            비밀번호를 다시한번 확인할게요!
            <span className="--error-font-Color">*</span>
          </div>
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input
              type="text"
              name="password"
              className="bg-red-200 w-[100%]"
              value={isCheckedPassword}
              onChange={(e) => {
                handleCheckedPassword(e);
                handleInputChange(e);
              }}
            />
          </div>
          <div className="mt-[10px]">
            {isCheckedState ? (
              <span className="--error-font-Color --Pretendard --medium text-[14px]">
                *비밀번호가 일치하지 않아요!
              </span>
            ) : (
              <div className="--error-font-Color --Pretendard --medium text-[14px] mb-[24px]" />
            )}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-full cursor-pointer"
        onClick={() => {
          if (isState && !isCheckedState) {
            navigate('/SignUpNickName');
          }
        }}
      >
        <div
          className={`flex items-center justify-center w-full --Pretendard --semi-bold --font-xl ${isButton ? '--primary-bg-Color' : '--status-bg-Color-07'} py-[clamp(0px,3.3%,25px)] rounded-[30px]`}
        >
          가입 하기
          <img
            className="ml-[16px]"
            // 수정 필요
            src={
              // 두 false가 default 이다.
              // !isState && !isCheckedState ? loginWhiteImage : loginBlackImage
              // isState && !isCheckedState ? loginWhiteImage : loginBlackImage
              loginBlackImage
            }
            alt="img"
          />
        </div>
        <div className="--status-font-Color-04 border-[--status-font-Color-04] border-b-[1px] --Pretendard --medium --font-xs mt-[clamp(0px,1.98%,15px)] cursor-pointer">
          이미 만들어진 공장이 있어요!
        </div>
      </div>
    </div>
  );
};

export default SignUpPassWord;
