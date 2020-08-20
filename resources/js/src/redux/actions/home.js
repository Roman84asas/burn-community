import {homeApi} from "../../utils/fromApi";


export const setHome = items => ({
    type: "HOME:GET_DATES",
    payload: items,
    isLoading: true,
    });

export const fetchHome = () => dispatch => {
    homeApi.getHome()
        .then(({ data }) => {
            dispatch(setHome(data))
        })
};


