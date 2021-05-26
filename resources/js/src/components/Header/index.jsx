import React from "react";
import {Link, NavLink} from "react-router-dom";

import LogoIcon from '../../../../assets/img/logotype.png'
import VkIcon from '../../../../assets/img/vk.svg'
import InstaIcon from '../../../../assets/img/instagram.svg'
import Localization from '../../../../assets/img/globus.svg'


const Header = () => {
    return(
        <header className='header-body '>
            <div className="header wrapper">
                <Link to="/">
                    <img src={LogoIcon} alt="Logo Bern Community" className="logo"/>
                </Link>
                <div className="header__navigation">
                    <div className="navigations">
                        <nav>
                            <Link to="/forum">
                                Форум
                            </Link>
                            <Link to="/">
                                Онлайн школа
                            </Link>
                            <Link to="/">
                                Библиотека
                            </Link>
                            <Link to="/help">
                                Помощь
                            </Link>
                            <Link to="/">
                                Партнеры
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="header__social">
                    <a href="https://vk.com/">
                        <img src={VkIcon} alt="Наш Вконтакте"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={InstaIcon} alt="Наш интсаграмм"/>
                    </a>
                </div>
                <NavLink
                    to="/register"
                    className="header__auth"
                >
                    Авторизация
                </NavLink>
                <div className="header__localization">
                    <img src={Localization} alt="Смена языка"/>
                    <ul className="navig_localization">
                        <li>СНГ / <span>РУ</span></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
