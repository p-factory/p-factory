import path from 'path';
import { fileURLToPath } from 'url';
import {
  mergeJSONLoader,
  saveMergedDataToFile,
} from '../db/mergeJSONLoader.js';
import createToken from '../function/createToken.js';

// __filename과 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SignUpHandler = (router) => (req, res) => {
  const users = router.db.get('users'); // db.json의 'users' 테이블
  const user = req.body;

  // 유효성 검사: 사용자 이름과 비밀번호 필수 입력
  if (!user.username || !user.password) {
    return res
      .status(400)
      .json({ error: 'Username and password are required' });
  }

  // 중복 검사: 사용자 이름과 비밀번호
  const existingUser = users
    .find({ username: user.username, password: user.password })
    .value();

  // username과 password 필수 검사
  const existingUsername = users.find({ username: user.username }).value();
  const existingPassword = users.find({ password: user.password }).value();

  if (existingUsername && existingPassword && existingUser) {
    return res
      .status(400)
      .json({ error: 'Username and password are already in use' });
  } else if (existingUsername) {
    return res.status(400).json({ error: 'Username is already in use' });
  } else if (existingPassword) {
    return res.status(400).json({ error: 'Password is already in use' });
  }

  try {
    // ID 자동 생성 (0부터 시작)
    const lastUser = users.sortBy('id').last().value();
    const newId = lastUser ? lastUser.id + 1 : 0;

    // 새로운 사용자 정보에 ID 추가
    const newUser = { id: newId, ...user };
    users.push(newUser).write();

    // db.json 파일에 저장
    const dbFilePath = path.join(__dirname, '..', 'db', 'db.users.json');
    const currentData = router.db.getState(); // 현재 데이터 상태를 가져옵니다.
    saveMergedDataToFile(currentData, dbFilePath); // 현재 데이터를 db.users.json에 저장합니다.

    // 병합된 데이터 저장
    const mergedDataFilePath = path.join(
      __dirname,
      '..',
      'db',
      'mergeData.json',
    );
    const mergedData = mergeJSONLoader([dbFilePath]); // db.users.json 파일에서 데이터를 병합합니다.
    saveMergedDataToFile(mergedData, mergedDataFilePath); // 병합된 데이터를 mergeData.json에 저장합니다.

    res
      .status(200)
      .json({ message: 'Welcome, proty!, Successful SignUp', newUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'An error occurred while adding the user.' });
  }
};

const LoginHandler = (router) => (req, res) => {
  const { username, password } = req.body;

  // 유효성 검사: 사용자 이름과 비밀번호 필수 입력
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: 'Username and password are required' });
  }

  // 사용자 검증: 일치하는 사용자가 있는지 확인
  const user = router.db.get('users').find({ username, password }).value();

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // 로그인 성공 시 사용자 정보 반환 (여기서는 비밀번호를 제외하고 반환)
  const { password: _, ...userWithoutPassword } = user; // 비밀번호를 제외한 사용자 정보
  const TOKEN = createToken(user);

  res
    .status(200)
    .json({ message: 'Login successful', user: userWithoutPassword, TOKEN });
};

const addWordHandler = (router) => (req, res) => {
  const words = router.db.get('words');
  const word = req.body;

  // 유효성 검사: 단어 필수 입력
  if (!word) {
    return res
      .status(400)
      .json({ error: 'Word is required' });
  }

  // 단어 중복 검사: 해당 단어가 이미 존재하는지 확인
  const existingWord = words
    .find({ word: word.word })
    .value();

  if (existingWord) {
    return res
      .status(400)
      .json({ error: 'Word is already in use' });
  }

  try {
    // Word ID 자동 생성 (0부터 시작)
    const lastWord = words.sortBy('id').last().value();
    const newId = lastWord ? lastWord.id + 1 : 0;

    // 새로운 word에 ID 추가
    const newWord = { id: newId, ...word };
    words.push(newWord).write();

    // db.json 파일에 저장
    const dbFilePath = path.join(__dirname, '..', 'db', 'db.words.json');
    const currentData = router.db.getState(); // 현재 데이터 상태를 가져옵니다.
    saveMergedDataToFile(currentData, dbFilePath); // 현재 데이터를 db.words.json에 저장합니다.

    res
      .status(200)
      .json({ message: 'Successful Save Word', newWord });
  } catch (error) {
    console.error('Error adding word:', error);
    res.status(500).json({ error: 'An error occurred while adding the word.' });
  }

};

const deleteWordHandler = (router) => async (req, res) => {
  const { id } = req.params; // URL에서 id 가져오기
  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  // JSON Server 라우터에서 삭제 처리
  try {
    const db = router.db; // JSON Server의 데이터베이스 접근
    const collection = db.get('words');
    const wordToDelete = collection.find({ id: Number(id) }).value();

    if (!wordToDelete) {
      return res.status(404).json({ error: 'Word not found' });
    }

    collection.remove({ id: Number(id) }).write();
    return res.status(200).json({ message: `Word with ID ${id} deleted successfully` });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};



export { SignUpHandler, LoginHandler, addWordHandler, deleteWordHandler };
