import React from 'react';
import Template from '../../global/components/Template.test';
import LoginIdComponent from './Login.id.component';
const LoginIn = () => {
  return (
    <div className="h-screen">
      <Template
        component={LoginIdComponent}
        // 전체 height
        height={'h-[clamp(0px,91.73%,1081px)]'}
        //  내부 height 85.73
        shadowHeight={'h-[clamp(0px,91.73%,1081px)]'}
      />
    </div>
  );
};

export default LoginIn;
