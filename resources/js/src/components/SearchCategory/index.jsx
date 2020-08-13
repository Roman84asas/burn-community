import React from 'react';


import Right from '../../../../assets/img/rigth.svg'
import {NavLink} from "react-router-dom";


const SearchCategory = () => {
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
        <div className="breadcrumbs_and_search_cat">
            <div className="breadcrumbs_and_search_body_cat wrapper">
                <div className="breadcrumbs_cat">
                    <NavLink to="/">Главная</NavLink>
                    <img src={Right} alt="" className="breadcrumbsz_separator_cat"/>
                    <NavLink to="/forum">Форум</NavLink>
                    <img src={Right} alt="" className="breadcrumbsz_separator_cat"/>
                    <NavLink to="/category">О запрете кальяна</NavLink>
                </div>
                <div className="block_sub_create">
                    <div className="search_forum_cat">
                        <input type="text" placeholder="Поиск по форуму" value={inputValue} onChange={handelChange}  className="home_search_input_block_cat" />
                        <input type="submit" value="" className="search_home_submit_cat" onClick={clickSearchForm}/>
                    </div>
                    <NavLink to="/" className="create_them">Создать тему</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SearchCategory;
