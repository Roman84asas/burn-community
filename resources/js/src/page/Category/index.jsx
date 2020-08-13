import React from 'react';
import {ActiveThems, CategoryBlock, InviteB2BForum, SearchCategory, Statistic} from "../../components";


const Category = () => {
    return(
            <div className="category_contnent">
                <InviteB2BForum />
                <SearchCategory />
                <div className="category_blocks_top_body wrapper">
                    <CategoryBlock />
                </div>
                <div className="active_thems wrapper">
                    <ActiveThems />
                    <ActiveThems />
                </div>
                <Statistic />
            </div>
        )
}

export default Category;
