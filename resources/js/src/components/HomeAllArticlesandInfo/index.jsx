import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import {Tags, HomeUsers, Categories, BlockWithArticlesHome} from '../'





const HomeAllArticlesAndInfo = ({topicTop, topicLatest, topicWiMessage, topTags, users}) => {

    const [items, setItems] = useState(topicTop);

    const onClickCategory = (id) => {
        (id === 0) ? setItems(topicTop) :
            (id === 1) ? setItems(topicLatest) :
                setItems(topicWiMessage);
    }

    return(
        <div className="home_all_articles_and_info wrapper">
            <div className="home_all_articles">
                <div className="home_all_articles_top">
                    <h2 className="home_all_articles_title">Общественные дискуссии</h2>
                    <NavLink to='/forum' className="home_all_articles_link_forum">Перейти на форум</NavLink>
                </div>
                <Categories
                    onClickItem={(id) => onClickCategory(id)}
                    items={['топ', 'последнее', 'без ответа']}
                />
               <BlockWithArticlesHome items={items}/>
            </div>
            <div className="tags_and_users">
                <Tags tags={topTags} />
                <HomeUsers users={users}/>
            </div>
        </div>
    )
};

export default HomeAllArticlesAndInfo;
