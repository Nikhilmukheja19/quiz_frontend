import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://quiz-backend-3-siac.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
