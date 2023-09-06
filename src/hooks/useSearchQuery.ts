import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import useAxiosPrivate from './useAxiosPrivate';
import { SearchResponse } from '../types';

const useSearchQuery = (
  query: string,
  options?: Omit<UseQueryOptions<SearchResponse, AxiosError>, 'queryKey'>,
) => {
  const axios = useAxiosPrivate();
  return useQuery<SearchResponse, AxiosError>({
    queryKey: ['search', query],
    queryFn: async () => {
      const { data } = await axios.post<SearchResponse>(`/search`, { query });
      return data;
    },
    ...options,
  });
};

export default useSearchQuery;
