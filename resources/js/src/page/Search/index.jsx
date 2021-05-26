import React from 'react';

import {ArticleTop, SearchOption, SearchBody} from "../../components";

const Search = () => {
    return(
        <div className="search_section wrapper">
            <ArticleTop />
            <SearchOption />
            <SearchBody />
        </div>
    )
}
export default Search;
