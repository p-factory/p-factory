import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM에서 __dirname을 설정하는 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // db.json 파일 경로
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// 커스텀 라우트 예제
server.post('/api/user/signup', (req, res) => {
  const users = router.db.get('users'); // db.json의 'users' 테이블
  const user = req.body;

  // 원하는 로직을 추가할 수 있습니다 (예: 중복 사용자 체크)
  const existingUser = users.find({ username: user.username }).value();
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  users.push(user).write();
  res.status(201).json(user);
});

// 기존 json-server 라우터 사용
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(
    `JSON Server with custom routes is running on http://localhost:${PORT}`,
  );
});
