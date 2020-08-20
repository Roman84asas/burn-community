const initialState = {
    items: [],
    isLoading: false
}


const home = ( state = initialState, { type, payload, isLoading } ) => {
    switch (type) {
        case "HOME:GET_DATES":
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
