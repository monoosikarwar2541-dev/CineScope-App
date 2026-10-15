import axios from 'axios';
import {
  BASE_URL,
  TMDB_ACCESS_TOKEN,
} from '@/config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

export default axiosInstance;