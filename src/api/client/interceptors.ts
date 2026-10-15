import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './axios';

let isInitialized = false;

export const initializeInterceptors = () => {
  if (isInitialized) {
    return;
  }

  isInitialized = true;

  axiosInstance.interceptors.request.use(
    async config => {
      const token =
        await AsyncStorage.getItem('accessToken');

      if (token) {
        config.headers.Authorization =
          `Bearer ${token}`;
      }

      if (__DEV__) {
        console.log('[API REQUEST]', {
          method: config.method?.toUpperCase(),
          url: config.url,
        });
      }

      return config;
    },

    error => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    response => {
      if (__DEV__) {
        console.log('[API RESPONSE]', {
          status: response.status,
          url: response.config.url,
        });
      }

      return response;
    },

    async error => {
      const status = error?.response?.status;

      if (__DEV__) {
        console.log('[API ERROR]', {
          status,
          url: error?.config?.url,
          message:
            error?.response?.data?.message ||
            error?.message,
        });
      }

      if (status === 401) {
        // Token expired.
        // Handle logout or token refresh here.
      }

      return Promise.reject(error);
    },
  );
};