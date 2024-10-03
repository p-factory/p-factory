import React from 'react';

const DevTerminal = () => {
  return (
    <div>
      <h1>Dev Tailwind Preview</h1>
      <div>tailwind 적용 확인을 위한 페이지 입니다.</div>
      <div className="font-bold font-xl JejuDoldam">
        제주돌담체 폰트 적용 Bold 24px
      </div>
      <div className="font-semibold font-l JejuDoldam">
        제주돌담체 폰트 적용 SemiBold 22px
      </div>
      <div className="font-medium font-m JejuDoldam">
        제주돌담체 폰트 적용 Medium 20px
      </div>
      <div className="font-normal font-s JejuDoldam">
        제주돌담체 폰트 적용 Regular 18px
      </div>
      <div className="font-light font-xs JejuDoldam">
        제주돌담체 폰트 적용 Light 16px
      </div>
      <hr />
      <div className="font-bold font-xl text-primaryColor Pretendard">
        Pretendard 폰트 적용 Bold 24px (PrimaryColor)
      </div>
      <div className="font-semibold text-subColor font-l Pretendard">
        Pretendard 폰트 적용 SemiBold 22px (SubColor)
      </div>
      <div className="font-medium text-errorColor font-m Pretendard">
        Pretendard 폰트 적용 Medium 20px (errorColor)
      </div>
      <div className="font-normal text-successColor font-s Pretendard">
        Pretendard 폰트 적용 Regular 18px (sucessColor)
      </div>
      <div className="font-light font-xs text-safetyColor Pretendard">
        Pretendard 폰트 적용 Light 16px (safetyColor)
      </div>
      <div className="font-light font-xs text-neutralColor Pretendard">
        Pretendard 폰트 적용 Light 16px (neutralColor)
      </div>
    </div>
  );
};

export default DevTerminal;
