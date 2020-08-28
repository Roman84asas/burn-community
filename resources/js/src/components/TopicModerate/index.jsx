import React, {useState} from 'react';
import DownIcon from "../../../../assets/img/down-red.svg";
import UpIcon from "../../../../assets/img/up-red.svg";


const TopicModerate = () => {
    const [stateStr, SetStateStr] = useState(false);
    const ShowStrel = () => {
        SetStateStr(!stateStr);
    }
    return(
        <div className="topic_moderator">

            <div className="topic_moderator_select" onClick={ShowStrel}>
                Опции модератора
                <img src={stateStr ? DownIcon : UpIcon} alt="" />
            </div>
            <div className={stateStr ? `topic_moderator_select_popup active` : `topic_moderator_select_popup`}>
                <div>Переместить тему</div>
                <div>Закрыть тему</div>
                <div>Удалить тему</div>
                <div>Массовое удаление сообщений</div>
                <div>Редактировать заголовок</div>
                <div>Скрыть тему</div>
            </div>
            <div className="topic_moderator_confirm">
                <div className="topic_moderator_confirm_subb">
                    Подтвердить
                </div>
            </div>
        </div>
    )
}

export default TopicModerate;
