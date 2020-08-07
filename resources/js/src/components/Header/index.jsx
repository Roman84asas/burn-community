import React from "react";
import { Link } from "react-router-dom";

import LogoIcon from '../../img/logotype.png'
import VkIcon from '../../img/vk.svg'
import InstaIcon from '../../img/instagram.svg'
import Localization from '../../img/globus.svg'


const Header = () => {
    return(
        <header className='header wrapper'>
            <Link to="/">
                <img src={LogoIcon} alt="Logo Bern Community" className="logo"/>
            </Link>
            <div className="header__navigation">
                <div className="navigations">
                    <a href="/">Форум</a>
                    <a href="/">Онлайн школа</a>
                    <a href="/">Библиотека</a>
                    <a href="/">Помощь</a>
                    <a href="/">Партнеры</a>
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
            <a href="/" className="header__auth">Авторизация</a>
            <div className="header__localization">
                <img src={Localization} alt="Смена языка"/>
                <ul className="navig_localization">
                    <li>СНГ / РУ</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
