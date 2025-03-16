// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL, // Uses .env variable
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true, // Ensures cookies are sent if required
// });

// export default api;

import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL as string, // Ensures TypeScript treats it as a string
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // Ensures cookies are sent if required
});

export default api;
