import React from 'react';

const DevStylesPreview = () => {
  return (
    <div className="--primary-flex-col">
      <h1>Dev Tailwind Preview</h1>
      <div>tailwind 적용 확인을 위한 페이지 입니다.</div>
      <div className="--font-xl bold JejuDoldam --flex">
        제주돌담체 폰트 적용 Bold 24px
      </div>
      <div className="--font-l semibold JejuDoldam">
        제주돌담체 폰트 적용 SemiBold 22px
      </div>
      <div className="--font-m medium JejuDoldam">
        제주돌담체 폰트 적용 Medium 20px
      </div>
      <div className="--font-s normal JejuDoldam">
        제주돌담체 폰트 적용 Regular 18px
      </div>
      <div className="--font-xs light JejuDoldam">
        제주돌담체 폰트 적용 Light 16px
      </div>
      <hr />
      <div className="--font-xl bold text-primaryColor Pretendard">
        Pretendard 폰트 적용 Bold 24px (PrimaryColor)
      </div>
      <div className="text-subColor --font-l semibold Pretendard">
        Pretendard 폰트 적용 SemiBold 22px (SubColor)
      </div>
      <div className="text-errorColor --font-m medium Pretendard">
        Pretendard 폰트 적용 Medium 20px (errorColor)
      </div>
      <div className="text-successColor --font-s normal Pretendard">
        Pretendard 폰트 적용 Regular 18px (sucessColor)
      </div>
      <div className="--font-xs light text-safetyColor Pretendard">
        Pretendard 폰트 적용 Light 16px (safetyColor)
      </div>
      <div className="--font-xs light text-neutralColor Pretendard">
        Pretendard 폰트 적용 Light 16px (neutralColor)
      </div>
    </div>
  );
};

export default DevStylesPreview;
