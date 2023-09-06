import axios from '../api/axios';
import useAuth, { AuthResponse, Auth } from './useAuth';

const useRefreshToken = () => {
  const { updateAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.post<AuthResponse>('/login/refresh', {
      withCredentials: true,
    });
    const newAuth: Auth = {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
    };
    updateAuth(newAuth);
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
