import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import GoogleIn from "./GoogleIn";
import FacebookIn from "./FacebookIn";
import VKIn from "./VKIn";

import {useSelector} from "react-redux";


const LoginForm = (props) => {
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

    const  status  = useSelector(({ user }) => user.status)
    useEffect(() => {
        if (status === true) {
            props.history.push('/forum');
        }
    }, [status])


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
            <form onSubmit={handleSubmit} className="form_login">
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
                    type="password"
                    placeholder="Пароль..."
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="button_login"
                    type="submit"
                >
                    Войти в аккаунт
                </button>
            </form>
            <div className="redirect_register">
                У меня нет аккаунта.
                <Link className="register-link" to="/register">
                    Регистрация
                </Link>
            </div>
        </div>
    )
}

export default LoginForm;
