import React, { useEffect, useState } from "react";
import VocabularyBookWord from "./VocabularyBookWord.component";
import {
  useFetchQuery,
  // useFetchMutation,
} from "../../../global/Hooks/uesFetchSingleAPI";

interface Word {
  id: number;
  word: string;
  meaning: string;
}

interface VocabularyBookListProps {
  isUpdateList: boolean; // 단어장 리스트 갱신 여부
  isDeleteMode: boolean; // 삭제 모드 활성화 여부
  isSelectedWords: number[]; // 선택된 단어 ID 배열
  handleSelectWord: (id: number) => void; // 단어 선택/해제 핸들러
}

// 전체 단어장 리스트
// props의 타입을 인터페이스로 빼지 않은 이유는?
const VocabularyBookList = ({
  isUpdateList,
  isDeleteMode,
  isSelectedWords,
  handleSelectWord,
}: VocabularyBookListProps) => {
  // 서버에서 단어 리스트 가져오기
  const {
    data: words,
    isSuccess,
    isLoading,
    isError,
    refetch,
  } = useFetchQuery({ url: "/words" });

  const isWordDeleted = (id: number): boolean => {
    return isSelectedWords.includes(id); // 항상 boolean 반환
  };

  const [isLoadingMessage, setLoadingMessage] = useState("");
  const [isErrorMessage, setErrorMessage] = useState("");
  const [isSuccessMessage, setSuccessMessage] = useState("");
  const [isResponseData, setResponseData] = useState(null); // 응답 데이터를 저장할 상태

  useEffect(() => {
    // 데이터 요청 상태 점검
    if (isLoading) {
      setLoadingMessage("Fetching data...");
      setErrorMessage("");
      setSuccessMessage("");
      console.log(isLoadingMessage);
    } else if (isError) {
      setLoadingMessage("");
      setErrorMessage("Error occurred while fetching data.");
      setSuccessMessage("");
      console.log(isErrorMessage);
    } else if (isSuccess) {
      setLoadingMessage("");
      setErrorMessage("");
      setSuccessMessage("Data fetched successfully!");
      setResponseData(words); // 응답 데이터를 상태로 설정
      console.log("Response data:", isResponseData, words); // 응답 데이터를 콘솔에 출력
      console.log(isSuccessMessage);
    }
  }, [
    isLoading,
    isError,
    isSuccess,
    // isDeleting,
    // isDeleteError,
    // isDeleteSuccess,
    words,
    isLoadingMessage,
  ]);

  useEffect(() => {
    if (isUpdateList) {
      refetch(); // React Query의 refetch 호출
    }
  }, [isUpdateList, refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !words) return <div>Error occurred while fetching words.</div>;

  // 단어 리스트를 왼쪽과 오른쪽으로 나누기
  const leftWords = words.slice(0, 10); // 첫 10개 단어
  const rightWords = words.slice(10, 20); // 다음 10개 단어

  return (
    <div className="pt-[100px] w-[clamp(0px,74.51%,1190px)]">
      <div className="flex justify-between gap-[clamp(0px,3.78%,45px)]">
        {/* 왼쪽 단어장 */}
        <div className="flex flex-col w-full gap-[38px]">
          {leftWords?.map((word: Word, index: number) => (
            <VocabularyBookWord
              // key={`left-${index}`}
              key={`${index}`}
              id={word.id}
              word={word.word}
              meaning={word.meaning}
              wordLine={1}
              wordHighlight={false}
              isDeleteMode={isDeleteMode}
              wordDelete={isDeleteMode && isWordDeleted(word.id)}
              onToggleSelect={() => handleSelectWord(word.id)} // 선택/해제 핸들러
            />
          ))}
        </div>
        {/* 오른쪽 단어장 */}
        <div className="flex flex-col w-full gap-[38px]">
          {rightWords.map((word: Word, index: number) => (
            <VocabularyBookWord
              // key={`right-${index}`}
              key={`${index}`}
              id={word.id}
              word={word.word}
              meaning={word.meaning}
              wordLine={1}
              wordHighlight={false}
              isDeleteMode={isDeleteMode}
              wordDelete={isDeleteMode && isWordDeleted(word.id)}
              onToggleSelect={() => handleSelectWord(word.id)} // 선택/해제 핸들러
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VocabularyBookList;
