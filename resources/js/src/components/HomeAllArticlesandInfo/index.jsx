import React from 'react';
import {NavLink} from "react-router-dom";


import {Tags, HomeUsers, Categories, BlockWithArticlesHome} from '../'




const HomeAllArticlesAndInfo = () => {
    return(
        <div className="home_all_articles_and_info wrapper">
            <div className="home_all_articles">
                <div className="home_all_articles_top">
                    <h2 className="home_all_articles_title">Общественные дискуссии</h2>
                    <NavLink to='/' className="home_all_articles_link_forum">Перейти на форум</NavLink>
                </div>
                <Categories
                    onClickItem={(name) => console.log(name)}
                    items={['топ', 'последнее', 'без ответа', 'новости в блоге']}
                />
                < BlockWithArticlesHome />
            </div>
            <div className="tags_and_users">
                <Tags />
                <HomeUsers />
            </div>
        </div>
    )
};

export default HomeAllArticlesAndInfo;
