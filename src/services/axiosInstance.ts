import axios, { type AxiosInstance } from 'axios';

import { authMiddleware } from './axiosInterceptors';

export const getAxiosInstance = (): AxiosInstance => {
  return authMiddleware(
    axios.create({
      timeout: 300000,
    })
  );
};
