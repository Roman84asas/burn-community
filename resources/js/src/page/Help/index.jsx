import React, {useState} from 'react';


const Help = () => {
    const [inputValue, SetValue] = useState("");

    const handleChange = (e) => {
        SetValue(e.target.value);
    }
    const clickSearchForm = (e) => {
        e.preventDefault();
        alert('Содержание формы: ' + inputValue)
        SetValue("");
    }
    return(
        <div className="help_content ">
            <div className="help_content_body wrapper">
                <h2 className="help_content_title">Получи помощь технической поддержки</h2>
                <div className="help_content_search">
                    <input type="text" placeholder="Поиск по сообществу" value={inputValue} onChange={handleChange}  className="search_option_input_block" />
                    <input type="submit" value="" className="search_option_submit" onClick={clickSearchForm}/>
                </div>
            </div>
        </div>
    )
}
export default Help;
