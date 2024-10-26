// src/useFetchQueryAPI.tsx
import { useQuery, useMutation } from '@tanstack/react-query';
import fetchInstance from './fetch.instance';

interface UseFetchQueryAPIProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any; //data를 구체적으로 설정 필요
}

const useFetchQueryAPI = ({ method, url, data }: UseFetchQueryAPIProps) => {
  const api = fetchInstance();

  const fetchQuery = async () => {
    switch (method) {
      case 'GET':
        return (await api.get(url)).data;
      case 'POST':
        return (await api.post(url, data)).data;
      case 'PUT':
        return (await api.put(url, data)).data;
      case 'DELETE':
        return (await api.delete(url, { data })).data;
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }
  };

  if (method === 'GET') {
    return useQuery({
      queryKey: [url],
      queryFn: fetchQuery,
    });
  }

  return useMutation({
    mutationFn: fetchQuery,
  });
};

export default useFetchQueryAPI;
