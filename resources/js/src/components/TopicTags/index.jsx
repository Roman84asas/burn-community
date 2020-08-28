import React from 'react';
import {Link} from "react-router-dom";


const TopicTags = () => {
    return(
        <div className="topic_tags">
            <div className="topic_tags_title">
                Теги
            </div>
            <div className="topic_tags_all">
                <Link to="/">#<span>Рыба</span></Link>
                <Link to="/">#<span>Всегда</span></Link>
                <Link to="/">#<span>Поможет</span></Link>
                <Link to="/">#<span>Всложную</span></Link>
                <Link to="/">#<span>Минуту</span></Link>
            </div>
        </div>
    )
}

export default TopicTags;
