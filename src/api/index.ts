import {initializeInterceptors} from './client/interceptors';
import * as apiClientMethods from './client/apiClient';

initializeInterceptors();

export {default as axiosInstance} from './client/axios';

export const apiClient = apiClientMethods;

export {getApiErrorMessage} from './client/apiError';