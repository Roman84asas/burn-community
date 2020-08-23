import React from 'react';
import { Link } from "react-router-dom";

import GoogleIn from "./GoogleIn";
import FacebookIn from "./FacebookIn";
import VKIn from "./VKIn";

import validateField from '../../../../utils/helpers/validateField';


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
    return(
        <div className="login_form">
            <h2 className='login_form_title'>Присоединяйтесь к BurnCommunity</h2>
            <div className="login_form_description">
                Присоединяйтесь к самому крупному кальянному сообществу.
                Мы создаём уникальную площадку, где каждый любитель
                и профессионал кальянной индустрии найдет полезную информацию.
            </div>
            <GoogleIn />
            <FacebookIn />
            <VKIn />
            <form onSubmit={handleSubmit} className="form_reg">
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
                    id="password_2"
                    name="password_2"
                    type="password"
                    placeholder="Повторить пароль..."
                    value={values.password_2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="button_login"
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
