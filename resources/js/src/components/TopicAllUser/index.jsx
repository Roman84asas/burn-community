import React from 'react';



const TopicAllUser = () => {
    return(
        <div className='topic_all_user'>
            <div className="topic_all_user_top">
                <span>100</span> Чел. просматривают этот форум (<span>79</span> Гостей, <span>16</span> Скрытых пользователей)
            </div>
            <div className="topic_all_user_bottom">
                Пользователей:
                <span style={{color: `#FF4D35`}}>Svop</span>,
                <span style={{color: `#100D00`}}>Kate</span>,
                <span style={{color: `#1785EA`}}>skzbd</span>,
                <span style={{color: `#EAB817`}}>David</span>
            </div>
        </div>
    )
}
export default TopicAllUser;
