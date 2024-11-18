import React from 'react';
import Template from '../../global/components/Template.test';
import SignUpNickNameComponent from './SignUp.nickname.component';
// import LoginIdComponent from './Login.id.component';
const SignUpNickName = () => {
  return (
    <div className="h-screen">
      <Template
        height={'h-[clamp(0px,91.73%,1081px)]'}
        shadowHeight={'h-[clamp(0px,91.73%,1081px)]'}
        component={SignUpNickNameComponent}
      />
    </div>
  );
};

export default SignUpNickName;
