// src/useFetchMultipleQueries.ts
import { useQueries } from '@tanstack/react-query';
import fetchInstance from './fetch.instance';

interface UseFetchQueryAPIProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // method type
  url: string; // 사용할 api url
  postData: any; // Optional data for requests needing a body
}

export const useFetchMultipleQueries = (configs: UseFetchQueryAPIProps[]) => {
  const queries = configs.map((config) => ({
    queryKey: [config.url], //?
    //?
    queryFn: async () => {
      const api = fetchInstance();
      switch (config.method) {
        case 'GET':
          return (await api.get(config.url)).data;
        case 'POST':
          return (await api.post(config.url, config.postData)).data;
        case 'PUT':
          return (await api.put(config.url, config.postData)).data;
        case 'DELETE':
          return (await api.delete(config.url, { data: config.postData })).data;
        default:
          throw new Error(`Unsupported request method: ${config.method}`);
      }
    },
  }));

  const queryResults = useQueries({ queries });

  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);
  const data = queryResults.map((query) => query.data);

  return { data, isLoading, isError };
};

export default useFetchMultipleQueries;
