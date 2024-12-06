import fs from 'fs';

// 공통 로직을 함수로 분리
export const createRoute = (app, apiPath, filePath) => {
  // GET 요청을 처리하는 로직
  app.get(apiPath, (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ error: `Failed to read file: ${filePath}`, details: err });
      }
      res.json(JSON.parse(data));
    });
  });

  // POST 요청을 처리하는 로직 (회원가입, 로그인)
  if (apiPath.includes('/api/user/signup')) {
    app.post(apiPath, (req, res) => {
      const { username, email, password } = req.body;

      // 필수 필드가 있는지 검증
      if (!username || !email || !password) {
        return res
          .status(400)
          .json({ error: 'username, email, and password are required' });
      }

      // 기존 데이터 읽기
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to read database' });
        }

        const db = JSON.parse(data);
        const users = db.users || [];

        // 마지막 사용자의 ID를 확인하고 새로운 ID 생성
        const lastUser = users[users.length - 1];
        const newId = lastUser ? lastUser.id + 1 : 1;

        // 새로운 사용자에 자동으로 생성된 ID 추가
        const newUser = { id: newId, username, email, password };

        // 새로운 사용자 추가
        users.push(newUser);

        // 업데이트된 users 목록을 파일에 저장
        fs.writeFile(
          filePath,
          JSON.stringify({ users }, null, 2),
          (writeErr) => {
            if (writeErr) {
              return res.status(500).json({ error: 'Failed to save user' });
            }

            res
              .status(201)
              .json({ message: 'User added successfully', user: newUser });
          },
        );
      });
    });
  } else if (apiPath.includes('/api/user/login')) {
    app.post(apiPath, (req, res) => {
      const { email, password } = req.body;

      // 필드 검증
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: 'email and password are required' });
      }

      // 데이터베이스에서 사용자 찾기
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to read database' });
        }

        const db = JSON.parse(data);
        const users = db.users || [];

        const user = users.find(
          (u) => u.email === email && u.password === password,
        );
        if (!user) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // 성공적으로 로그인, 임시 JWT 토큰 발행 (예시)
        // eslint-disable-next-line no-undef
        const token = Buffer.from(`${user.email}:${Date.now()}`).toString(
          'base64',
        );
        res.status(200).json({ message: 'Login successful', token });
      });
    });
  }
};
