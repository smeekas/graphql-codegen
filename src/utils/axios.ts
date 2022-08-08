import axios from "axios";
console.log(process.env.REACT_APP_PEXEL_KEY as string);
const axiosInstance = axios.create({
  baseURL: "https://api.pexels.com/v1/search",
  withCredentials: false,
  headers: {
    Authorization: process.env.REACT_APP_PEXEL_KEY as string,
    "Access-Control-Allow-Origin": "http://lcalhost:3000",
  },
});

export default axiosInstance;
