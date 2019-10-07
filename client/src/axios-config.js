import Axios from 'axios';

const localURL = "http://localhost:3001";
const remoteURL = "https://voted-portfolio-app.herokuapp.com";

const axiosConfig = Axios.create({
    baseURL: remoteURL,
    'Access-Control-Allow-Origin': '*'
});

export default axiosConfig;