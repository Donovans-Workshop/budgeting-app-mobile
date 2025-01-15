import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000', // Update with backend URL
});

export default apiClient;
