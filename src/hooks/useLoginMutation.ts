import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AuthResponse } from './useAuth';
import axios from '../api/axios';

interface Credentials {
  email: string;
  password: string;
}

const useLoginMutation = (
  options?: Omit<
    UseMutationOptions<AuthResponse, AxiosError, Credentials, unknown>,
    'mutationFn'
  >,
) =>
  useMutation<AuthResponse, AxiosError, Credentials, unknown>({
    mutationFn: async (credentials) => {
      const { data } = await axios.post<AuthResponse>('/login', credentials);
      return data;
    },
    ...options,
  });

export default useLoginMutation;
