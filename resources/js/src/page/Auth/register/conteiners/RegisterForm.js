import { withFormik } from 'formik';
//import get from 'lodash/get';

import RegisterForm from '../components/';

//import { userActions } from 'redux/actions';
import validateForm from '../../../../utils/helpers/validate';

//import store from 'redux/store';

const RegisterFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
        password_2: ''
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting, props }) => {
        console.log(values);
        /*store
            .dispatch(userActions.fetchUserRegister(values))
            .then(() => {
                props.history.push('/signup/verify');
                setSubmitting(false);
            })
            .catch(err => {
                if (get(err, 'response.data.message.errmsg', '').indexOf('dup') >= 0) {
                    openNotification({
                        title: 'Ошибка',
                        text: 'Аккаунт с такой почтой уже создан.',
                        type: 'error',
                        duration: 5000
                    });
                } else {
                    openNotification({
                        title: 'Ошибка',
                        text: 'Возникла серверная ошибка при регистрации. Повторите позже.',
                        type: 'error',
                        duration: 5000
                    });
                }
                setSubmitting(false);
            });*/
    },
    displayName: 'RegisterForm'
})(RegisterForm);
export default RegisterFormContainer;
