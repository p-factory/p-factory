// src/useFetchQueryAPI.tsx
import {
  useQuery,
  useMutation,
  UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query';
import fetchInstance from './fetch.instance';

interface UseFetchQueryAPIProps {
  url: string;
  postData?: any;
}

// GET 요청을 처리하는 함수
export const useFetchQuery = ({
  url,
}: UseFetchQueryAPIProps): UseQueryResult<any, Error> => {
  const api = fetchInstance();
  const fetchQuery = async () => {
    return (await api.get(url)).data;
  };

  return useQuery({
    queryKey: [url],
    queryFn: fetchQuery,
  });
};

// POST, PUT, DELETE 요청을 처리하는 함수
export const useFetchMutation = (
  method: 'POST' | 'PUT' | 'DELETE',
  { url, postData }: UseFetchQueryAPIProps,
): {
  mutation: UseMutationResult<any, Error, any>;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
} => {
  const api = fetchInstance();

  const fetchMutation = async () => {
    switch (method) {
      case 'POST':
        return (await api.post(url, postData)).data;
      case 'PUT':
        return (await api.put(url, postData)).data;
      case 'DELETE':
        return (await api.delete(url, { data: postData })).data;
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }
  };

  const mutation = useMutation({
    mutationFn: fetchMutation,
  });

  // status에 따른 상태 정의
  const isLoading = mutation.status === 'pending';
  const isError = mutation.status === 'error';
  const isSuccess = mutation.status === 'success';

  // mutation 객체와 상태 변수들을 함께 반환
  return {
    mutation,
    isLoading,
    isError,
    isSuccess,
  };
};
