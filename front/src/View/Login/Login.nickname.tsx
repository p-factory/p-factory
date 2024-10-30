import React from 'react';
import Template from '../../global/components/Template';
import LoginNickNameComponent from './Login.nickname.component';
// import LoginIdComponent from './Login.id.component';
const LoginNickName = () => {
  return (
    <div className="h-screen">
      <Template
        height={'h-[clamp(0px,100%,960px)]'}
        backgroundHeight={'h-[clamp(0px,100%,960px)]'}
        component={LoginNickNameComponent}
      />
    </div>
  );
};

export default LoginNickName;
