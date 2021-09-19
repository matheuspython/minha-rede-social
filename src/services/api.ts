import axios from 'axios';

const api = axios.create({
  baseURL: "https://backend-to-do-list4g.herokuapp.com/"
});

export default api;