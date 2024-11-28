import React, { useEffect, useState } from "react";
import spannerIconWhite from "../../../global/Img/spannerIconWhite.svg";
import trashCanIcon from "../../../global/Img/trashCanIcon.svg";
import trashCanIconWhite from "../../../global/Img/trashCanIconWhite.svg";
import highlighterIcon from "../../../global/Img/highlighterIcon.svg";
import highlighterIconWhite from "../../../global/Img/highlighterIconWhite.svg";
import VocabularyBookList from "./VocabularyBookList.component";
import { useFetchMutation } from "../../../global/Hooks/uesFetchSingleAPI";
import Modal from "react-modal";
import spannerIconBlack from "../../../global/Img/spannerIconBlack.svg";
import circleSingleIcon from "../../../global/Img/circleSingleIcon.svg";
// import { useNavigate } from "react-router-dom";
const VocabularyBook = ({ isUpdateList }: { isUpdateList: boolean }) => {
  // const navigate = useNavigate();
  const [isDeleteMode, setDeleteMode] = useState(false); // 삭제 모드 상태
  const [isHighLightMode, setHighLightMode] = useState(false);
  const [isSelectedWords, setSelectedWords] = useState<number[]>([]); // 선택된 단어 ID 관리
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // 선택 초기화
  const handleResetWords = () => {
    if (isDeleteMode) {
      setSelectedWords([]); // 삭제 모드 비활성화 시 선택 초기화
    }
  };

  // 단어 선택/해제 핸들러
  // const handleSelectWord = (id: number) => {
  //   if (isDeleteMode) {
  //     setSelectedWords(
  //       (prevSelected) =>
  //         prevSelected.includes(id)
  //           ? prevSelected.filter((id) => id !== id) // 이미 선택된 단어는 해제
  //           : // eslint-disable-next-line prettier/prettier
  //             [...prevSelected, id] // 새로운 단어 추가
  //     );
  //   }
  // };

  const handleSelectWord = (id: number, mode: "delete" | "highlight") => {
    if (mode === "delete" && isDeleteMode) {
      // 삭제 모드에서 선택 처리
      setSelectedWords(
        (prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((wordId) => wordId !== id) // 이미 선택된 단어 해제
            : // eslint-disable-next-line prettier/prettier
              [...prevSelected, id] // 새로운 단어 선택
      );
    }

    if (mode === "highlight" && isHighLightMode) {
      // 하이라이트 모드에서 선택 처리
      setSelectedWords(
        (prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((wordId) => wordId !== id) // 이미 선택된 단어 해제
            : // eslint-disable-next-line prettier/prettier
              [...prevSelected, id] // 새로운 단어 선택
      );
    }
  };

  // DELETE 요청을 처리하는 useFetchMutation 사용
  const {
    mutation: deleteMutation,
    isLoading: isDeleting,
    isError: isDeleteError,
    isSuccess: isDeleteSuccess,
  } = useFetchMutation("DELETE", {
    url: ``, // 기본 경로
  });

  // 모달에서 "확인" 버튼 클릭 시 삭제 실행
  //undefined가 되는 것은 문제가 안된다. mutate 메서드에 데이터를 전달하지 않아도 useFetchMutation 내에서 postData를 이미 알고 있으므로, 삭제 요청이 제대로 처리
  // 모달에서 "확인" 버튼 클릭 시 삭제 실행
  const handleConfirmDelete = () => {
    if (isSelectedWords.length === 0) {
      console.error("No words selected for deletion.");
      return;
    }

    isSelectedWords.forEach((id) => {
      deleteMutation.mutate(
        { url: `/words/${id}` }, // 개별 ID URL 전달
        {
          onSuccess: () => {
            console.log(`Word with ID ${id} deleted successfully.`);
            // UI 업데이트는 성공 시 처리
            setSelectedWords((prev) => prev.filter((wordId) => wordId !== id));
          },
          onError: (error) => {
            console.error(`Error deleting word with ID ${id}:`, error);
          },
          // eslint-disable-next-line prettier/prettier
        }
      );
    });

    // 상태 초기화 및 UI 업데이트
    setSelectedWords([]);
    setDeleteMode(false);
    closeModal();
    // navigate("/VocabularyBook");
    window.location.reload();
  };

  const [isLoadingMessage, setLoadingMessage] = useState("");
  const [isErrorMessage, setErrorMessage] = useState("");
  const [isSuccessMessage, setSuccessMessage] = useState("");
  // const [isResponseData, setResponseData] = useState(null); // 응답 데이터를 저장할 상태

  useEffect(() => {
    // 삭제 요청 상태 점검
    if (isDeleting) {
      setLoadingMessage("Deleting selected words...");
      setErrorMessage("");
      setSuccessMessage("");
      console.log("Deleting...");
    } else if (isDeleteError) {
      setLoadingMessage("");
      setErrorMessage("Error occurred while deleting words.");
      setSuccessMessage("");
      console.log("Delete error:", isDeleteError);
    } else if (isDeleteSuccess) {
      setLoadingMessage("");
      setErrorMessage("");
      setSuccessMessage("Selected words deleted successfully!");
      // setResponseData(deleteMutation);
      console.log("Delete success:", isDeleteSuccess);
    }
  }, [
    isDeleting,
    isDeleteError,
    isDeleteSuccess,
    isLoadingMessage,
    isErrorMessage,
    isSuccessMessage,
  ]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative w-[clamp(0px,83.18%,1597px)]">
        {/* 뒷배경 */}
        <div className="absolute w-full top-[138px] left-[clamp(0px,2.13%,34px)] bottom-[-52px] z-[-1] bg-[#8f8f8f] pt-[73px] pb-[163px] rounded-[53px]" />
        {/* 콘텐츠 */}
        <div className="flex flex-col items-center bg-white pt-[73px] pb-[163px] rounded-[53px] shadow-[0_0_24px_4px_rgba(0,0,0,0.24)]">
          {/* 단어장 header */}
          <div className="flex w-[clamp(0px,74.51%,1190px)] justify-between">
            <div className="flex">
              <div className="--primary-flex-col normal w-[126px] h-[57px] mr-[19px] border-[1px] border-black border-solid rounded-[17px] bg-white --font-m shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                최신순▼
              </div>
              <div className="--primary-flex-col normal w-[126px] h-[57px] border-[1px] border-black border-solid rounded-[17px] bg-white --font-m shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                전체보기▼
              </div>
            </div>
            {/* 툴 */}
            <div className="flex gap-[25px]">
              {/* 삭제 버튼 */}
              <div
                className={`--primary-flex ${isDeleteMode ? "bg-black" : "bg-white"} w-[57px] h-[57px] border-[1px] border-black border-solid rounded-[14px] shadow-[0_3px_3px_rgba(0,0,0,0.25)]`}
                onClick={() => {
                  if (!isDeleteMode) {
                    setDeleteMode(true); // 삭제 모드 활성화
                    setHighLightMode(false);
                  } else if (isSelectedWords.length > 0) {
                    openModal(); // 선택된 단어가 있을 때 모달 열기
                  } else {
                    setDeleteMode(false); // 선택된 단어가 없으면 삭제 모드 비활성화
                  }
                }} // 삭제 모드 토글
              >
                <img
                  src={isDeleteMode ? trashCanIconWhite : trashCanIcon}
                  alt="Trash Can Icon"
                  className="w-[29px] h-[29px]"
                  onClick={(e) => {
                    e.stopPropagation(); // 부모의 onClick 이벤트와 중복 방지
                    // handleDeleteMode(); // 이미지 클릭 시에도 삭제 모드 동작
                    setDeleteMode(!isDeleteMode);
                    setHighLightMode(false);
                    if (isDeleteMode !== false) {
                      if (isSelectedWords.length > 0) {
                        // 선택된 단어가 있는 경우에만 모달 활성화
                        openModal();
                      }
                    }
                  }}
                />
              </div>
              {/* 하이라이트 버튼 */}
              <div
                className={`--primary-flex ${isHighLightMode ? "--status-bg-Color-01" : "--primary-bg-Color"} w-[57px] h-[57px] border-[1px] border-black border-solid rounded-[14px] shadow-[0_3px_3px_rgba(0,0,0,0.25)]`}
                onClick={() => {
                  setDeleteMode(false);
                  setHighLightMode(!isHighLightMode);
                }}
              >
                <img
                  src={isHighLightMode ? highlighterIconWhite : highlighterIcon}
                  alt="Highlighter Icon"
                  className="w-[40px] h-[40px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteMode(false);
                    setHighLightMode(!isHighLightMode);
                  }}
                />
              </div>
              {/* 생성 버튼 */}
              <div className="--primary-flex bg-black w-[58px] h-[57px] border-[1px] border-black border-solid rounded-[14px] shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                <img
                  src={spannerIconWhite}
                  alt="Spanner Icon"
                  className="w-[20px] h-[20px]"
                />
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
                    <span className="">재료 삭제하기</span>
                    <img src={spannerIconBlack} alt="" />
                  </div>
                  <div>
                    <img src={circleSingleIcon} alt="" />
                  </div>
                </div>
                <div className="w-[100%] px-[46px] mt-[30px] mb-[63px]">
                  <div className="w-[100%] py-[20px] px-[30px]">
                    정말 이 단어들을 삭제 하시겠습니까?
                  </div>
                </div>
                <div className="flex w-[100%] justify-between border-t border-black">
                  <div
                    onClick={() => {
                      closeModal();
                      setDeleteMode(true);
                    }}
                    className="flex w-[50%] h-[65.9px] pt-[10px] border-r border-black justify-center outline-none cursor-pointer"
                  >
                    취소
                  </div>
                  <div
                    onClick={() => {
                      // handleSubmit();
                      // navigate("/VocabularyBook");
                      // handleDeleteMode();
                      setDeleteMode(!isDeleteMode);
                      handleResetWords();
                      setDeleteMode(false);
                      handleConfirmDelete();
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
          {/* 전체 단어장 리스트 */}
          <VocabularyBookList
            isUpdateList={isUpdateList}
            isDeleteMode={isDeleteMode}
            isHighLightMode={isHighLightMode}
            selectedWordsForDelete={isDeleteMode ? isSelectedWords : []}
            selectedWordsForHighlight={isHighLightMode ? isSelectedWords : []} //
            handleSelectWordForDelete={(id) => handleSelectWord(id, "delete")}
            handleSelectWordForHighlight={(id) =>
              handleSelectWord(id, "highlight")
            } //
          />
          {/* 단어장 footer */}
          <div className="flex justify-center w-[clamp(0px,60.8%,971px)] h-[82px] gap-[95px] --Pretendard --semi-bold --font-l mt-[66px]">
            <div className="flex items-center justify-center w-full relative bg-white border-[0.9px] border-black border-solid rounded-[18px] shadow-[0_3.58px_3.58px_0_rgba(0,0,0,0.25)]">
              <div className="flex">전체 단어 숨김</div>
            </div>
            <div className="flex items-center justify-center w-full relative bg-white border-[0.9px] border-black border-solid rounded-[18px] shadow-[0_3.58px_3.58px_0_rgba(0,0,0,0.25)]">
              <div className="flex">전체 뜻 숨김</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyBook;
