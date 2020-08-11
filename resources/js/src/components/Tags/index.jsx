import React from 'react';
import {NavLink} from "react-router-dom";



const Tags = () => {
    return(
        <div className="tags_all">
            <h2 className="tags_title">Популярные тэги</h2>
            <div className="tags">
                <NavLink to="/" className="tag">Рыба</NavLink>
                <NavLink  to="/" className="tag">Текст</NavLink>
                <NavLink to="/" className="tag">Всегда</NavLink>
                <NavLink to="/" className="tag">Поможет</NavLink>
                <NavLink to="/" className="tag">В сложную</NavLink>
                <NavLink to="/" className="tag">Минуту</NavLink>
            </div>
        </div>
    )
};

export default Tags;
