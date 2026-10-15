import {
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';

import axiosInstance from './axios';

type QueryParams = Record<string, unknown>;

const request = <T>(
  method: Method,
  url: string,
  data?: unknown,
  params?: QueryParams,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return axiosInstance({
    method,
    url,
    data,
    params,
    ...config,
  });
};

export const get = <T>(
  url: string,
  params?: QueryParams,
  config?: AxiosRequestConfig,
) =>
  request<T>(
    'GET',
    url,
    undefined,
    params,
    config,
  );

export const post = <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) =>
  request<T>(
    'POST',
    url,
    data,
    undefined,
    config,
  );

export const put = <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) =>
  request<T>(
    'PUT',
    url,
    data,
    undefined,
    config,
  );

export const patch = <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) =>
  request<T>(
    'PATCH',
    url,
    data,
    undefined,
    config,
  );

export const remove = <T>(
  url: string,
  config?: AxiosRequestConfig,
) =>
  request<T>(
    'DELETE',
    url,
    undefined,
    undefined,
    config,
  );