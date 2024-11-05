import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import createRoutes from './Routes/createRoutes.js';
import { postSignUpHandler } from './function/PostHandler.js';
import { getTestNameHandler } from './function/GetHandler.js';
// ESM에서 __dirname을 설정하는 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

// JSON 파일 경로 설정

const router = jsonServer.router(path.join(__dirname, 'db', 'db.json')); // db.json 파일 경로
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(path.join(__dirname, 'routes.json'));

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(rewriter);

// 커스텀 라우트

createRoutes(server, 'post', '/api/user/signup', postSignUpHandler(router));
createRoutes(server, 'get', '/api/test/name', getTestNameHandler(router));

// 기존 json-server 라우터 사용
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(
    `JSON Server with custom routes is running on http://localhost:${PORT}`,
  );
});
