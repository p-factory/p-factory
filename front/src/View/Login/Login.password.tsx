import React from 'react';
import Template from '../../global/components/Template.test';
import LoginPassWordComponent from './Login.password.component';
const LoginPassWord = () => {
  return (
    <div className="h-screen">
      <Template
        height={'h-[clamp(0px,100%,1149px)]'}
        shadowHeight={'h-[clamp(0px,100%,1149px)]'}
        component={LoginPassWordComponent}
      />
    </div>
  );
};

export default LoginPassWord;
