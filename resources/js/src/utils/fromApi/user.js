
import { axios } from "../../core";

export default {
    signIn: postData => axios.post("/api/login", postData),
    signUp: postData => axios.post("/api/register", postData),
    getMe: () => axios.get("/user/me"),
    /*verifyHash: hash => axios.get("/user/verify?hash=" + hash),

    findUsers: query => axios.get("/user/find?query=" + query)*/
};
