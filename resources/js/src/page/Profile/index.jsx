import React from 'react';

import {SearchForum, ProfileTopInfo, ProfileBody} from "../../components";

const Profile = () => {
    return(
        <div className="profile wrapper">
            <ProfileTopInfo />
            <SearchForum />
            <ProfileBody />
        </div>
    )
}
export default Profile;
