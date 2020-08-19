import { axios } from "../../core";


export default {
    getHome: () => axios.get('/api/')
}
