import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import loginBlackImage from '../DEV/img/login-black-logo.svg';
import { useNavigate } from 'react-router-dom';
import { userState } from '../../Model/atom';
import { useFetchMutation } from '../../global/Hooks/uesFetchSingleAPI';
const SignUpNickName = () => {
  const [isState, setState] = useState(false);
  const [isButton, setButton] = useState(false);
  const [isValue, setValue] = useState('');
  const [isUser, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const [isLoadingMessage, setLoadingMessage] = useState('');
  const [isErrorMessage, setErrorMessage] = useState('');
  const [isSuccessMessage, setSuccessMessage] = useState('');
  // const [isData, setIsData] = useState(false);

  const { mutation, isLoading, isError, isSuccess } = useFetchMutation('POST', {
    url: '/user/signup',
    postData: isUser,
  });

  const handleInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    console.log(value.length);
    if (value.length >= 6) {
      setState(true);
      setButton(false);
    } else if (value.length === 0) {
      setState(false);
      setButton(false);
    } else if (value.length === 5) {
      setState(false);
      setButton(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(isUser);
  };

  const handleSubmit = () => {
    mutation.mutate(isUser); // POST 요청 수동 실행
  };

  useEffect(() => {
    console.log(isUser);
    if (isLoading) {
      setLoadingMessage('Sending data...');
      setErrorMessage('');
      setSuccessMessage('');
      console.log(isLoadingMessage);
    } else if (isError) {
      setLoadingMessage('');
      setErrorMessage('Error occurred while sending data.');
      setSuccessMessage('');
      console.log(isErrorMessage);
    } else if (isSuccess) {
      setLoadingMessage('');
      setErrorMessage('');
      setSuccessMessage('POST 요청 성공!');
      console.log('POST request successful with data:', isUser);
      console.log(isSuccessMessage);
    }
  }, [isLoading, isError, isSuccess, isUser]);

  return (
    <div className="flex flex-col items-center justify-center w-full pt-[12.01%] pb-[clamp(0px,10.39%,56px)]">
      {/*  bg-yellow-300 */}
      <div className="flex flex-col justify-center items-center mb-[49px]">
        {/*  bg-orange-500 */}
        <div className="--neutral-font-Color --JejuDoldam --font-xl">
          &apos;나만의 단어공장&apos;
        </div>
        <div className="--JejuDoldam --font-xxl">ㅍ토리</div>
        <div className="--semi-bold --font-l">회원가입</div>
      </div>
      {/* 컨텐츠 영역 */}
      <div className="flex flex-col items-center justify-center w-full pt-[] pb-[] mb-[clamp(0px,9.1%,69.45px)]">
        {/*  bg-yellow-100 */}
        <div className="flex flex-col justify-start items-start w-full --Pretendard text-[33px] --bold mb-[clamp(0px,17.94%,136px)]">
          <span>마지막 단계에요!</span>
          <span>공장을 위한 닉네임이 필요해요!</span>
        </div>
        <div className="flex flex-col w-full --Pretendard">
          <div className="--bold --font-m mb-[15px]">
            공장을 위한 닉네임이 필요해요!
            <span className="--error-font-Color">*</span>
          </div>
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input
              type="text"
              name="nickname"
              className="w-[100%]"
              value={isValue}
              onChange={(e) => {
                handleInputState(e);
                handleInputChange(e);
              }}
            />
            {/* bg-red-200  */}
          </div>
          <div className="mt-[10px]">
            {isState ? (
              <span className="--error-font-Color --Pretendard --medium text-[14px]">
                *너무 길어요! 올바르게 작성해주세요.
              </span>
            ) : (
              <div className="--error-font-Color --Pretendard --medium text-[14px] mb-[20px]" />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          className={`flex items-center justify-center w-full --Pretendard --semi-bold --font-xl ${isButton ? '--primary-bg-Color' : '--status-bg-Color-07'} py-[clamp(0px,3.3%,25px)] rounded-[30px] ${isButton ? 'cursor-pointer' : ''}`}
          onClick={() => {
            navigate('/LoginIn');
            handleSubmit();
          }}
        >
          가입 하기
          <img className="ml-[16px]" src={loginBlackImage} alt="img" />
        </div>
        <div
          className="--status-font-Color-04 border-[--status-font-Color-04] border-b-[1px] --Pretendard --medium --font-xs mt-[clamp(0px,1.98%,15px)] cursor-pointer"
          onClick={() => {
            navigate('/LoginIn');
          }}
        >
          이미 만들어진 공장이 있어요!
        </div>
      </div>
    </div>
  );
};

export default SignUpNickName;
