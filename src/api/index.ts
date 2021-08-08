import axios from 'axios';

const api = axios.create({
  baseURL: 'https://euajudo-back-end.herokuapp.com/registionPoint',
});

export default api;
