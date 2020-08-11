import React from 'react';
import TestImg from '../../../../assets/img/test.jpg';
import {NavLink} from "react-router-dom";


const ArticlesSectionHome = () => {
    return(
        <div className="home_articles_section">
            <div className="home_articles_section_body wrapper">
                <h3 className="home_articles_section_title">
                    Интересные статьи
                </h3>
                <div className="home_articles_section_carts">
                    <NavLink to="/" className="home_articles_section_cart" style={{backgroundImage: `url(${TestImg})` }} >
                        <div className="home_articles_section_cart_body">
                            <h2 className="home_articles_section_cart_title">Получи помощь технической поддержки</h2>
                            <p className="home_articles_section_cart_description">
                                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев бо...
                            </p>
                        </div>
                    </NavLink>
                    <NavLink to="/" className="home_articles_section_cart" style={{backgroundImage: `url(${TestImg})` }} >
                        <div className="home_articles_section_cart_body">
                            <h2 className="home_articles_section_cart_title">Получи помощь технической поддержки</h2>
                            <p className="home_articles_section_cart_description">
                                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев бо...
                            </p>
                        </div>
                    </NavLink>
                    <NavLink to="/" className="home_articles_section_cart" style={{backgroundImage: `url(${TestImg})` }} >
                        <div className="home_articles_section_cart_body">
                            <h2 className="home_articles_section_cart_title">Получи помощь технической поддержки</h2>
                            <p className="home_articles_section_cart_description">
                                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев бо...
                            </p>
                        </div>
                    </NavLink>
                </div>

            </div>
        </div>
    )
};

export default ArticlesSectionHome;
