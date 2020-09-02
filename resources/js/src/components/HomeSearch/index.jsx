import React, {useState} from "react";


import UsersIcon from '../../../../assets/img/users.svg'
import OnlineIcon from '../../../../assets/img/online.svg'
import MessagesIcon from '../../../../assets/img/jam_messages.svg'

const HomeSearch = () => {
    const [inputValue, SetValue] = useState("");
    const handeChange = (e) => {
        SetValue(e.target.value);
    }
    const clickSearchForm = (e) => {
        alert('Содержание формы: ' + inputValue)
        SetValue("");
        e.preventDefault();
    }
    return(
        <div className="home_search">
            <div className="wrapper">
                <div className="home_search_block">
                    <h1 className="home_search_title">Сообщество курильщиков</h1>
                    <span className="home_search_description">
                        Присоединяйтесь к самому крупному кальянному сообществу.<br/>
                        Мы создаём уникальную площадку, где каждый любитель<br/>
                        и профессионал кальянной индустрии найдет полезную информацию.
                    </span>
                    <div className="home_search_statistic">
                        <div className="home_search_statistic_users">
                            <img src={UsersIcon} alt="Участников форума курильщиков"/>
                            <div className="users_search_statistic">
                                <span>936.245</span> участников
                            </div>
                        </div>
                        <div className="home_search_statistic_online">
                            <img src={OnlineIcon} alt="Пользователей онлайн"/>
                            <div className="online_search_statistic">
                                <span>1.245</span> пользователей онлайн
                            </div>
                        </div>
                        <div className="home_search_statistic_messages">
                            <img src={MessagesIcon} alt="Всего сообщений"/>
                            <div className="messages_search_statistic">
                                <span>1.245.546</span> сообщений
                            </div>
                        </div>
                    </div>
                    <div className="home_search_input">
                        <input type="text" placeholder="Поиск по сообществу" value={inputValue} onChange={handeChange}  className="home_search_input_block" />
                        <input type="submit" value="" className="search_home_submit" onClick={clickSearchForm}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSearch;
