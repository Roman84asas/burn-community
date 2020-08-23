import {userApi} from "../../utils/fromApi";

import {UserConstants} from '../../_constans';

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
