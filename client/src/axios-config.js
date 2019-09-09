import Axios from 'axios';

const axiosConfig = Axios.create({
    baseURL: "http://localhost:3001"
});

export default axiosConfig;