import {UserConstants} from '../../_constans';

const initialState = {
    dataReg: false,
    data: null
};

const reg = ( state = initialState, { bool, type, data } ) => {
    switch (type) {
        case UserConstants.USER_FAIL_REGISTER:
            return {
                ...state,
                data: data,
            }
        case UserConstants.USER_SUCCESS_REGISTER:
            return {
                ...state,
                dataReg: bool,
            }

        default:
            return state;
    }
}

export default reg;
