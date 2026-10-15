import { BASE_URL } from '@/config';
import axios from 'axios';




const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;