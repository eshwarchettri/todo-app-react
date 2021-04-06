import axios from 'axios';
import config from "../constants/constant"

export default axios.create({
baseURL: config.url.API_URL
});