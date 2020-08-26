import {userApi} from "../../utils/fromApi";

import {UserConstants} from '../../_constans';
import {useDispatch} from "react-redux";

function requestCurrentUser() {
    return {
        type: UserConstants.LOGIN_REQUEST,
    };
}

function receiveCurrentUser(body) {
    return {
        type: UserConstants.LOGIN_SUCCESS,
        user: body.data,
        status: true
    };
}

function failureCurrentUser(error) {
    return {
        type: UserConstants.LOGIN_FAILURE,
        status: false
    };
}

function fetchCurrentUser() {
    return (dispatch) => {
        dispatch(requestCurrentUser());

        axios.get('/api/user')
            .then((response) => response.data)
            .then((body) => {
                dispatch(receiveCurrentUser(body));
            })
            .catch((e) => dispatch(failureCurrentUser(e)));
    };
}

export function authTokenUpdate(token) {
    return {
        type: UserConstants.AUTH_TOKEN_UPDATE,
        token: token,
        status: true
    };
}

export function fetchLogin(postData) {
    return (dispatch) => {
        userApi.signIn(postData)
            .then((response) => response.data)
            .then((body) => {
                dispatch(authTokenUpdate(body.data.token));
                dispatch(receiveCurrentUser(body));
            })
            .catch((e) => dispatch(failureCurrentUser(e)));
    };
}
export function fetchUserRegister(postData) {
    return (dispatch) => {
        userApi.signUp(postData).then((response) => response.data)
            .then((body) => {
                dispatch(fetchSuccessRegister(true));
            })
            .catch((err) => {
                    dispatch(fetchFailRegister('Аккаунт с такой почтой уже создан.'));
            })
    }
}

export function fetchFailRegister(data) {
    return  {
        type: UserConstants.USER_FAIL_REGISTER,
        data: data
    };
}
export function fetchSuccessRegister(bool) {
    return  {
        type: UserConstants.USER_SUCCESS_REGISTER,
        bool: bool
    };
}
