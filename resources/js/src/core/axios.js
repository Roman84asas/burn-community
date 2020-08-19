import axios from 'axios';


axios.defaults.baseURL = window.location.origin;
const token = localStorage.getItem('token');

export default axios;
