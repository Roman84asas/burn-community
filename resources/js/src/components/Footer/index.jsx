import React from "react";
import {NavLink} from "react-router-dom";


import VkIcon from "../../../../assets/img/vk-lightl.svg.svg";
import InstaIcon from "../../../../assets/img/instagram-light.svg.svg";


const Footer = () => {
    return(
        <footer className='footer'>
            <div className="footer_body wrapper">
                <div className="footer_navigation">
                    <h2 className="footer_navigation_title">Раздел 1</h2>
                    <NavLink to="/" className="footer_link">Онлайн школа</NavLink>
                    <NavLink to="/" className="footer_link">Топ сообщества</NavLink>
                    <NavLink to="/" className="footer_link">Карта сайта</NavLink>
                    <NavLink to="/" className="footer_link">RSS</NavLink>
                    <NavLink to="/" className="footer_link">Рыба</NavLink>
                    <NavLink to="/" className="footer_link">Рыба</NavLink>
                    <NavLink to="/" className="footer_link">Рыба</NavLink>
                </div>
                <div className="footer_navigation">
                    <h2 className="footer_navigation_title">Раздел 2</h2>
                    <NavLink to="/" className="footer_link">Библиотека</NavLink>
                    <NavLink to="/" className="footer_link">Помощь</NavLink>
                    <NavLink to="/" className="footer_link">Связаться с нами</NavLink>
                    <NavLink to="/" className="footer_link">Рыба</NavLink>
                    <NavLink to="/" className="footer_link">Рыба</NavLink>
                    <NavLink to="/" className="footer_link">Рыба</NavLink>
                    <NavLink to="/" className="footer_link">Рыба</NavLink>
                </div>
                <div className="footer_navigation">
                    <h2 className="footer_navigation_title">Для партнеров</h2>
                    <NavLink to="/" className="footer_link">Авторизация в B2b</NavLink>
                    <NavLink to="/" className="footer_link">Закрытый форум</NavLink>
                    <NavLink to="/" className="footer_link">Партнеры</NavLink>
                </div>
                <div className="footer_navigation">
                    <h2 className="footer_navigation_title">Социальные сети</h2>
                    <div className="footer_social">
                        <a href="https://vk.com/">
                            <img src={VkIcon} alt="Наш Вконтакте"/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src={InstaIcon} alt="Наш интсаграмм"/>
                        </a>
                    </div>
                </div>
                <span className="info-block_footer">All right reserved © 2020 BurnCommunity</span>
            </div>
        </footer>
    )
}

export default Footer;
