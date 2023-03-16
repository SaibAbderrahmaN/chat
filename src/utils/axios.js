import axios from 'axios';
// config
//import { BASE_URL } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: "https://localhost:4000" });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
