import React from 'react';

import ProfileIcon from "../../../../assets/img/admin.jpg"
import LogoutProfileIcon from "../../../../assets/img/logout.svg"

const ProfileBody = () => {
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
                            <div className="profile_body_top_info_section_like">

                            </div>
                            <div className="profile_body_top_info_section_deslike">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileBody;
