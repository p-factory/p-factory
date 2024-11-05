const getUserHandler = (router) => (req, res) => {
  const users = router.db.get(users); // getState()로 전체 DB를 가져와 user 테이블에 접근
  if (!users) {
    return res.status(404).json({ error: 'users table not found' });
  }
  res.json(users);
};

export default getUserHandler;
