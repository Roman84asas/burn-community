import { withFormik } from 'formik';

import LoginForm from '../components';

import validateForm from '../../../../utils/helpers/validate';
import { fetchLogin } from '../../../../redux/actions/user';

import store from '../../../../redux/store';

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),
    validate: values => {
        let errors = {};

        validateForm({ isAuth: true, values, errors });

        return errors;
    },
    handleSubmit: (values) => {
        store.dispatch(fetchLogin(values));
    },
    displayName: 'LoginForm',
})(LoginForm);

export default LoginFormContainer;
