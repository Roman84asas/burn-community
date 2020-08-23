import React from 'react';
import {NavLink} from "react-router-dom";


import MessageImage from '../../../../assets/img/message.svg'
import LikeLImage from '../../../../assets/img/like-light.svg'
import DefaultImage from "../../../../assets/img/default.png";

const BlockWithArticlesHome = ({items}) => {
    console.log(items)

    return(
        <div className="block_with_articles_home">
            {
                items.map((item) => (
                    <div className="topic_link_home_block" key={`${item.id}_${item.title}`}>
                        <h3 className="topic_link_home_block_title">{item.title}</h3>
                        <div className="topic_link_home_block_description">
                            {item.content_rendered}
                            <NavLink to={`/forum/${item.slug}`} className="topic_link_home_block_slug">читать больше...</NavLink>
                        </div>
                        <div className="topic_link_home_block_info">
                            <img src={item.user.avatar == null ? DefaultImage : item.user.avatar} alt="" className="topic_link_home_block_info_image"/>
                            <div className="topic_link_home_block_info_all">
                                <div className="topic_link_home_block_info_first">
                                    <div className="topic_link_home_block_info_first_name"><span>{item.user.name}</span> с {item.user.country}, {item.user.city}</div>
                                    <div className="topic_link_home_block_info_first_desc">
                                        <div className="desc_topic_home_block_info">
                                            Создал(а) <span>вчера |</span> последний репост <span>23 минуты назад</span> от <span>Feelmark</span>
                                        </div>
                                        <div className="desc_topic_home_block_info_ml">
                                            <div className="desc_topic_home_block_info_ml_messages">
                                                <span>{item.messages}</span>
                                                <img src={MessageImage} alt="Сообщения пользователя"/>
                                            </div>
                                            <div className="desc_topic_home_block_info_ml_like">
                                                <span>{item.likes}</span>
                                                <img src={LikeLImage} alt="Количество лайков"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


            <div className="block_with_articles_home_police">
                <h2 className="block_with_articles_home_police_title">Cобственная политика</h2>
                <div className="block_with_articles_home_police_desc">Сайт рыбатекст поможет дизайнеру, верстальщику,
                    вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык
                </div>
            </div>
        </div>
    )
}

export default BlockWithArticlesHome;
