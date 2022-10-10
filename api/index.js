import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI,
  timeout: import.meta.env.VITE_REQUEST_TIMEOUT,
  timeoutErrorMessage: "Server took too long to respond",
});

export default api;
