const postSignUpHandler = (router) => (req, res) => {
  const users = router.db.get('users'); // db.json의 'users' 테이블
  const user = req.body;

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
    users.push(user).write();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'An error occurred while adding the user.' });
  }
};

export { postSignUpHandler };
