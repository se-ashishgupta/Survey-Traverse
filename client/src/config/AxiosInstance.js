import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URI
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;

        if (response && response.status === 401) {
            const unauthorizedMessages = ["Unauthorized", "Token expired, Login now", "Invalid authorization header"];
            if (unauthorizedMessages.includes(error.response.data.message)) {
                handleUnauthorized();
            }
        }
        return Promise.reject(error);
    }
);

function handleUnauthorized() {
    localStorage.clear();

}

export default axiosInstance

