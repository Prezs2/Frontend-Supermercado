import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // temporal base URL
  timeout: 500 // Tiempo de espera bajo para que no demore en saltar el error y usar los datos dummy
});

export default api;