import React, { useState } from 'react';
import check from '../../global/Img/check.svg';
import uncheck from '../../global/Img/unCheck.svg';
import about from '../../global/Img/details.svg';
const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log('change');
  };
  return (
    <div className="flex flex-col items-center justify-center w-full pt-[clamp(0px,8.31%,63px)] pb-[clamp(0px,9.63%,73px)] --Pretendard bg-yellow-300">
      {/* w-[clamp(0px,84.43%,640px)] */}
      <div className="bg-orange-500 mb-[]">
        <div className="--neutral-font-Color --JejuDoldam --font-xl">
          &apos;나만의 단어공장&apos;
        </div>
        <div className="--JejuDoldam --font-xxl">ㅍ토리</div>
      </div>
      <div className="--Pretendard --font-l --semi-bold">회원 가입</div>
      <div className="--status-font-Color-04 --Pretendard --font-l --semi-bold mt-[clamp(0px,1.32%,10px)] mb-[clamp(0px,7.26%,55px)]">
        이용약관 동의
      </div>
      {/* 컨텐츠 영역 */}
      <div className="flex flex-col items-center justify-center w-full pr-[clamp(0px,6.79%,51.5px)] pl-[clamp(0px,6.79%,51.5px)] mb-[clamp(0px,11.74%,89px)]">
        <div className="bg-white flex items-start justify-center w-full px-[clamp(0px,5.67%,43px)] py-[clamp(0px,3.83%,29px)] border-black border rounded-tr-[34px] rounded-tl-[34px]">
          <div className="flex items-center w-full bg-orange-200 --medium --font-xl">
            <input
              type="checkbox"
              id="agreeAll"
              className="hidden"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="agreeAll"
              className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
              style={{
                backgroundImage: `url(${isChecked ? check : uncheck})`,
              }}
            ></label>
            전체동의
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <div className="bg-white w-full --medium px-[clamp(0px,5.67%,43px)] py-[clamp(0px,4.09%,31px)] border-l border-r border-b border-black rounded-br-[34px] rounded-bl-[34px]">
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full bg-orange-200">
                <input
                  type="checkbox"
                  id="agreeService"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="agreeService"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked ? check : uncheck})`,
                  }}
                ></label>
                <span className="--error-font-Color --font-l">(필수) </span>
                <span className="--font-l">서비스 이용약관</span>
              </div>
              <div className="flex items-center justify-center">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full bg-orange-200">
                <input
                  type="checkbox"
                  id="agreePrivate"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="agreePrivate"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked ? check : uncheck})`,
                  }}
                ></label>
                <span className="--error-font-Color --font-l">(필수) </span>
                <span className="--font-l">개인정보 처리방침</span>
              </div>
              <div className="flex items-center justify-center">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full bg-orange-200">
                <input
                  type="checkbox"
                  id="agreePos"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="agreePos"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked ? check : uncheck})`,
                  }}
                ></label>
                <span className="--error-font-Color --font-l">(필수) </span>
                <span className="--font-l">위치기반서비스 이용약관</span>
              </div>
              <div className="flex items-center justify-center">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full bg-orange-200">
                <input
                  type="checkbox"
                  id="agreeMarketing"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="agreeMarketing"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked ? check : uncheck})`,
                  }}
                ></label>
                <span className="--font-l">(선택) </span>
                <span className="--font-l">마케팅 활용동의</span>
              </div>
              <div className="flex items-center justify-center">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full --Pretendard --semi-bold --font-xl --status-bg-Color-07 py-[clamp(0px,3.3%,25px)] rounded-[30px] mb-[clamp(0px,1.98%,15px)]">
          다음으로
        </div>
        <div className="--status-font-Color-04 border-[--status-font-Color-04] border-b-[1px] --Pretendard --medium --font-xs">
          이미 만들어진 공장이 있어요?
        </div>
      </div>
    </div>
  );
};

export default SignUp;
