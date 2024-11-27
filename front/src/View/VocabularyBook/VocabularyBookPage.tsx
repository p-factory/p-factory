import React, { useState, useEffect } from "react";
import spannerIconWhite from "../../global/Img/spannerIconWhite.svg";
import spannerIconBlack from "../../global/Img/spannerIconBlack.svg";
import circleSingleIcon from "../../global/Img/circleSingleIcon.svg";
import speechBubbleBg from "../../global/Img/speechBubbleBg.svg";
import toryTop from "../../global/Img/toryTop.svg";
// import DevTool from '../../DEV/Dev';
import VocabularyBook from "./components/VocabularyBook.component";
import { useFetchMutation } from "../../global/Hooks/uesFetchSingleAPI";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

// const DEV = DevTool.ToolButton;

const VocabularyBookPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateList, setUpdateList] = useState(false); // 리스트 업데이트 상태

  const [isPostData, setPostData] = useState({
    word: "",
  });

  const [isLoadingMessage, setLoadingMessage] = useState("");
  const [isErrorMessage, setErrorMessage] = useState("");
  const [isSuccessMessage, setSuccessMessage] = useState("");
  const [isResponseData, setResponseData] = useState(null); // 응답 데이터를 저장할 상태

  const { mutation, isLoading, isError, isSuccess, responseData } =
    useFetchMutation("POST", {
      url: "/words",
      postData: isPostData,
    });

  const handleSubmit = () => {
    setUpdateList((prev) => !prev); // 리스트 업데이트
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
      setLoadingMessage("Sending data...");
      setErrorMessage("");
      setSuccessMessage("");
      console.log(isLoadingMessage);
    } else if (isError) {
      setLoadingMessage("");
      setErrorMessage("Error occurred while sending data.");
      setSuccessMessage("");
      console.log(isErrorMessage);
    } else if (isSuccess) {
      setLoadingMessage("");
      setErrorMessage("");
      setSuccessMessage("POST 요청 성공!");
      setResponseData(responseData); // 응답 데이터를 상태로 설정
      console.log("Response data:", isResponseData, responseData); // 응답 데이터를 콘솔에 출력
      console.log("POST request successful with data:", isPostData);
      console.log(isSuccessMessage);
    }
  }, [isLoading, isError, isSuccess, isPostData]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="flex flex-col item-center --Pretendard">
      {/* <DEV /> */}
      {/* 제목 부분 */}
      <div className="relative flex flex-col items-center justify-end mb-[66px] mt-[172px]">
        <div className="text-[60px] --JejuDoldam font-bold relative z-10">
          토익 단어
        </div>
      </div>
      {/* 토리가 말하는 부분 */}
      <div className="relative flex justify-center w-full">
        <div className="relative flex justify-start w-[clamp(0px,83.18%,1597px)]">
          <div className="relative flex items-end mr-[clamp(0px,2.24%,43px)] ml-[clamp(0px,10.9%,174px)]">
            <img src={toryTop} alt="" />
          </div>
          <div className="relative flex items-start mb-[43.99px]">
            <img
              src={speechBubbleBg}
              alt=""
              className="w-[727px] h-[135px] relative z-[-10]"
            />
            <div className="absolute flex flex-col text-white pt-[21px] pl-[67px]">
              <div className="">
                <div className="--font-xl medium --Pretendard">
                  재료생성 버튼
                </div>
                <div className="flex items-end gap-2 --font-m normal leading-[175%]">
                  <span className="opacity-50">오른쪽</span>
                  <div className="--primary-flex bg-white w-[38px] h-[37px] rounded-[9px]">
                    <img
                      src={spannerIconBlack}
                      alt="Spanner Icon"
                      className="w-[13px] h-[13px]"
                    />
                  </div>
                  <span className="opacity-50">
                    아이콘을 누를 시 단어 작성 페이지로 바로 이동 할 수 있다구~~
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VocabularyBook isUpdateList={isUpdateList} />
      {/* 버튼 부분 */}
      <div className="flex flex-col items-center w-full mb-[212px] mt-[143px]">
        <div className="w-[clamp(0px,35.52%,682px)] h-[102px]">
          <div
            className="--bold btn-secondary --Pretendard pt-[clamp(0px,3.33%,36px)] pb-[clamp(0px,3.61%,39px)] pl-[clamp(0px,10.83%,208px)] pr-[clamp(0px,13.59%,261px)] cursor-pointer"
            onClick={() => {
              openModal();
            }}
          >
            <div className="flex items-center">
              <div className="--font-l whitespace-nowrap">재료 생성하기</div>
              <img
                src={spannerIconWhite}
                alt="Spanner Icon"
                className="pl-[clamp(0px,0.26%,5px)]"
              />
            </div>
          </div>
          <div
            className="--Pretendard flex flex-col items-center --status-font-Color-05 --medium --font-xs pt-[clamp(0px,2.59%,28px)] pl-[clamp(0px,8.44%,162px)] pr-[clamp(0px,7.4%,142px)] underline cursor-pointer"
            onClick={() => {
              navigate("/Manual");
            }}
          >
            설명이 필요하신가요?
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        // 스크롤 활성화 이벤트
        onAfterOpen={() => {
          document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 비활성화
        }}
        onAfterClose={() => {
          document.body.style.overflow = "auto"; // 모달 닫힐 때 스크롤 활성화
        }}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)", // #000000 배경색에 60% 불투명도
          },
          // 모달 기본 설정을 위한 매개변수
          // React-Modal은 content를 통해서 설정 할 수 있다.
          content: {
            display: "flex",
            justifyContent: "center",
            // padding: '36px 46px', // 여기에 padding 값 설정
            padding: 0,
            width: "821.5px",
            height: "338px",
            borderRadius: "49px", // rounded-lg에 해당하는 radius 값
            fontFamily: "Pretendard",
            fontWeight: "SemiBold",
            outline: "none",
            margin: 0,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // 중앙 정렬을 위한 transform
            fontSize: "25px",
          },
        }}
      >
        <div className="flex-col w-[100%]">
          <div className="flex w-[100%] border-b border-black px-[46px] py-[30px]">
            <div className="flex w-[100%]">
              <span className="">재료 생성하기</span>
              <img src={spannerIconBlack} alt="" />
            </div>
            <div>
              <img src={circleSingleIcon} alt="" />
            </div>
          </div>
          <div className="w-[100%] px-[46px] mt-[30px] mb-[63px]">
            <div className="w-[100%] border border-black py-[20px] px-[30px]">
              <input
                type="text"
                name="word"
                className="w-[100%]"
                value={isPostData.word}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
          </div>
          <div className="flex w-[100%] justify-between border-t border-black">
            <div
              onClick={closeModal}
              className="flex w-[50%] h-[65.9px] pt-[10px] border-r border-black justify-center outline-none cursor-pointer"
            >
              취소
            </div>
            <div
              onClick={() => {
                handleSubmit();
                //왜 다시 가는가? get을 다시 하기 위해서?
                navigate("/VocabularyBook");
                closeModal();
              }}
              className="flex w-[50%] h-[65.9px] pt-[10px] justify-center outline-none cursor-pointer"
            >
              확인
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VocabularyBookPage;
