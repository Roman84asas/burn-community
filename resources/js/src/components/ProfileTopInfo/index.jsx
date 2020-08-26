import React from 'react';

import MessageProfileIcon from "../../../../assets/img/message.svg"
import LogoutProfileIcon from "../../../../assets/img/logout.svg"

const ProfileTopInfo = () => {
    return(
        <div className="profile_top_info">
            <div className="profile_top_info_hello">
                Привет, <span>Admin</span>
            </div>
            <div className="profile_top_info_messages_and_logout">
                <div className="profile_top_info_messages" style={{ backgroundImage: `url(${MessageProfileIcon})` }}>
                    <div className="profile_top_info_messages_count"><span>17</span></div>
                </div>
                <div className="profile_top_info_logout">
                    <img src={LogoutProfileIcon} alt="Logout from profile"/>
                </div>
            </div>
        </div>
    )
}
export default ProfileTopInfo;
