import {homeApi} from "../../utils/fromApi";
import {HomeConstants} from '../../_constans';

export const setHome = items => ({
    type: HomeConstants.HOME_GET_DATES,
    payload: items,
    isLoading: true,
    });

export const fetchHome = () => dispatch => {
    homeApi.getHome()
        .then(({ data }) => {
            dispatch(setHome(data))
        })
};


