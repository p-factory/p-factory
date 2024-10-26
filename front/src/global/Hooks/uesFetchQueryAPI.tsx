// src/useFetchQueryAPI.tsx
import { useQuery, useMutation } from '@tanstack/react-query';
import fetchInstance from './fetch.instance';

interface UseFetchQueryAPIProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // method type
  url: string;  // 사용할 api url
  postData: {}; //data를 구체적으로 설정 필요 만일 타입에러가 생기면 `data?: any;`과 같이 변경이 필요하다.
}

const useFetchQueryAPI = ({ method, url, postData }: UseFetchQueryAPIProps) => {
  const api = fetchInstance();

  const fetchQuery = async () => {
    try {
      switch (method) {
        case 'GET':
          return (await api.get(url)).data;
        default:
          throw new Error(`Unsupported request method: ${method}`);
      }
    } catch (error) {
      console.error(`!Error : ${error}`)
    } finally { 
      console.log(`${method} API 요청 완료`);
    }
  };

  // GET 요청일 때만 useQuery 사용
  if (method === 'GET') {
    const query = useQuery({
      queryKey: [url],
      queryFn: fetchQuery,
    });

    // isLoading, isError 등을 반환하여 외부에서 확인 가능하게 함
    return {
      ...query,
      isLoading: query.isLoading,
      isError: query.isError,
      isSuccess: query.isSuccess,
    };
  }


  // POST, PUT 요청 시 사용하는 fetchMutation
  // 여기서 any가 아닌 postData를 object롤 사용하면 안되는지 확인 필요.
  const fetchMutation = async () => {
    try {
      switch (method) {
        case 'POST':
          return (await api.post(url, postData)).data;
        case 'PUT':
          return (await api.put(url, postData)).data;
        case 'DELETE':
        return (await api.delete(url, { data: postData })).data;
        default:
          throw new Error(`Unsupported request method for useMutation: ${method}`);
      }
    } catch (error) {
      console.error(`!Error : ${error}`);
      throw error;
    } finally {
      console.log(`${method} API 요청 완료`);
    }
  };

 // POST, PUT, DELETE 요청일 때 useMutation 사용
  const mutation = useMutation({
    // Get과 Delete를 사용할 때는 useMutation을 사용할 필요가 없다. 따라서 switch case를 둘로 나누어서 사용
    mutationFn: fetchMutation,
  });

  // isLoading, isError 등을 반환하여 외부에서 확인 가능하게 함
  return {
    ...mutation,
    mutate: mutation.mutate, // POST 또는 PUT 시 데이터를 전달할 수 있는 mutate 함수
    //mutation에서는 isLading과 같은 속성이 없다. 따라서 status를 통한 반환 값으로 사용해야한다. status에는 다음과 같은 값이 반환된다. status: "error" | "idle" | "pending" | "success" 
    isLoading: mutation.status === 'pending', // useMutation에서는 status를 사용하여 로딩 상태 확인
    isError: mutation.status === 'error',     // 에러 상태 확인
    isSuccess: mutation.status === 'success', // fetch 상태 확인
  };
};

export default useFetchQueryAPI;
