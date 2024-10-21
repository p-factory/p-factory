import fs from 'fs';

// 공통 로직을 함수로 분리
export const createRoute = (path) => {
  return (req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(JSON.parse(data));
      }
    });
  };
};
