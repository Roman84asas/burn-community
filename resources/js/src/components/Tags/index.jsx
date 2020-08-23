import React from 'react';
import {NavLink} from "react-router-dom";



const Tags = ({tags, isLoading}) => {

    return(
        <div className="tags_all">
            <h2 className="tags_title">Популярные тэги</h2>
            <div className="tags">
                {
                    tags.map((tag) => (
                        <NavLink to={`/tags/${tag.id}`} className="tag" key={`${tag.id}_${tag.name}`}>{tag.name}</NavLink>
                    ))
                }

            </div>
        </div>
    )
};

export default Tags;
