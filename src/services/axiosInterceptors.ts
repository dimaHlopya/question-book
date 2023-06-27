import { AuthService } from '@utils/auth';
import axios, { type AxiosError, type AxiosInstance } from 'axios';

const controller: AbortController = new AbortController();

export const cancelRequests = (): void => {
  controller.abort();
};

export const authMiddleware = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const controller: AbortController = new AbortController();
      const token: string = AuthService.getToken() ?? '';

      config.signal = controller.signal;
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    async (error: AxiosError) => await Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && (error.response.status === 401 || error.response.status === undefined)) {
        AuthService.updateToken(5)
          .then(async (isRefreshed) => {
            if (await isRefreshed) {
              const token = AuthService.getToken() ?? '';

              error.config.headers.Authorization = `Bearer ${token}`;

              return await axios.request(error.config);
            } else {
              throw new Error('Failed to refresh the token, or the session has expired.');
            }
          })
          .catch(async () => {
            await AuthService.logout();
          });
      }

      if (error?.response.status === 403) {
        axios.request(error.config).catch(() => {
          window.location.assign('/403');
        });
      }

      return await Promise.reject(error);
    }
  );

  return axiosInstance;
};
