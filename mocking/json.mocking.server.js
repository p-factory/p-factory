import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import { mergeJSONLoader } from './db/mergeJSONLoader.js';
import createRoutes from './Routes/createRoutes.js';
import { SignUpHandler, LoginHandler, addWordHandler } from './API/PostHandler.js';
import { getTestNameHandler, getWordListHandler } from './API/GetHandler.js';
// ESM에서 __dirname을 설정하는 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

// const router = jsonServer.router(path.join(__dirname, 'db', 'db.json')); // db.json 파일 경로
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(path.join(__dirname, 'routes.json'));

// JSON 파일 경로 설정
// 결론적으로 post를 위한 path만 설정
const userPath = path.join(__dirname, 'db', 'db.users.json');
const wordPath = path.join(__dirname, 'db', 'db.words.json');
const testPath = path.join(__dirname, 'db', 'db.test.name.json');

// 병합되어 있는 최종 코드
const dbFilePaths = [userPath, testPath, wordPath];

// 병합된 데이터로 JSON 파일에 저장
const mergedData = mergeJSONLoader(dbFilePaths);

// json파일의 router 설정
// 병합된 데이터로 json-server 라우터 생성
const router = jsonServer.router(mergedData);
// post를 위한 라우터 생성
const userRouter = jsonServer.router(userPath);
// const testRouter = jsonServer.router(testPath);
const wordRouter = jsonServer.router(wordPath);

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(rewriter);

// 커스텀 라우트
createRoutes(server, 'post', '/api/user/signup', SignUpHandler(userRouter));
createRoutes(server, 'post', '/api/user/login', LoginHandler(userRouter));
createRoutes(server, 'post', '/api/vocabularyBook/words', addWordHandler(wordRouter));
createRoutes(server, 'get', '/api/test/name', getTestNameHandler(router));
createRoutes(server, 'get', '/api/vocabularyBook/words', getWordListHandler(wordRouter));

// 기존 json-server 라우터 사용
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(
    `JSON Server with custom routes is running on http://localhost:${PORT}`,
  );
});
