const signupHandler = (router) => (req, res) => {
  console.log('Received signup request:', req.body); // 요청 본문 출력
  const users = router.db.get('users'); // db.json의 'users' 테이블
  const user = req.body;

  // 중복 사용자 체크 로직
  const existingUser = users.find({ username: users.username }).value();
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  users.push(user).write();
  res.status(201).json(user);
};

export default signupHandler;
