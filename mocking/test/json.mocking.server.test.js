import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
// import createRoutes from './Routes/createRoutes.js';
// import signupHandler from './function/signup.handler.js';
// import getNameHandler from './function/getName.handler.test.js';
// import getUserHandler from './function/getUser.handler.test copy.js';
// ESM에서 __dirname을 설정하는 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

// JSON 파일 경로 설정
const middlewares = jsonServer.defaults(); //json-server를 기준으로 설정
const routes = jsonServer.router(path.join(__dirname, 'db', 'db.json'));
// const test = jsonServer.router(path.join(__dirname, 'db', 'db.user.json'));
const rewriter = jsonServer.rewriter(path.join(__dirname, 'routes.json')); // routes.json을 로드

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(rewriter); // 라우트 재작성 미들웨어 추가
server.use(routes);

// 커스텀 라우트 예제
// createRoutes(server, 'get', '/api/user/signup', getUserHandler(test));
// createRoutes(server, 'get', '/api/test/names', getNameHandler(routes));

/** Custom Routing */
//json-server를 기준으로 가져오는 코드임 즉, json-server를 읽는 코드
server.get('/api', (req, res) => {
  res.send(routes.get('api').value());
});

// POST 요청을 처리하는 커스텀 라우트
server.post('/api/user/signup', (req, res) => {
  const users = routes.db.get('users');
  const user = req.body;

  // 중복 사용자 체크
  const existingUser = users.find({ username: user.username }).value(); // user.username으로 수정
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  users.push(user).write(); // 사용자 추가
  res.status(201).json(user);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(
    `JSON Server with custom routes is running on http://localhost:${PORT}`,
  );
});
