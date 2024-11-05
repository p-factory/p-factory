const getTestNameHandler = (router) => (_req, res) => {
  // _req를 사용해서 lint를 피해가는 문법 추가
  const names = router.db.get('names');
  if (!names) {
    return res.status(404).json({ error: 'Names table not found' });
  }
  try {
    res.status(201).json(names);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'An error occurred while adding the user.' });
  }
};

export { getTestNameHandler };
