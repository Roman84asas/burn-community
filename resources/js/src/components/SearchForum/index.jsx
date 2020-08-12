import React from 'react';


import Right from '../../../../assets/img/rigth.svg'
import {NavLink} from "react-router-dom";


const SearchForum = () => {
    const [inputValue, SetValue] = React.useState("");
    const handelChange = (e) => {
        SetValue(e.target.value);
    }
    const clickSearchForm = (e) => {
        alert('Содержание формы: ' + inputValue)
        SetValue("");
        e.preventDefault();
    }

    return(
        <div className="breadcrumbs_and_search">
            <div className="breadcrumbs_and_search_body wrapper">
                <div className="breadcrumbs">
                    <NavLink to="/">Главная</NavLink>
                    <img src={Right} alt="" className="breadcrumbsz_separator"/>
                    <NavLink to="/forum">Форум</NavLink>
                </div>
                <div className="search_forum">
                    <input type="text" placeholder="Поиск по форуму" value={inputValue} onChange={handelChange}  className="home_search_input_block" />
                    <input type="submit" value="" className="search_home_submit" onClick={clickSearchForm}/>
                </div>
            </div>
        </div>
    )
}

export default SearchForum;
