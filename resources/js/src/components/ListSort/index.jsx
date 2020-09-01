import React from 'react';
import IconDown from "../../../../assets/img/down-darck.svg";


const ListSort = () => {
    return(
        <div className="lists_topics_top_sort">
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
            <ul className="lists_topics_top_sort_category">
                <li>сортировка</li>
                <img src={IconDown} alt=""/>
            </ul>
        </div>
    )
}
export default ListSort;
