import React, { useEffect, useState } from "react";
import check from "../../global/Img/check.svg";
import uncheck from "../../global/Img/unCheck.svg";
import about from "../../global/Img/details.svg";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [isChecked, setIsChecked] = useState({
    all: false,
    service: false,
    private: false,
    position: false,
    marketing: false,
  });
  const [isButtonState, setButtonState] = useState(false);
  const navigate = useNavigate();

  // 구 버전 all을 클릭후 수동으로 다른 토글을 해지 시 두 번째 토글 클릭시 all 토글이 해지가 된다.
  // const handleCheckboxChange = (checked: keyof typeof isChecked) => {
  //   // setIsChecked(!isChecked);
  //   setIsChecked((prev) => ({
  //     // 이전 isChecked 상태를 새로운 객체에 복사
  //     ...prev,
  //     // checked는 함수의 인자로 전달된 값, 이 값은 isChecked 객체의 키 중 하나
  //     [checked]: !prev[checked],
  //     // checked가 'all'일 때만 실행
  //     ...(checked === 'all' && {
  //       service: !prev.all,
  //       private: !prev.all,
  //       position: !prev.all,
  //       marketing: !prev.all,
  //     }),
  //     // checked가 'all'이라면 all 값은 기존 값의 반대(!prev.all)로 토글
  //     all:
  //       checked === 'all'
  //         ? !prev.all
  //         : prev.service && prev.private && prev.position && prev.marketing,
  //   }));
  //   console.log('change', checked, !isChecked[checked]);
  //   console.log('change', isChecked.all);
  // };

  const handleCheckboxChange = (checked: keyof typeof isChecked) => {
    setIsChecked((prev) => {
      // 'all'이 클릭되었을 때 모든 체크박스를 동일하게 설정
      if (checked === "all") {
        const newState = !prev.all;
        return {
          all: newState,
          service: newState,
          private: newState,
          position: newState,
          marketing: newState,
        };
      }

      // 개별 체크박스 선택/해제 로직
      const updatedState = {
        ...prev,
        [checked]: !prev[checked],
      };

      // 모든 개별 체크박스가 true일 때만 'all'을 true로 설정
      updatedState.all =
        updatedState.service &&
        updatedState.private &&
        updatedState.position &&
        updatedState.marketing;

      return updatedState;
    });
  };

  useEffect(() => {
    if (isChecked.service && isChecked.private && isChecked.position) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [isChecked.service, isChecked.private, isChecked.position]);

  return (
    <div className="flex flex-col items-center justify-center w-full pt-[clamp(0px,8.31%,63px)] pb-[clamp(0px,9.63%,73px)] --Pretendard">
      {/*  bg-yellow-300 */}
      {/* w-[clamp(0px,84.43%,640px)] */}
      <div className="mb-[]">
        {/* bg-orange-500  */}
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
          <div className="flex items-center w-full --medium --font-xl">
            {/*  bg-orange-200 */}
            <input
              type="checkbox"
              id="agreeAll"
              className="hidden"
              checked={isChecked.all}
              onChange={() => {
                handleCheckboxChange("all");
              }}
            />
            <label
              htmlFor="agreeAll"
              className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
              style={{
                backgroundImage: `url(${isChecked.all ? check : uncheck})`,
              }}
            ></label>
            전체동의
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <div className="bg-white w-full --medium px-[clamp(0px,5.67%,43px)] py-[clamp(0px,4.09%,31px)] border-l border-r border-b border-black rounded-br-[34px] rounded-bl-[34px]">
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full">
                {/*  bg-orange-200 */}
                <input
                  type="checkbox"
                  id="agreeService"
                  className="hidden"
                  checked={isChecked.service}
                  onChange={() => {
                    handleCheckboxChange("service");
                  }}
                />
                <label
                  htmlFor="agreeService"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked.service ? check : uncheck})`,
                  }}
                ></label>
                <span className="--error-font-Color --font-l">(필수) </span>
                <span className="--font-l">서비스 이용약관</span>
              </div>
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => {
                  alert("준비 중입니다.");
                }}
              >
                <img src={about} alt="" />
              </div>
            </div>
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full">
                {/*  bg-orange-200 */}
                <input
                  type="checkbox"
                  id="agreePrivate"
                  className="hidden"
                  checked={isChecked.private}
                  onChange={() => {
                    handleCheckboxChange("private");
                  }}
                />
                <label
                  htmlFor="agreePrivate"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked.private ? check : uncheck})`,
                  }}
                ></label>
                <span className="--error-font-Color --font-l">(필수) </span>
                <span className="--font-l">개인정보 처리방침</span>
              </div>
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => {
                  alert("준비 중입니다.");
                }}
              >
                <img src={about} alt="" />
              </div>
            </div>
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full">
                {/*  bg-orange-200 */}
                <input
                  type="checkbox"
                  id="agreePos"
                  className="hidden"
                  checked={isChecked.position}
                  onChange={() => {
                    handleCheckboxChange("position");
                  }}
                />
                <label
                  htmlFor="agreePos"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked.position ? check : uncheck})`,
                  }}
                ></label>
                <span className="--error-font-Color --font-l">(필수) </span>
                <span className="--font-l">위치기반서비스 이용약관</span>
              </div>
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => {
                  alert("준비 중입니다.");
                }}
              >
                <img src={about} alt="" />
              </div>
            </div>
            <div className="flex mb-[clamp(0px,4.09%,31px)]">
              <div className="flex items-center w-full">
                {/*  bg-orange-200 */}
                <input
                  type="checkbox"
                  id="agreeMarketing"
                  className="hidden"
                  checked={isChecked.marketing}
                  onChange={() => {
                    handleCheckboxChange("marketing");
                  }}
                />
                <label
                  htmlFor="agreeMarketing"
                  className="block w-[20px] h-[20px] bg-no-repeat bg-contain cursor-pointer mr-[clamp(0px,2.64%,20px)]"
                  style={{
                    backgroundImage: `url(${isChecked.marketing ? check : uncheck})`,
                  }}
                ></label>
                <span className="--font-l">(선택) </span>
                <span className="--font-l">마케팅 활용동의</span>
              </div>
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => {
                  alert("준비 중입니다.");
                }}
              >
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          className={`flex items-center justify-center w-full --Pretendard --semi-bold --font-xl ${isButtonState ? "--primary-bg-Color" : "--status-bg-Color-07"} py-[clamp(0px,3.3%,25px)] rounded-[30px] mb-[clamp(0px,1.98%,15px)] cursor-pointer`}
          onClick={() => {
            if (isButtonState) {
              navigate("/SignUpId");
            } else {
              console.log("필수 조건을 승인해주세요.");
            }
          }}
        >
          다음으로
        </div>
        <div
          className="--status-font-Color-04 border-[--status-font-Color-04] border-b-[1px] --Pretendard --medium --font-xs cursor-pointer"
          onClick={() => {
            navigate("/Login");
          }}
        >
          이미 만들어진 공장이 있어요?
        </div>
      </div>
    </div>
  );
};

export default SignUp;
