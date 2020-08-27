import React from 'react';

import ProfileIcon from "../../../../assets/img/admin.jpg"
import LikeIcon from "../../../../assets/img/like-outlined.svg"
import DesLikeIcon from "../../../../assets/img/deslike-outlined.svg"

import { Star } from "../";




const ProfileBody = () => {
    const SendMessage = () => {alert('SendMessage')}
    const AddContact = () => {alert('AddContact')}
    const stars = 3.5;
    return(
        <div className="profile_body">
            <div className="profile_body_top">
                <div className="profile_body_top_info">
                    <img src={ProfileIcon} alt=""/>
                    <div className="profile_body_top_info_section">
                        <div className="profile_body_top_info_section_name">
                            Svop
                            <span style={{ backgroundColor: `green` }}></span>
                        </div>
                        <div className="profile_body_top_info_section_like_deslike">
                            <div className="profile_body_top_info_section_in">
                                <img src={LikeIcon} alt="Likes"/>
                                <span>237 849</span>
                            </div>
                            <div className="profile_body_top_info_section_in">
                                <img src={DesLikeIcon} alt="Deeslike"/>
                                <span>1 012</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_body_top_add_contact_message">
                    <div className="profile_body_top_add" onClick={SendMessage}>Личное сообщение</div>
                    <div className="profile_body_top_add" onClick={AddContact}>Добавить контакт</div>
                </div>
            </div>
            <div className="profile_body_all">
                <div className="profile_body_all_section">
                    <h2>Статистика активности</h2>
                    <div className="profile_body_all_section_body">
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Всего сообщений</div>
                            <div className="profile_body_all_section_params_number">23 237</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Сообщений в день</div>
                            <div className="profile_body_all_section_params_number">2237</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Регистрация</div>
                            <div className="profile_body_all_section_params_number">19.09.2009</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Часовой пояс пользователя</div>
                            <div className="profile_body_all_section_params_number">Aug 6 2020, 13:40</div>
                        </div>
                    </div>
                </div>
                <div className="profile_body_all_section">
                    <h2>Связь</h2>
                    <div className="profile_body_all_section_body">
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">E-mail</div>
                            <div className="profile_body_all_section_params_number">support@burncommunity.com</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">LinkedIn</div>
                            <div className="profile_body_all_section_params_number">supbc</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Instagram</div>
                            <div className="profile_body_all_section_params_number">burncommunity</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Vkontakte</div>
                            <div className="profile_body_all_section_params_number">burncommunity</div>
                        </div>
                    </div>
                </div>
                <div className="profile_body_all_section">
                    <h2>Информация</h2>
                    <div className="profile_body_all_section_body">
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Веб-сайт</div>
                            <div className="profile_body_all_section_params_number" style={{color: `#989898`}}>Нет информации</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Дата рождения</div>
                            <div className="profile_body_all_section_params_number" style={{color: `#989898`}}>Нет информации</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Страна</div>
                            <div className="profile_body_all_section_params_number">Украина</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Последняя активность</div>
                            <div className="profile_body_all_section_params_number">Сегодня, 09:40</div>
                        </div>
                    </div>
                </div>
                <div className="profile_body_all_section">
                    <h2>Личные данные</h2>
                    <div className="profile_body_all_section_body">
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Группа</div>
                            <div className="profile_body_all_section_params_number" style={{ color: `#FF4D35` }}>Администраторы</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Статус</div>
                            <div className="profile_body_all_section_params_number">Гуру кальяна</div>
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Рейтинг</div>
                            <Star integ={stars} />
                        </div>
                        <div className="profile_body_all_section_params">
                            <div className="profile_body_all_section_params_name">Подпись</div>
                            <div className="profile_body_all_section_params_number">Место для подписи которая мо...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileBody;
