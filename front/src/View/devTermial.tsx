import React from 'react';

const DevTerminal = () => {
  return (
    <div>
      <h1>Dev Terminal Page</h1>
      <p>테스트를 위한 페이지 입니다.</p>
      <p className="text-xl font-bold font-JejuDoldam">
        제주돌담체 폰트 적용 Bold 24px
      </p>
      <p className="font-semibold text-l font-JejuDoldam">
        제주돌담체 폰트 적용 SemiBold 22px
      </p>
      <p className="font-medium text-m font-JejuDoldam">
        제주돌담체 폰트 적용 Medium 20px
      </p>
      <p className="font-normal text-s font-JejuDoldam">
        제주돌담체 폰트 적용 Regular 18px
      </p>
      <p className="text-xs font-light font-JejuDoldam">
        제주돌담체 폰트 적용 Light 16px
      </p>
      <hr />
      <p className="text-xl font-bold text-primaryColor font-Pretendard">
        Pretendard 폰트 적용 Bold 24px (PrimaryColor)
      </p>
      <p className="font-semibold text-subColor text-l font-Pretendard">
        Pretendard 폰트 적용 SemiBold 22px (SubColor)
      </p>
      <p className="font-medium text-errorColor text-m font-Pretendard">
        Pretendard 폰트 적용 Medium 20px (errorColor)
      </p>
      <p className="font-normal text-successColor text-s font-Pretendard">
        Pretendard 폰트 적용 Regular 18px (sucessColor)
      </p>
      <p className="text-xs font-light text-safetyColor font-Pretendard">
        Pretendard 폰트 적용 Light 16px (safetyColor)
      </p>
      <p className="text-xs font-light text-neutralColor font-Pretendard">
        Pretendard 폰트 적용 Light 16px (neutralColor)
      </p>
    </div>
  );
};

export default DevTerminal;
