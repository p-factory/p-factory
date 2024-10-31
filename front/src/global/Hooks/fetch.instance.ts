import axios from 'axios';

const API = process.env.REACT_APP_API_MOCKING;

const fetchInstance = (baseURL = API) => {
  return axios.create({
    baseURL, // env로 설정 필요
    timeout: 10000, // 요청 타임아웃 1초로 설정 : 몇초가 적절한지 모르겠음
  });
};

export default fetchInstance;
