import React, { useEffect, useState, useRef } from "react";
import pencilIcon from "../../../global/Img/pencilIcon.svg";
import pencilIconGrey from "../../../global/Img/pencilIconGrey.svg";
import { useFetchMutation } from "../../../global/Hooks/uesFetchSingleAPI";

interface UpdateWord {
  id: number;
  word: string;
  meaning: string;
}

// props 타입 정의
interface VocabularyBookWordProps {
  id: number;
  word: string;
  meaning: string;
  wordLine?: number;
  wordHighlight?: boolean;
  wordHidden?: boolean;
  isDeleteMode?: boolean;
  wordDelete?: boolean;
  onToggleSelect: () => void; // 단어 선택/해제 핸들러
}

const VocabularyBookWord = ({
  id,
  word: initialWord,
  meaning: initialMeaning,
  wordLine,
  wordHighlight,
  // wordHidden,
  isDeleteMode,
  wordDelete,
  onToggleSelect,
}: VocabularyBookWordProps) => {
  const [word] = useState(initialWord); // 상태 변수 'word' 초기화
  const [meaning] = useState(initialMeaning); // 상태 변수 'meaning' 초기화
  const [isEditable, setIsEditable] = useState(false); // 상태로 editable 여부 관리
  const [isCheckAble, setIsCheckAble] = useState(false); // checkbox 상태 관리
  const containerRef = useRef<HTMLDivElement>(null); // div 영역을 참조
  const wordRef = useRef<HTMLDivElement>(null);
  const meaningRef = useRef<HTMLDivElement>(null);
  // PUT 요청을 위한 mutation
  const { mutation: updateWordMutation } = useFetchMutation("PUT", {
    url: `/words/${id}`, // API 경로
  });

  const handleEditable = () => {
    setIsEditable(true); // 클릭 시 editable 활성화
  };

  const toggleCheck = () => {
    setIsCheckAble((prev) => !prev); // checkbox 클릭 시 상태 토글
    setIsEditable(false); // checkbox 클릭 시 editable 비활성화
  };

  // 정규 문자 방식으로 완벽하게 공백을 제거하는 코드 trim으로는 인지하지 못하는 여백 제거
  const normalizeText = (text: string): string => {
    return text.replace(/\s+/g, " ").trim(); // 여러 공백을 하나로 줄이고, 양 끝 공백 제거
  };

  const handlePutData = async () => {
    const updatedWord =
      normalizeText(wordRef.current?.innerText || "") || initialWord;
    const updatedMeaning =
      normalizeText(meaningRef.current?.innerText || "") || initialMeaning;

    // 변경된 경우만 요청 전송
    if (updatedWord === initialWord && updatedMeaning === initialMeaning) {
      console.log("변경사항 없음, PUT 요청 생략");
      setIsEditable(false); // 편집 모드 비활성화
      return; // 변경사항 없으면 종료
    }

    const postData: UpdateWord = {
      id,
      word: updatedWord,
      meaning: updatedMeaning,
    };

    try {
      await updateWordMutation.mutateAsync({ postData });
      console.log("단어 수정 성공:", postData);
    } catch (error) {
      console.error("단어 수정 실패:", error);
    } finally {
      setIsEditable(false); // 편집 모드 비활성화
    }
  };

  const handleUnEditable = () => {
    setIsEditable(false); // 단순히 편집 모드 비활성화
    handlePutData();
  };

  //외부클릭 방지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleUnEditable(); // 클릭이 div 외부에서 발생하면 비활성화
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // 클릭 이벤트 등록
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, [handleUnEditable]); // handleUnEditable이 변경될 경우 효과 다시 적용

  return (
    <div
      ref={containerRef} // div 영역 참조 연결
      className={`relative grid grid-cols-[1fr_auto_1fr] ${
        wordLine === 2 ? "h-[188px]" : "h-[76px]"
      }  ${isDeleteMode ? "border-[2px] border-[#000000]" : "border-[0.9px]"} border-solid rounded-[18px] ${
        wordDelete
          ? "bg-black text-white" // 삭제 상태일 때 배경 검정, 글자 흰색
          : isEditable
            ? "border-[--primary-color] border-[2px]"
            : isEditable
              ? "text-[#e8e8e8] border-[#e8e8e8]"
              : "border-[#959595]"
      }`}
      onClick={onToggleSelect} // 클릭 시 부모 상태 업데이트
    >
      <div
        // pl-[clamp(0px,28.97%,84px)] pt-[23px]
        // contentEditable={isEditable} // 상태에 따라 contentEditable 속성 변경
        className="flex items-center justify-center align-middle"
        // suppressContentEditableWarnings는 임시 방편 원인 분석이 필요함
        suppressContentEditableWarning // React 경고 제거
      >
        <div className="flex items-center justify-center w-3/4 break-all align-middle ">
          {isEditable && (
            <input
              type="checkbox"
              className="flex items-center justify-center mr-2 align-middle" // 체크박스와 텍스트 간 여백
              aria-label="Select Word Checkbox" // 접근성을 위한 라벨
              checked={isCheckAble} // checkbox 상태 바인딩
              onChange={toggleCheck} // 상태 토글 함수 연결
            />
          )}
          <div
            ref={wordRef}
            contentEditable={isEditable} // 상태에 따라 contentEditable 속성 변경
            suppressContentEditableWarning
            className={`flex items-center justify-center align-middle ${wordHighlight ? "--primary-bg-Color" : ""} ${isCheckAble ? "line-through" : ""}`}
            // onInput={(e) => setWord((e.target as HTMLElement).innerText)} // word 상태 업데이트
            onBlur={handleUnEditable} // 포커스를 잃으면 수정 완료
          >
            {word ? word : "단어를 적어주세요."}
          </div>
        </div>
      </div>
      {/* 세로선 */}
      <div
        className={`h-full border-l-[0.9px] ${
          wordDelete ? "border-[#e8e8e8]" : "border-[#959595]"
        }`}
      />
      <div
        className="flex items-center justify-center align-middle"
        // contentEditable={isEditable} // 상태에 따라 contentEditable 속성 변경
        suppressContentEditableWarning // React 경고 제거
      >
        <div
          ref={meaningRef}
          contentEditable={isEditable} // 상태에 따라 contentEditable 속성 변경
          suppressContentEditableWarning
          className={`flex items-center justify-center align-middle w-[50%] ${isCheckAble ? "line-through" : ""}`}
          // onInput={() => handleInput(meaningRef, setMeaning)} // meaning 상태 업데이트
          onBlur={handleUnEditable} // 포커스를 잃으면 수정 완료
        >
          {meaning ? meaning : "meaning?"}
        </div>
        <img
          src={`${wordDelete ? pencilIconGrey : pencilIcon}`}
          alt="Pencil Icon"
          className="flex items-center justify-center align-middle cursor-pointer pl-[5px]"
          onClick={() => (isEditable ? handleUnEditable() : handleEditable())}
        />
      </div>
    </div>
  );
};

export default VocabularyBookWord;
