import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // QueryClient 관련 추가
import MainPage from './View/Main/MainPage';
import Manual from './View/Main/ManualPage';
import VocabularyBookPage from './View/VocabularyBook/VocabularyBookPage';
import DevStylesPreview from './View/DEV/DevStylesPreview';
import DevDesignSystem from './View/DEV/DevDesignSystem';
import DevDesignSystemWH from './View/DEV/DevDesignSystem-wh.test';
import DevPositionLogin from './View/DEV/Position/DevPositionLogin.test';
import DevPositionViewport from './View/DEV/Position/DevPositionViewport.test';
import DevPositionPx from './View/DEV/Position/DevPositionPx.test';
import Login from './View/Login/Login';
import LoginIn from './View/Login/Login.in';
import SignUp from './View/Login/SignUp';
import DevFetch from './View/DEV/DevFetch';

// queryClient 생성
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* QueryClientProvider로 전체 앱 감싸기 */}
      <Router>
        <Routes>
          {/* Main */}
          <Route path="/" element={<MainPage />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LoginIn" element={<LoginIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dev" element={<DevDesignSystem />} />
          <Route path="/DevWH" element={<DevDesignSystemWH />} />
          <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
          {/* DEVPosition */}
          <Route path="/DevPosition/Login" element={<DevPositionLogin />} />
          <Route
            path="/DevPosition/Viewport"
            element={<DevPositionViewport />}
          />
          <Route path="/DevPosition/Px" element={<DevPositionPx />} />
          <Route path="/DevFetch" element={<DevFetch />} />
          {/* VocabularyBook */}
          <Route path="/VocabularyBook" element={<VocabularyBookPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
