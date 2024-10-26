// src/useFetchQueryAPI.tsx
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import fetchInstance from './fetch.instance';

interface User {
  id: number;
  name: string;
}

interface APIError {
  message: string;
}

interface FetchOptions {
  queryOptions: UseQueryOptions<User[], APIError>; // 예시로 User 배열을 반환하는 쿼리로 지정
  mutationOptions: UseMutationOptions<User, APIError, { name: string }, unknown>; // 예시로 새로운 User 추가
}

const useFetchQueryAPI = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data: any = null,
  baseURL: string,
  options: FetchOptions = { queryOptions: {}, mutationOptions: {} } as FetchOptions // 기본값 설정
) => {
  // Axios 인스턴스 생성
  const api = fetchInstance(baseURL);

  // 기본 옵션을 추가하여 options와 병합
  // const defaultQueryOptions: UseQueryOptions<User[], APIError> = {
  //   onSuccess: () => console.log('Query successful'),
  //   onError: (error) => console.log('Query error:', error),
  // };

  // const defaultMutationOptions: UseMutationOptions<User, APIError, { name: string }, unknown> = {
  //   onSuccess: () => console.log('Mutation successful'),
  //   onError: (error) => console.log('Mutation error:', error),
  // };

  // 요청 함수 정의
  const fetchQuery = async () => {
    try {
      let response;
      switch (method) {
        case 'get':
          response = await api.get(url);
          break;
        case 'post':
          response = await api.post(url);
          break;
        case 'put':
          response = await api.put(url);
          break;
        case 'delete':
          response = await api.delete(url);
          break;
        default:
          throw new Error(`Unsupported request method: ${method}`);
      }
      return response.data as User[];
    } catch (error) {
      throw error; // react-query에서 에러 처리를 위해 throw
    }
  };

  // GET 요청
  // method가 "get"이면 useQuery를 사용, useQuery는 데이터를 가져오는 데 최적화된 상태 관리 기능(로딩, 에러, 성공, 데이터 캐싱 등)을 제공
  if (method === 'get') {
      // queryOptions의 기본값을 직접 설정하여 필요시 사용자가 덮어쓸 수 있도록 합니다.
      const defaultQueryOptions: UseQueryOptions<User[], APIError> = {
        onSuccess: (data:any) => console.log('Query successful:', data),
        onError: (error:any) => console.log('Query error:', error),
      };

      return useQuery([url], fetchQuery, { ...defaultQueryOptions, ...options.queryOptions });
    }

  // POST, PUT, DELETE 요청
  // 데이터의 생성, 수정, 삭제 같은 작업을 위해 useMutation을 사용, useMutation은 useQuery와 다르게 데이터 캐싱 기능은 없지만 성공 시 후속 작업이나 에러 처리에 더 유리
  const defaultMutationOptions: UseMutationOptions<User, APIError, { name: string }> = {
    onSuccess: (data) => console.log('Mutation successful:', data),
    onError: (error) => console.log('Mutation error:', error),
  };

  return useMutation(fetchQuery, { ...defaultMutationOptions, ...options.mutationOptions });
};

export default useFetchQueryAPI;
