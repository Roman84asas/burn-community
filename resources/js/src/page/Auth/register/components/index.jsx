import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

import GoogleIn from "./GoogleIn";
import VKIn from "./VKIn";

import validateField from '../../../../utils/helpers/validateField';
import {useSelector} from "react-redux";


const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
    } = props;

    const  dataReg  = useSelector(({ reg }) => reg.dataReg)
    const  data  = useSelector(({ reg }) => reg.data)

    useEffect(() => {
        if (dataReg === true) {
            props.history.push('/verify');
        }
    }, [dataReg])

    return(
        <div className="login_form">
            <h2 className='login_form_title'>Присоединяйтесь к BurnCommunity</h2>
            <div className="login_form_description">
                Присоединяйтесь к самому крупному кальянному сообществу.
                Мы создаём уникальную площадку, где каждый любитель
                и профессионал кальянной индустрии найдет полезную информацию.
            </div>
            <GoogleIn />
            <VKIn />
            <form onSubmit={handleSubmit} className="form_reg">
                <input
                    id="name"
                    type="text"
                    placeholder="Ваш имя и фамилия..."
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input
                    id="email"
                    type="text"
                    placeholder="Ваш Email..."
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль..."
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Повторить пароль..."
                    value={values.password_confirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="button_login"
                    type="button"
                >
                    Войти в аккаунт
                </button>
            </form>
            <div className="redirect_register">
                У меня уже есть аккаунт.
                <Link className="register-link" to="/login">
                    Войти
                </Link>
            </div>
        </div>
    )
}

export default RegisterForm;
