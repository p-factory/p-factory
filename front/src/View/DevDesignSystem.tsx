import React from 'react';
// import './test/style.test.scss';
import DevTool from '../DEV/Dev';

const DEV = DevTool.ToolButton;
const DevDesignSystem = () => {
  return (
    <div
      style={{
        width: '100%',
        // maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        // overflowX: 'auto',
        backgroundColor: 'aqua',
        alignItems: 'center',
      }}
    >
      <div>
        <DEV />
      </div>
      <div>test</div>
      <div
        style={{
          // width: '100%', // 화면이 작아지면 100%로 확장
          // width: '80vw', // 전체 화면의 80% 너비로 설정
          width: 'clamp(320px, 83.18%, 1597px)', // 최소 320px, 선호 83.18vw, 최대 1597px
          display: 'flex',
          justifyContent: 'center',
          // maxWidth: '1592px',
          backgroundColor: 'gray',
        }}
      >
        sass width 320px, 83.18%, 1597px
      </div>
    </div>
  );
};

export default DevDesignSystem;
