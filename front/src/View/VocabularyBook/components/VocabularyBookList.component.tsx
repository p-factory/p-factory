import React from 'react';
import VocabularyBookWord from './VocabularyBookWord.component';
import { useFetchQuery } from '../../../global/Hooks/uesFetchSingleAPI';

interface Word {
  wordId: number;
  word: string;
}

// 전체 단어장 리스트
const VocabularyBookList = () => {
  // 서버에서 단어 리스트 가져오기
  const {
    data: words,
    isLoading,
    isError,
  } = useFetchQuery({ url: '/vocabularyBook/words' });

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
              key={`left-${index}`}
              word={word.word}
              wordLine={1}
              wordHighlight={false}
              wordDelete={false}
            />
          ))}
        </div>
        {/* 오른쪽 단어장 */}
        <div className="flex flex-col w-full gap-[38px]">
          {rightWords.map((word: Word, index: number) => (
            <VocabularyBookWord
              key={`right-${index}`}
              word={word.word}
              wordLine={1}
              wordHighlight={false}
              wordDelete={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VocabularyBookList;
