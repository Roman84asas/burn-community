import React from 'react';

import DefaultImage from '../../../../assets/img/default.png'
import MessageImage from '../../../../assets/img/message.svg'
import LikeLImage from '../../../../assets/img/like-light.svg'


const HomeUsers = ({users}) => {
    return(
        <div className="user_in_home">
            <h2 className="user_in_home_title">Топ 5 пользователей</h2>
            {
                users.map((user) =>(
                    <div className="user_in_home_body" key={`${user.id}_${user.name}`}>
                        <img src={user.avatar == null ? DefaultImage : user.avatar} alt="Пользователь общества курильщиков" className="user_in_home_image"/>
                        <div className="user_in_home_body_telo">
                            <div className="user_in_home_body_name">{user.name}</div>
                            <div className="user_in_home_body_address">
                                <span>{user.country}</span>,
                                <span>{user.city}</span>
                            </div>
                            <div className="user_in_home_all_info">
                                <div className="user_in_home_messages">
                                    <span>{user.messages}</span>
                                    <img src={MessageImage} alt="Сообщения пользователя"/>
                                </div>
                                <div className="user_in_home_like">
                                    <span>{user.likes}</span>
                                    <img src={LikeLImage} alt="Количество лайков"/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HomeUsers;
