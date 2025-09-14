import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44377', // Replace with actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
