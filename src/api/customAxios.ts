import axios from 'axios';

const bpApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    // Include headers like the official number
  },
});

console.log(import.meta.env);

export default bpApi;
