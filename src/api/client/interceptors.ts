
import axiosInstance from './axios';

let isInitialized = false;

export const initializeInterceptors = () => {
  if (isInitialized) {
    return;
  }

  isInitialized = true;

  axiosInstance.interceptors.request.use(
    config => {
      if (__DEV__) {
        console.log('[API REQUEST]', {
          method: config.method?.toUpperCase(),
          url: config.url,
          hasAuthorization: Boolean(
            config.headers.Authorization,
          ),
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
    error => {
      if (__DEV__) {
        console.log('[API ERROR]', {
          status: error?.response?.status,
          url: error?.config?.url,
          message:
            error?.response?.data?.status_message ||
            error?.response?.data?.message ||
            error?.message,
        });
      }

      return Promise.reject(error);
    },
  );
};
