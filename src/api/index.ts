import axios from 'axios';

const api = axios.create({
  baseURL: process.env.PUBLIC_URL,
});

export default api;