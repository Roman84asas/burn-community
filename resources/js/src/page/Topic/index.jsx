import React from 'react';
import {ProfileTopInfo, SearchForum, TopBody, TopicMessage, TopicModerate, TopicPaginate, TopicAllUser, TopicTags} from "../../components";



const Topic = () => {
    return(
        <div className="topic wrapper">
            <ProfileTopInfo />
            <SearchForum />
            <TopBody />
            <TopicMessage />
            <div className="topic_moder">
                <TopicModerate />
                <TopicPaginate />
            </div>
            <TopicAllUser />
            <TopicTags />
        </div>
    )
}

export default Topic;
