import React, {useState} from 'react';

import KrestIcon from '../../../../assets/img/krest.svg'

const SearchOption = () => {
    const [inputValue, SetValue] = useState("");
    const [showOption, SetShowOption] = useState(true);

    const handleChange = (e) => {
        SetValue(e.target.value);
    }
    const clickSearchForm = (e) => {
        e.preventDefault();
        alert('Содержание формы: ' + inputValue)
        SetValue("");
    }
    const clickShowOption = () => {
        SetShowOption(!showOption);
    }
    return(
        <div className="search_option">
            <h2 className="search_option_title">Искать в сообществе</h2>
            <div className="search_option_input">
                <input type="text" placeholder="Поиск по сообществу" value={inputValue} onChange={handleChange}  className="search_option_input_block" />
                <input type="submit" value="" className="search_option_submit" onClick={clickSearchForm}/>
                </div>
            <div className="search_option_content">
                <div className={showOption ? `search_option_content_title active` : `search_option_content_title`} onClick={clickShowOption}>
                    <img src={KrestIcon} alt=""/>
                    <span>Дополнительные возможности поиска</span>
                </div>
                <div className={showOption ? `search_option_content_body` : `search_option_content_body option_active`}>
                    Option
                    <div className="search_option_content_body_search">
                        <div className="search_option_content_body_search_button" onClick={clickShowOption}>
                            Искать в содержании
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchOption;
