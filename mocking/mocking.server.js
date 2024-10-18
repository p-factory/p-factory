import jsonServer from 'json-server';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// ESM 형식에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// JSON 파일 경로 설정
const testDbPath = join(__dirname, 'db', 'db.test.json');
const nameDbPath = join(__dirname, 'db', 'db.name.json');

// JSON Server 설정
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(middlewares);

// 홈 페이지에 링크 추가
server.get('/link', (req, res) => {
  res.send(`
    <h1>API Links</h1>
    <ul>
      <li><a href="/api/test">Test API</a></li>
      <li><a href="/api/name">Name API</a></li>
    </ul>
  `);
});

// 각각의 JSON 파일을 라우터로 설정
server.get('/api/test', (req, res) => {
  fs.readFile(testDbPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

server.get('/api/name', (req, res) => {
  fs.readFile(nameDbPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// 서버 실행
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
  console.log(`Test API: http://localhost:${PORT}/api/test`);
  console.log(`Name API: http://localhost:${PORT}/api/name`);
});
