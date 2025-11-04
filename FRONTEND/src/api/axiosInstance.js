import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1"
})


export default axiosInstance;






















// interceptor is a callback can run before req sent and befor resoponse comes for modification

// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );