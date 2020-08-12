import React from 'react';


import {SearchForum, InviteB2BForum, CategoryBlockTop, KnowMoo, ActiveThems, Statistic} from "../../components/";


const Forum = () => {
    return(
        <div className="forum_content">
            <InviteB2BForum />
            <SearchForum />
            <div className="category_block_top_body wrapper">
                <CategoryBlockTop />
                <CategoryBlockTop />
                <KnowMoo />
                <CategoryBlockTop />
                <CategoryBlockTop />
            </div>
            <div className="active_thems wrapper">
                <ActiveThems />
                <ActiveThems />
            </div>
            <Statistic />
        </div>
    )
}
export default Forum;
