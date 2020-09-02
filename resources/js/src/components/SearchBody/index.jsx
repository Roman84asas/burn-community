import React from 'react';

import {ListSort} from "../";

import AdninFoto from '../../../../assets/img/addmin.png'
import {Link} from "react-router-dom";

const SearchBody = () => {
    return(
        <div className="search_body">
            <div className="search_body_all">
                <div className="search_body_title">
                    <h2>НАЙДЕНО 98,848 РЕЗУЛЬТАТОВ</h2>
                </div>
                <ListSort />
                <div className="search_body_content">
                    <div className="search_body_link">
                        <div className="search_body_link_left">
                            <img src={AdninFoto} alt=""/>
                        </div>
                        <div className="search_body_link_right">
                            <Link to="/forum/category/subcategory/topic" className="search_body_link_right_link">Новости от 23\07\2020</Link>
                            <div className="search_body_link_right_info">
                                Автор <span style={{color: `#FF4D35`}}>Svop</span>, 23 Июля 2020 в 16:05
                            </div>
                            <div className="search_body_link_right_content">
                                Законопроект был внесен группой сенаторов в нижнюю палату парламента еще в 2017 году и
                                вызвал много споров и дискуссий. Теперь закон распространяет действующие требования и
                                ограничения к табачной продукции на всю никотиносодержащую продукцию. Речь также идет и
                                об административной ответственности за вовлечение несовершеннолетних в процесс ее потребления,
                                нарушение запрета на их использование в помещениях, на демонстрацию процесса и пр. Штрафы будут
                                такими же, которые <span>...</span>
                            </div>
                        </div>
                    </div>
                    <div className="search_body_link">
                        <div className="search_body_link_left">
                            <img src={AdninFoto} alt=""/>
                        </div>
                        <div className="search_body_link_right">
                            <Link to="/forum/category/subcategory/topic" className="search_body_link_right_link">Новости от 23\07\2020</Link>
                            <div className="search_body_link_right_info">
                                Автор <span style={{color: `#FF4D35`}}>Svop</span>, 23 Июля 2020 в 16:05
                            </div>
                            <div className="search_body_link_right_content">
                                Законопроект был внесен группой сенаторов в нижнюю палату парламента еще в 2017 году и
                                вызвал много споров и дискуссий. Теперь закон распространяет действующие требования и
                                ограничения к табачной продукции на всю никотиносодержащую продукцию. Речь также идет и
                                об административной ответственности за вовлечение несовершеннолетних в процесс ее потребления,
                                нарушение запрета на их использование в помещениях, на демонстрацию процесса и пр. Штрафы будут
                                такими же, которые <span>...</span>
                            </div>
                        </div>
                    </div>
                    <div className="search_body_link">
                        <div className="search_body_link_left">
                            <img src={AdninFoto} alt=""/>
                        </div>
                        <div className="search_body_link_right">
                            <Link to="/forum/category/subcategory/topic" className="search_body_link_right_link">Новости от 23\07\2020</Link>
                            <div className="search_body_link_right_info">
                                Автор <span style={{color: `#FF4D35`}}>Svop</span>, 23 Июля 2020 в 16:05
                            </div>
                            <div className="search_body_link_right_content">
                                Законопроект был внесен группой сенаторов в нижнюю палату парламента еще в 2017 году и
                                вызвал много споров и дискуссий. Теперь закон распространяет действующие требования и
                                ограничения к табачной продукции на всю никотиносодержащую продукцию. Речь также идет и
                                об административной ответственности за вовлечение несовершеннолетних в процесс ее потребления,
                                нарушение запрета на их использование в помещениях, на демонстрацию процесса и пр. Штрафы будут
                                такими же, которые <span>...</span>
                            </div>
                        </div>
                    </div>
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
            </div>
        </div>
    )
}
export default SearchBody;
