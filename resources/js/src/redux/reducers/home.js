import {HomeConstants} from "../../_constans";

const initialState = {
    items: [],
    isLoading: false
}


const home = ( state = initialState, { type, payload, isLoading } ) => {
    switch (type) {
        case HomeConstants.HOME_GET_DATES:
            return {
                ...state,
                items: payload,
                isLoading: isLoading
            }
        default:
            return state;
    }
}

export default home;
