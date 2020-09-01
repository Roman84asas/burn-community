import React from 'react';
import {LinkTopic} from "../";

import SelectIcon from '../../../../assets/img/selec.jpg';
import {ListSort} from "../";


const ListsTopic = () => {
    return(
        <div className="lists_topics wrapper">
            <div className="lists_topics_all_body">
                <div className="lists_topics_top">
                    <h2>Законы о запрете курения</h2>
                    <div className="lists_topics_top_content">
                        <div className="lists_topics_top_description">
                            Обсуждения закона о запрете курения кальяна в общественных местах
                        </div>
                        <div className="lists_topics_top_check">
                            <img src={SelectIcon} alt="Select icon"/>
                            <span>Отметить этот форум прочитанным</span>
                        </div>
                    </div>
                </div>
                <ListSort />
                <div className="lists_topics_body">
                    <LinkTopic/>
                </div>
            </div>
            <div className="lists_topics_bottom_sort">
                <div className="lists_topics_top_sort_number_topics">
                    <div className="sort_numbers_topics">
                        <div className="active">1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <span>...</span>
                        <div>8</div>
                    </div>
                    <div className="sort_numbers_topics_moo">
                        Далее
                        <div>»</div>
                    </div>
                    <div className="sort_numbers_topics_all">
                        Страница 1 из 8
                    </div>
                </div>
                <div className="lists_topics_top_check">
                    <img src={SelectIcon} alt="Select icon"/>
                    <span>Отметить этот форум прочитанным</span>
                </div>
            </div>
        </div>
    )
}

export default ListsTopic;
