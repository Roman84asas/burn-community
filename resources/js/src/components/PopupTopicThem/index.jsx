import React from 'react';


const PopupTopicThem = ({statep}) => {
    return(
        <div className={statep === true ? `topic_body_info_top_body_right_top_device_popup active` : 'topic_body_info_top_body_right_top_device_popup'}>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Изменить</div>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Поделиться</div>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Закрыть тему</div>
            <div className="topic_body_info_top_body_right_top_device_popup_List">Удалить тему</div>
        </div>
    )
}
export default PopupTopicThem;
