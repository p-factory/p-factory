import React from 'react';
import { Link } from 'react-router-dom';

const DevTerminal = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Manual">Manual</Link>
      </div>
      <div>
        <Link to="/MyFactory">MyFactory</Link>
      </div>
      <div>
        <Link to="/Login">Login</Link>
      </div>
      <div>
        <Link to="/LoginIn">LoginIn</Link>
      </div>
      <div>
        <Link to="/SignUpId">SignUpId</Link>
      </div>
      <div>
        <Link to="/SignUpNickName">SignUpNickName</Link>
      </div>
      <div>
        <Link to="/SignUpPassWord">SignUpPassWord</Link>
      </div>
      <div>
        <Link to="/SignUp">SignUp</Link>
      </div>
      <div>
        <Link to="/VocabularyBook">VocabularyBook</Link>
      </div>
      <div>
        <Link to="/DevWH">DevWH</Link>
      </div>
      <div>
        <Link to="/DevStylesPreview">DevStylesPreview</Link>
      </div>
      <div>
        <Link to="/DevPosition/Login">/DevPosition/Login</Link>
      </div>
      <div>
        <Link to="/DevPosition/Viewport">/DevPosition/Viewport</Link>
      </div>
      <div>
        <Link to="/DevPosition/Px">/DevPosition/Px</Link>
      </div>
    </div>
  );
};

export default DevTerminal;
