import React, { useState, useEffect } from 'react';
import {
  useFetchQuery, //get을 위한 Hook
  useFetchMutation, //post를 위한 Hook
} from '../../global/Hooks/uesFetchSingleAPI';

const DevFetch = () => {
  const [postData, setPostData] = useState({
    username: '',
    nickname: '',
    password: '',
  });

  const [loadingMessage, setLoadingMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isData, setIsData] = useState(false);

  // GET 요청을 위한 훅 사용
  const {
    data: getData,
    isLoading: isGetLoading,
    isError: isGetError,
    isSuccess: isGetSuccess,
  } = useFetchQuery({
    url: '/test/names',
  });

  // POST 요청을 위한 훅 사용
  const {
    mutation: postMutation,
    isLoading: isPostLoading,
    isError: isPostError,
    isSuccess: isPostSuccess,
  } = useFetchMutation('POST', {
    url: '/user/signup',
    postData,
  });

  // input 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  // POST 요청 전송 핸들러
  const handleSubmit = () => {
    postMutation.mutate(postData); // POST 요청 수동 실행
  };

  // GET 요청 상태 추적
  useEffect(() => {
    if (isGetLoading) {
      setLoadingMessage('Loading data...');
      setErrorMessage('');
      setSuccessMessage('');
      setIsData(false);
    } else if (isGetError) {
      setLoadingMessage('');
      setErrorMessage('Error occurred while fetching data.');
      setSuccessMessage('');
      setIsData(false);
    } else if (isGetSuccess && getData) {
      setLoadingMessage('');
      setErrorMessage('');
      setSuccessMessage('Data fetched successfully!');
      setIsData(true);
      console.log('Fetched GET data:', getData);
    }
  }, [isGetLoading, isGetError, isGetSuccess, getData]);

  // POST 요청 상태 추적
  useEffect(() => {
    if (isPostLoading) {
      setLoadingMessage('Sending data...');
      setErrorMessage('');
      setSuccessMessage('');
    } else if (isPostError) {
      setLoadingMessage('');
      setErrorMessage('Error occurred while sending data.');
      setSuccessMessage('');
    } else if (isPostSuccess) {
      setLoadingMessage('');
      setErrorMessage('');
      setSuccessMessage('POST 요청 성공!');
      console.log('POST request successful with data:', postData);
    }
  }, [isPostLoading, isPostError, isPostSuccess, postData]);

  return (
    <div>
      {/* GET 요청 결과 표시 */}
      <div>
        <h3>GET 요청 결과:</h3>
        {loadingMessage && <p>{loadingMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && isData ? (
          <div>
            <h4>Comments:</h4>
            {getData &&
              getData.map((item: any, index: number) => (
                <div key={index}>
                  <p>ID: {item.id}</p>
                  <p>Post ID: {item.postId}</p>
                  <p>Comment: {item.comment}</p>
                </div>
              ))}
          </div>
        ) : (
          <p>No data available</p>
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
            type="text"
            name="nickname"
            value={postData.nickname}
            onChange={handleInputChange}
            placeholder="Enter nickname"
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

        {isPostLoading ? (
          <p>Sending data...</p>
        ) : isPostError ? (
          <p>Error occurred while sending data.</p>
        ) : (
          <p>{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default DevFetch;
