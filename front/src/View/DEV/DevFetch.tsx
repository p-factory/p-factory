import React, { useState } from 'react';
import useFetchMultiQueryAPI from '../../global/Hooks/useFetchMultiQueryAPI';

const DevFetch = () => {
  // POST 요청 데이터 상태 관리
  const [postData, setPostData] = useState({
    id: 1,
    username: '',
    email: '',
    password: '',
  });

  // FetchMultiQueryAPI를 호출해 GET과 POST 요청을 동시에 처리
  const { data, isLoading, isError } = useFetchMultiQueryAPI([
    { method: 'GET', url: '/test', postData: {} },
    { method: 'POST', url: '/user/signup', postData },
  ]);

  // input 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  // POST 요청 전송 핸들러
  const handleSubmit = () => {
    // data 배열에서 POST 요청의 데이터를 확인하고 POST 요청을 수행
    const postQuery = data.find((query) => query.method === 'POST');
    if (postQuery) {
      postQuery.mutate(postData);
    }
  };

  return (
    <div>
      {/* GET 요청 결과 표시 */}
      <div>
        <h3>GET 요청 결과:</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error occurred while fetching data.</p>
        ) : (
          data[0] && <p>{JSON.stringify(data[0])}</p>
        )}
      </div>

      {/* POST 요청 입력 및 전송 */}
      <div>
        <h3>POST 요청:</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={postData.username}
            onChange={handleInputChange}
            placeholder="Enter username"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={postData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={postData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
          />
        </label>
        <br />
        <button onClick={handleSubmit}>Send POST Request</button>

        {isLoading ? (
          <p>Sending data...</p>
        ) : isError ? (
          <p>Error occurred while sending data.</p>
        ) : (
          <p>POST 요청 성공!</p>
        )}
      </div>
    </div>
  );
};

export default DevFetch;
