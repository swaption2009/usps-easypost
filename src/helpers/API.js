import axios from 'axios';

export const ROOT_URL = 'http://localhost:3000';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3000'
});
