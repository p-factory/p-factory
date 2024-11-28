import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    username: "",
    nickname: "",
    password: "",
  },
});

//모달 활성화
export const modalState = atom({
  key: "modalState",
  default: false,
});
