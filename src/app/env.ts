import axios from 'axios';

export const instanceAxios = axios.create({
  timeout: 1000,
});
