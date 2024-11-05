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
  res
    .status(200)
    .json({ message: 'Login successful', user: userWithoutPassword });
};

export { SignUpHandler, LoginHandler };
