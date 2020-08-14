import React from 'react';
import {ActiveThems, ListsTopic, InviteB2BForum, SearchCategory, Statistic} from "../../components";


const Subcategory = () => {
    return(
        <div className="category_contnent">
            <InviteB2BForum />
            <SearchCategory />
            <ListsTopic />
            <div className="active_thems wrapper sub">
                <ActiveThems />
                <ActiveThems />
            </div>
            <Statistic />
        </div>
    )
}

export default Subcategory;
