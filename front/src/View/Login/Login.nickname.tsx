import React from 'react';
import Template from '../../global/components/Template.test';
import LoginNickNameComponent from './Login.nickname.component';
// import LoginIdComponent from './Login.id.component';
const LoginNickName = () => {
  return (
    <div className="h-screen">
      <Template
        height={'h-[clamp(0px,91.73%,1081px)]'}
        shadowHeight={'h-[clamp(0px,91.73%,1081px)]'}
        component={LoginNickNameComponent}
      />
    </div>
  );
};

export default LoginNickName;
