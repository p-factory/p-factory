import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getHyperLink } from './Routes/HyperLink.js'; // 홈 링크 HTML 반환
import { createRoute } from './Routes/createRoutes.js'; // GET 및 POST 처리 로직

// ESM 형식에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON 파일 경로 설정
const testDbPath = path.join(__dirname, 'db', 'db.test.json');
const nameDbPath = path.join(__dirname, 'db', 'db.name.json');
const userDbPath = path.join(__dirname, 'db', 'db.user.json');

// Express 설정
const app = express();
app.use(express.json()); // 요청 body를 JSON으로 파싱하는 미들웨어

// 홈 페이지에 링크 추가
app.get('/link', (req, res) => {
  res.send(getHyperLink());
});

// 각각의 JSON 파일을 라우터로 설정
createRoute(app, '/api/test', testDbPath);   // GET 처리
createRoute(app, '/api/name', nameDbPath);   // GET 처리
createRoute(app, '/api/user/signup', userDbPath);  // 회원가입 처리
createRoute(app, '/api/user/login', userDbPath);   // 로그인 처리

// 서버 실행
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Express Server is running on http://localhost:${PORT}`);
  console.log(`Test API: http://localhost:${PORT}/api/test`);
  console.log(`Name API: http://localhost:${PORT}/api/name`);
  console.log(`SignUpUSers API: http://localhost:${PORT}/api/user/signup`);
});
