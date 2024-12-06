const getNameHandler = (router) => (req, res) => {
  const names = router.db.get(names); // getState()로 전체 DB를 가져와 names 테이블에 접근
  if (!names) {
    return res.status(404).json({ error: 'Names table not found' });
  }
  res.json(names);
};

export default getNameHandler;
