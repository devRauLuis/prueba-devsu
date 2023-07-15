import axios from 'axios';

const bpApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    authorId: import.meta.env.VITE_AUTHOR_ID,
  },
});

console.log(import.meta.env);

export default bpApi;
