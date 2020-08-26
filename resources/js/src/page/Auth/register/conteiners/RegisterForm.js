import { withFormik } from 'formik';
//import get from 'lodash/get';

import RegisterForm from '../components/';

import {fetchFailRegister, fetchUserRegister} from '../../../../redux/actions/user';
import validateForm from '../../../../utils/helpers/validate';

import store from '../../../../redux/store';
import {useDispatch} from "react-redux";

const RegisterFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting, props }) => {
        console.log(values);
        store
            .dispatch(fetchUserRegister(values));
    },
    displayName: 'RegisterForm'
})(RegisterForm);
export default RegisterFormContainer;
