// resources/js/lib/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  withCredentials: true,
  headers: {
      'Accept': 'application/json',
  },
});
 
const csrf = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  withCredentials: true,
  headers: {
      'Accept': 'application/json',
  },
});

export { api, csrf };