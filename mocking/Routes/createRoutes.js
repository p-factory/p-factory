import fs from 'fs';

// 공통 로직을 함수로 분리
export const createRoute = (server, path) => {
  // GET 요청을 처리하는 로직 default
  server.get(path, (req, res) => {
    const filePath = path.includes('/api/user/signup') ? './db/db.user.json' : path;
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

  // POST 요청을 처리하는 로직 (SignUpUsers 용도)
  if (path.includes('/api/user/signup')) {
    server.post(path, (req, res) => {
      const newUser = req.body;
      fs.readFile('./db/db.user.json', 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to read database' });
        }

        const db = JSON.parse(data);
        const users = db.users || [];

        // 새로운 사용자 추가
        users.push(newUser);

        // 업데이트된 users 목록을 파일에 저장
        fs.writeFile('./db/db.user.json', JSON.stringify({ users }, null, 2), (writeErr) => {
          if (writeErr) {
            return res.status(500).json({ error: 'Failed to save user' });
          }

          res.status(201).json({ message: 'User added successfully', user: newUser });
        });
      });
    });
  } else if (path.includes('/api/user/login')) {
    server.post(path, (req, res) => {

      // Authorization 헤더 확인
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Invalid or missing Authorization header' });
      }

      // Content-Type 헤더 확인
      if (contentTypeHeader !== 'application/json') {
        return res.status(400).json({ error: 'Invalid Content-Type header' });
      }

      // 요청된 사용자 정보 (로그인 정보)
      const { email, password } = req.body;

      fs.readFile('./db/db.user.json', 'utf-8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to read database' });
        }
        const db = JSON.parse(data);
        const users = db.users || [];

        // 사용자가 있는지 확인
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // 로그인 성공, JWT 토큰 발행 (간단한 예시)
        const token = 'your-jwt-token-here'; // JWT 토큰 생성 로직을 추가해야 함

        res.status(200).json({ message: 'Login successful', token });
      });
    });
  }
};
