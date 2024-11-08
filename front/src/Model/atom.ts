import { atom } from 'recoil';

export const userState = atom<{
  username: string;
  nickname: string;
  password: string;
}>({
  key: 'userState',
  default: {
    username: '',
    nickname: '',
    password: '',
  },
});
