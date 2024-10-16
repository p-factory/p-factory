import React from 'react';
import Template from '../../global/components/Template';
import LoginComponent from './Login.component';

const Login = () => {
  return (
    <div className="h-screen">
      <Template component={LoginComponent} />
    </div>
  );
};

export default Login;
