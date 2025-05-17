import axios from "axios";

const api = axios.create({
  baseURL: "https://conectapet-front.onrender.com/",
});

export default api;
