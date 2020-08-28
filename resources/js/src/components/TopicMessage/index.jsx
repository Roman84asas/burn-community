import React, {useState} from 'react';


import DefaultIcon from "../../../../assets/img/default.png";
import {PopupMessage, Star} from "../index";
import GolgpointsIcon from "../../../../assets/img/gold-points.svg";
import PointsIcon from "../../../../assets/img/points.svg";
import KrestIcon from "../../../../assets/img/krest.svg";
import LikeIcon from "../../../../assets/img/like-outlined.svg";
import DisLikeIcon from "../../../../assets/img/deslike-outlined.svg";
import DownIcon from "../../../../assets/img/down-darck.svg";
import UpIcon from "../../../../assets/img/up.svg";


const TopicMessage = () => {
    const [statePoint, SetStatePoint] = useState(false);
    const [stateStr, SetStateStr] = useState(true);
    const ShowPopup = () => {
        SetStatePoint(!statePoint);
    }
    const ShowStr = () => {
        SetStateStr(!stateStr);
    }

    return(
        <div className="topic_message">
            <div className="topic_body_info_top_body_left">
                <img src={DefaultIcon} alt="" className="topic_body_info_top_body_left_img"/>
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
                        <PopupMessage statep={statePoint} />
                    </div>
                </div>
                <div className="topic_body_info_top_body_right_answer">
                    <div className="topic_body_info_top_body_right_answer_top">
                        <div className="topic_body_info_top_body_right_answer_top_info">
                            В 12:00 24.08.2020, Kris сказал(а):
                        </div>
                        <img src={stateStr ? DownIcon : UpIcon} alt="" onClick={ShowStr}/>
                    </div>
                    <div className={stateStr ? `topic_body_info_top_body_right_answer_body actives` :  `topic_body_info_top_body_right_answer_body`}>
                        <p>Ну вот и опять Минздрав напоминает о себе и хочет плотно взяться против курения кальянов и вейпа ,
                        давайте порассуждаем как этом может отразится на Кальянных, смогут ли спокойно жить кальянные где нет кухни бара а
                        только кальян или же всем будет туго .
                        Ссылка на новость <a href="#">https://lenta.ru/new.../09/no_smoking/</a> </p>
                    </div>
                </div>
                <div className="topic_body_info_top_body_right_message">
                    <p>Госдума приняла закон, распространяющий антитабачные запреты на вейпы и кальяны Госдума приняла закон,
                        распространяющий антитабачные запреты на всю никотиносодержащую продукцию,
                        в том числе вейпы, кальяны, снюсы, электронные сигареты.
                        Ссылка на новость<a href="#">https://www.business....ru/news/475601</a></p>

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
    )
}

export default TopicMessage;
