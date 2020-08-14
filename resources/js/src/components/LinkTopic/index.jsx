import React from 'react';
import {NavLink} from "react-router-dom";

import AdminIcon from '../../../../assets/img/admin.jpg'


const LinkTopic = () => {
    const colors = ['red', 'yellow', 'blue']
    return(
        <div>
            <div className="link_topic">
                <div className="link_topic_title">
                    <div className="link_topic_title_link">
                        <div className={`link_topic_title_link_important ${colors[0]}`}>Важно</div>
                        <NavLink to="/forum" className="link_topic_title_link_text">Новости от 23\07\2020</NavLink>
                    </div>
                    <div className="link_topic_title_info">
                        <div className="link_topic_title_info_user">Автор <span className="red">Svop</span>, 23 Июля 2020</div>
                        <div className="link_topic_title_info_numbers_message">
                            <div className="active">1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <span>...</span>
                            <div>33</div>
                            <div>»</div>
                        </div>
                    </div>
                </div>
                <div className="link_topic_answer">
                    <div className="link_topic_answer_count">312</div>
                    <div className="link_topic_answer_text">Ответов</div>
                </div>
                <div className="link_topic_see">
                    <div className="link_topic_see_count">1 320</div>
                    <div className="link_topic_see_text">Просмотров</div>
                </div>
                <div className="link_topic_user">
                    <img src={AdminIcon} alt=""/>
                    <div className="link_topic_user_body">
                        <div className="link_topic_user_body_desc">
                            Политика конфиденциальности важ ...
                        </div>
                        <div className="link_topic_user_body_auhtor">
                            От <span className="red">Svop</span>, 23 Июля
                        </div>
                    </div>
                </div>
            </div>
            <div className="link_topic">
                <div className="link_topic_title">
                    <div className="link_topic_title_link">
                        <div className={`link_topic_title_link_important ${colors[2]}`}>Зафиксировано</div>
                        <NavLink to="/forum" className="link_topic_title_link_text">Chameleon Dark - ipsfocus lorem ipsum nazvanie din...</NavLink>
                    </div>
                    <div className="link_topic_title_info">
                        <div className="link_topic_title_info_user">Автор <span className="blue">skzbd</span>, 17 Июля 2020</div>
                        <div className="link_topic_title_info_numbers_message">
                            <div className="active">1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <span>...</span>
                            <div>12</div>
                            <div>»</div>
                        </div>
                    </div>
                </div>
                <div className="link_topic_answer">
                    <div className="link_topic_answer_count">312</div>
                    <div className="link_topic_answer_text">Ответов</div>
                </div>
                <div className="link_topic_see">
                    <div className="link_topic_see_count">1 320</div>
                    <div className="link_topic_see_text">Просмотров</div>
                </div>
                <div className="link_topic_user">
                    <img src={AdminIcon} alt=""/>
                    <div className="link_topic_user_body">
                        <div className="link_topic_user_body_desc">
                            Classifieds System
                        </div>
                        <div className="link_topic_user_body_auhtor">
                            От <span className="blue">skzbd</span>, 17 Июля
                        </div>
                    </div>
                </div>
            </div>
            <div className="link_topic">
                <div className="link_topic_title">
                    <div className="link_topic_title_link">
                        <div className={`link_topic_title_link_important ${colors[1]}`}>Опрос</div>
                        <NavLink to="/forum" className="link_topic_title_link_text">Новости от 23\07\2020 s lorem ipsum nazvanie dinnoe na...</NavLink>
                    </div>
                    <div className="link_topic_title_info">
                        <div className="link_topic_title_info_user">Автор <span className="yellow">David</span>, 21 Июля 2020</div>
                        <div className="link_topic_title_info_numbers_message">
                            <div className="active">1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <span>...</span>
                            <div>47</div>
                            <div>»</div>
                        </div>
                    </div>
                </div>
                <div className="link_topic_answer">
                    <div className="link_topic_answer_count">312</div>
                    <div className="link_topic_answer_text">Ответов</div>
                </div>
                <div className="link_topic_see">
                    <div className="link_topic_see_count">1 320</div>
                    <div className="link_topic_see_text">Просмотров</div>
                </div>
                <div className="link_topic_user">
                    <img src={AdminIcon} alt=""/>
                    <div className="link_topic_user_body">
                        <div className="link_topic_user_body_desc">
                            Classifieds System
                        </div>
                        <div className="link_topic_user_body_auhtor">
                            От <span className="blue">skzbd</span>, 17 Июля
                        </div>
                    </div>
                </div>
            </div>
            <div className="link_topic">
                <div className="link_topic_title">
                    <div className="link_topic_title_link">
                        <NavLink to="/forum" className="link_topic_title_link_text">Новости от 23\07\2020</NavLink>
                    </div>
                    <div className="link_topic_title_info">
                        <div className="link_topic_title_info_user">Автор <span>Evols</span>, 21 Июля 2020</div>
                    </div>
                </div>
                <div className="link_topic_answer">
                    <div className="link_topic_answer_count">312</div>
                    <div className="link_topic_answer_text">Ответов</div>
                </div>
                <div className="link_topic_see">
                    <div className="link_topic_see_count">1 320</div>
                    <div className="link_topic_see_text">Просмотров</div>
                </div>
                <div className="link_topic_user">
                    <img src={AdminIcon} alt=""/>
                    <div className="link_topic_user_body">
                        <div className="link_topic_user_body_desc">
                            Auto reply to topics
                        </div>
                        <div className="link_topic_user_body_auhtor">
                            От David, 23 Июля
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkTopic;
