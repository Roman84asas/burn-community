import React, {useState} from 'react';
import {TopicPaginate, PopupTopicThem} from "../";

import AddminIcon from '../../../../assets/img/addmin.png';
import SelectIcon from '../../../../assets/img/selec.jpg';
import PointsIcon from '../../../../assets/img/points.svg';
import GolgpointsIcon from '../../../../assets/img/gold-points.svg';
import KrestIcon from '../../../../assets/img/krest.svg';
import LikeIcon from '../../../../assets/img/like-outlined.svg';
import DisLikeIcon from '../../../../assets/img/deslike-outlined.svg';


import {Star} from "../";

const TopBody = () => {
    const [statePoint, SetStatePoint] = useState(false);
    const ShowPopup = () => {
        SetStatePoint(!statePoint);
    }

    return(
        <div className="topic_body_info">
            <div className="topic_body_info_top_title">
                <div className="topic_body_info_top_title_first">
                    <img src={AddminIcon} alt=""/>
                    <div className="topic_body_info_top_title_first_info">
                        <div className="topic_body_info_top_title_first_info_title">
                            Новости от 23\07\2020
                        </div>
                        <div className="topic_body_info_top_title_first_info_descr">
                            Автор <span style={{color: '#FF4D35'}}>Admin</span>, 23 Июля 2020 в 16:05
                        </div>
                    </div>
                </div>
                <div className="topic_body_info_top_title_second">
                    <div className="topic_body_info_top_title_second_all_msg">Сообщений в теме 312</div>
                    <div className="topic_body_info_top_title_second_read">
                        <img src={SelectIcon} alt=""/>
                        Отметить эту тему прочитаной
                    </div>
                </div>
            </div>
            <TopicPaginate />
            <div className="topic_body_info_top_body">
                <div className="topic_body_info_top_body_left">
                    <img src={AddminIcon} alt="" className="topic_body_info_top_body_left_img"/>
                    <div className="topic_body_info_top_body_left_info">
                        <div className="topic_body_info_top_body_left_info_name">
                            Admin
                            <span style={{ backgroundColor: `green` }}></span>
                        </div>
                        <div className="topic_body_info_top_body_left_info_status">
                            Гуру кальяна
                        </div>
                        <Star integ={3.5} />
                        <div className="topic_body_info_top_body_left_info_groop">
                            <span style={{color: '#FF4D35'}}>Администратор</span>
                        </div>
                        <div className="topic_body_info_top_body_left_info_all">
                            Сообщений: <span>23 237</span>
                        </div>
                        <div className="topic_body_info_top_body_left_info_all">
                            Регистрация: <span>19.09.2009</span>
                        </div>
                        <div className="topic_body_info_top_body_left_info_all">
                            Страна: <span>Украина</span>
                        </div>
                        <div className="topic_body_info_top_body_left_info_all">
                            Лайков: <span>237 849</span>
                        </div>
                        <div className="topic_body_info_top_body_left_info_all">
                            Дизлайков: <span>1 012</span>
                        </div>
                    </div>
                </div>
                <div className="topic_body_info_top_body_right">
                    <div className="topic_body_info_top_body_right_top">
                        <div className="topic_body_info_top_body_right_info">Опубликовано 23 Июля, 2020  в 16:05</div>
                        <div className="topic_body_info_top_body_right_top_device">
                            #<span>1</span>
                            <img src={statePoint === true ? GolgpointsIcon : PointsIcon} alt="" onClick={ShowPopup}/>
                            <PopupTopicThem statep={statePoint} />
                        </div>
                    </div>
                    <div className="topic_body_info_top_body_right_message">
                        <p>Госдума приняла закон, распространяющий антитабачные запреты на вейпы и кальяны Госдума приняла закон,
                        распространяющий антитабачные запреты на всю никотиносодержащую продукцию, в том числе вейпы, кальяны, снюсы, электронные сигареты. </p>
                        <p>Об этом сообщает РИА «Новости». Законопроект был внесен группой сенаторов в нижнюю палату парламента еще в 2017 году и вызвал много споров и
                        дискуссий.Речь также идет и об административной ответственности за вовлечение несовершеннолетних в процесс ее потребления, нарушение запрета
                        на их использование в помещениях, на демонстрацию процесса и пр. </p>
                        <a href="#">https://www.business....ru/news/475601</a>
                    </div>
                    <div className="topic_body_info_top_body_right_subscr">
                        Место для подписи
                    </div>
                    <div className="topic_body_info_top_body_right_bott">
                        <div className="topic_body_info_top_body_right_bott_left">
                            <div className="topic_body_info_top_body_right_bott_cr">
                                <img src={KrestIcon} alt=""/>
                            </div>
                            <div className="topic_body_info_top_body_right_bott_citata">
                                Цитата
                            </div>
                            <div className="topic_body_info_top_body_right_bott_up">
                                Поднять
                            </div>
                        </div>
                        <div className="topic_body_info_top_body_right_bott_right">
                            <div className="topic_body_info_top_body_right_bott_like">
                                <img src={LikeIcon} alt=""/>
                                1 348
                            </div>
                            <div className="topic_body_info_top_body_right_bott_right_dislike">
                                <img src={DisLikeIcon} alt=""/>
                                12
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBody;
