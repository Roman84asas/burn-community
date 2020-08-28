import React from 'react';
import {NavLink} from "react-router-dom";

import RightIcon from '../../../../assets/img/rigth.svg';

const ArticleTop = () => {
    return(
        <div className="article_top">
            <NavLink to="/">Главная</NavLink>
            <img src={RightIcon} alt=""/>
            <NavLink to="/forum">Блог</NavLink>
            <img src={RightIcon} alt=""/>
            Получи помощь технической поддержки
        </div>
    )
}

export default ArticleTop;
