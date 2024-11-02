import React from 'react';
import Template from '../../global/components/Template.test';
import SignUpComponent from './SignUp.component';

const SignUp = () => {
  return (
    <div className="h-screen">
      <Template
        component={SignUpComponent}
        height={'h-[clamp(0px,100%,960px)]'}
        backgroundHeight={'h-[clamp(0px,100%,960px)]'}
      />
    </div>
  );
};

export default SignUp;
