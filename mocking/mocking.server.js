import jsonServer from 'json-server';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// import fs from 'fs';
import { getHyperLink } from './Routes/HyperLink.js';
import { createRoute } from './Routes/createRoutes.js';

// ESM 형식에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// JSON 파일 경로 설정
const testDbPath = join(__dirname, 'db', 'db.test.json');
const nameDbPath = join(__dirname, 'db', 'db.name.json');
const userDbPath = join(__dirname, 'db', 'db.user.json');

// JSON Server 설정
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(middlewares);

// 홈 페이지에 링크 추가
server.get('/link', (req, res) => {
  res.send(getHyperLink());
});

// 각각의 JSON 파일을 라우터로 설정
createRoute(server, '/api/test', testDbPath);   // GET 처리
createRoute(server, '/api/name', nameDbPath);   // GET 처리
createRoute(server, '/api/user/signup', userDbPath);  // GET 및 POST 처리
createRoute(server, '/api/user/login', userDbPath); // GET 및 POST 처리

// 서버 실행
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
  console.log(`Test API: http://localhost:${PORT}/api/test`);
  console.log(`Name API: http://localhost:${PORT}/api/name`);
  console.log(`SignUpUSers API API: http://localhost:${PORT}/api/user/signup`);
});
