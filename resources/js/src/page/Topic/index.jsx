import React from 'react';
import {ProfileTopInfo, SearchForum, TopBody} from "../../components";



const Topic = () => {
    return(
        <div className="topic wrapper">
            <ProfileTopInfo />
            <SearchForum />
            <TopBody />
        </div>
    )
}

export default Topic;
