import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://9.react.pages.academy/six-cities';
const TIMEOUT = 5000;

export const initApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  return api;
};
