import React from 'react';
import {Link} from "react-router-dom";


const PopupMessage = ({statep}) => {
    return(
        <div className={statep === true ? `topic_body_info_top_body_right_top_device_popup active` : 'topic_body_info_top_body_right_top_device_popup'}>
            <Link to='/profile/1' className="topic_body_info_top_body_right_top_device_popup_List">Открыть профиль</Link>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Поделиться</div>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Жалоба</div>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Изменить</div>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Удалить</div>
        </div>
    )
}
export default PopupMessage;
