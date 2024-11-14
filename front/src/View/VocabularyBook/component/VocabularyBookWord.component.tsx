import React from 'react';
import pencilIcon from '../../../global/Img/pencilIcon.svg';
import pencilIconGrey from '../../../global/Img/pencilIconGrey.svg';

// props 타입 정의
interface VocabularyBookWordProps {
  wordLine?: number;
  wordHighlight?: boolean;
  wordDelete?: boolean;
}

const VocabularyBookWord: React.FC<VocabularyBookWordProps> = ({
  wordLine,
  wordHighlight,
  wordDelete,
}) => {
  return (
    <div
      className={`relative grid grid-cols-[1fr_auto_1fr] ${
        wordLine === 2 ? 'h-[188px]' : 'h-[76px]'
      }  border-[0.9px] border-solid rounded-[18px] ${wordDelete ? 'text-[#e8e8e8] border-[#e8e8e8]' : 'border-[#959595]'}`}
    >
      <div className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex w-3/4">
        <div className="w-full break-all">
          <span className={`${wordHighlight ? '--primary-bg-Color' : ''}`}>
            word
          </span>
        </div>
      </div>
      <div
        className={`h-full border-l-[0.9px] ${wordDelete ? 'border-[#e8e8e8]' : 'border-[#959595]'}`}
      />
      <div className="flex justify-center pt-[23px]">뜻</div>
      <img
        src={`${wordDelete ? pencilIconGrey : pencilIcon}`}
        alt="Pencil Icon"
        className="absolute top-[23px] right-[40px] w-[22px] h-[22px]"
      />
      {wordDelete && (
        <div className="absolute flex items-center justify-center w-full">
          <hr className="flex absolute w-4/5 top-[35px] border-black" />
        </div>
      )}
    </div>
  );
};

export default VocabularyBookWord;
