import React from 'react';
import Template from '../../global/components/Template.test';
import LoginIdComponent from './Login.id.component';
const LoginIn = () => {
  return (
    <div className="h-screen">
      <Template
        component={LoginIdComponent}
        height={'h-[clamp(0px,100%,960px)]'}
        backgroundHeight={'h-[clamp(0px,100%,960px)]'}
      />
    </div>
  );
};

export default LoginIn;
