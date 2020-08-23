import {UserConstants} from '../../_constans';

const initialState = {
    data: null,
    token: null,
    status: false
};

const user = ( state = initialState, { type, user, status, token } ) => {
    switch (type) {
        case UserConstants.AUTH_TOKEN_UPDATE:
            return {
                ...state,
                token: token,
                status: status
            }
        case UserConstants.LOGIN_REQUEST:
            return {
                ...state,
            };
        case UserConstants.LOGIN_SUCCESS:
            return {
                ...state,
                data: user,
                status: status
            };
        case UserConstants.LOGIN_FAILURE:
            return {
                ...state,
            };

        default:
            return state;
    }
}

export default user;
