import { Buffer } from 'node:buffer';

const createToken = (element) => {
  const token = Buffer.from(`${element.username}:${Date.now()}`).toString(
    'base64',
  );

  return token;
};

export default createToken;
