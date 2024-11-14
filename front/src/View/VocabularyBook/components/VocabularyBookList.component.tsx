import React from 'react';
import VocabularyBookWord from './VocabularyBookWord.component';

// 전체 단어장 리스트
const VocabularyBookList = () => {
  return (
    <div className="pt-[100px] w-[clamp(0px,74.51%,1190px)]">
      <div className="flex justify-between gap-[clamp(0px,3.78%,45px)]">
        {/* 왼쪽 단어장 */}
        <div className="flex flex-col w-full gap-[38px]">
          {/* 단어 1칸 하이라이트 */}
          <VocabularyBookWord wordHighlight={true} />
          {/* 단어 2칸 하이라이트 */}
          <VocabularyBookWord wordLine={2} wordHighlight={true} />
        </div>
        {/* 오른쪽 단어장 */}
        <div className="flex flex-col w-full gap-[38px]">
          {/* 단어 1칸 삭제 */}
          <VocabularyBookWord wordDelete={true} />
          {/* 단어 1칸 */}
          <VocabularyBookWord />
          {/* 단어 1칸 */}
          <VocabularyBookWord />
          {/* 단어 2칸 삭제 */}
          <VocabularyBookWord wordLine={2} wordDelete={true} />
        </div>
      </div>
    </div>
  );
};

export default VocabularyBookList;
