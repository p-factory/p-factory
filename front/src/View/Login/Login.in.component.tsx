import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import loginBlackImage from '../DEV/img/login-black-logo.svg';
import { useFetchMutation } from '../../global/Hooks/uesFetchSingleAPI';
import { useNavigate } from 'react-router-dom';
const LoginIn = () => {
  const navigate = useNavigate();

  const [isPostData, setPostData] = useState({
    username: '',
    password: '',
  });
  // const [isValue, setValue] = useState('');

  const [isLoadingMessage, setLoadingMessage] = useState('');
  const [isErrorMessage, setErrorMessage] = useState('');
  const [isSuccessMessage, setSuccessMessage] = useState('');
  const [isResponseData, setResponseData] = useState(null); // 응답 데이터를 저장할 상태

  const { mutation, isLoading, isError, isSuccess, responseData } =
    useFetchMutation('POST', {
      url: '/user/login',
      postData: isPostData,
    });

  const handleSubmit = () => {
    mutation.mutate(isPostData); // POST 요청 수동 실행
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(isPostData);
  };

  useEffect(() => {
    console.log(isPostData);
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
      setResponseData(responseData); // 응답 데이터를 상태로 설정
      console.log('Response data:', isResponseData, responseData); // 응답 데이터를 콘솔에 출력
      console.log('POST request successful with data:', isPostData);
      console.log(isSuccessMessage);
    }
    if (isSuccess && responseData?.TOKEN) {
      // js-cookie를 사용하여 TOKEN 저장
      Cookies.set('TOKEN', responseData.TOKEN, {
        path: '/',
        expires: 1, //만료일
        secure: true,
      });
      console.log('TOKEN saved to cookie:'); //, responseData.TOKEN
      navigate('/');
    }
  }, [isLoading, isError, isSuccess, isPostData]);

  return (
    <div className="flex flex-col items-center justify-center w-full pt-[12.01%] pb-[clamp(0px,10.39%,56px)]">
      {/*  bg-yellow-300 */}
      <div className="mb-[32.37px]">
        {/* bg-orange-500  */}
        <div className="--neutral-font-Color --JejuDoldam --font-xl">
          &apos;나만의 단어공장&apos;
        </div>
        <div className="--JejuDoldam --font-xxl">ㅍ토리</div>
      </div>
      {/* 컨텐츠 영역 */}
      <div className="flex flex-col items-center justify-center w-full pt-[] pb-[] mb-[clamp(0px,9.1%,69.45px)]">
        {/* bg-yellow-100  */}
        <div className="flex flex-col w-full">
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input
              type="text"
              name="username"
              className="w-[100%]"
              value={isPostData.username}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            {/* bg-red-200  */}
          </div>
          <div className="mb-[clamp(0px,4.49%,34px)] mt-[clamp(0px,2.24%,17px)]">
            {/* API 메세지에 따라 다르게 구현할 예정 */}
            <span className="--error-font-Color --Pretendard --medium text-[14px]">
              *아이디 & 비밀번호가 올바르지 않습니다. 다시 입력해 주세요.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-white border-[1px] py-[3.69%] px-[3.96%] border-black rounded-[22px]">
            <input
              type="text"
              name="password"
              className="w-[100%]"
              value={isPostData.password}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            {/* bg-red-200  */}
          </div>
          <div className="mt-[clamp(0px,2.24%,17px)]">
            {/* API 메세지에 따라 다르게 구현할 예정 */}
            <span className="--error-font-Color --Pretendard --medium text-[14px]">
              *아이디 & 비밀번호가 올바르지 않습니다. 다시 입력해 주세요.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          className="flex items-center justify-center w-full --Pretendard --semi-bold --font-xl --status-bg-Color-07 py-[clamp(0px,3.3%,25px)] rounded-[30px]"
          onClick={() => {
            handleSubmit();
          }}
        >
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
