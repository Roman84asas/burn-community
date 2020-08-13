import React from 'react';
import {NavLink} from "react-router-dom";

import IconCategory from '../../../../assets/img/messages-kat.svg'
import IconDown from '../../../../assets/img/down-darck.svg'
import IconUp from '../../../../assets/img/up.svg'
import IconAdmin from '../../../../assets/img/admin.jpg'

const CategoryBlock = () => {
    const [activeCategory, setActiveCategory] = React.useState('active');

    const ClickFromActiveCategory = () => {
        setActiveCategory(activeCategory === 'active' ? '' : 'active');
    }

    return(
        <div className={activeCategory === 'active' ? 'category_blocks_active' : 'category_blocks'}>
            <div className={activeCategory === 'active' ? 'category_blocks_top_title_active' : 'category_blocks_top_title'}>
                <h2 >Общий раздел</h2>
                <img src={activeCategory === 'active' ? IconDown : IconUp} alt="" className="icon_when" onClick={ClickFromActiveCategory}/>
            </div>
            <div className={activeCategory === 'active' ? 'category_blocks_top_body active': 'category_blocks_top_body'}>
                <div className="subcategory_block">
                    <div className="subcategory_block_top_icon">
                        <img src={IconCategory} alt=""/>
                    </div>
                    <div className="subcategory_block_top_subcategory">
                        <NavLink to='/category' className="subcategory_block_top_subcategory_title">Законы о запрете курения</NavLink>
                    </div>
                    <div className="subcategory_block_top_themes">
                        <div className="subcategory_block_top_themes_count">5</div>
                        <span>Тем</span>
                    </div>
                    <div className="subcategory_block_top_messages">
                        <div className="subcategory_block_top_themes_count">37</div>
                        <span>Сообщений</span>
                    </div>
                    <div className="subcategory_block_top_author">
                        <div className="subcategory_block_top_author_image">
                            <img src={IconAdmin} alt=""/>
                        </div>
                        <div className="subcategory_block_top_author_info">
                            <div className="subcategory_block_top_author_info_last_them">
                                Политика конфиденциальности важ ...
                            </div>
                            <div className="subcategory_block_top_author_info_date">
                                От <span className="subcategory_block_top_author_info_date_author" style={{color: 'red'}}>Svop</span>,
                                <span className="subcategory_block_top_author_info_date_author_date">15 Июля</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subcategory_block">
                    <div className="subcategory_block_top_icon">
                        <img src={IconCategory} alt=""/>
                    </div>
                    <div className="subcategory_block_top_subcategory">
                        <NavLink to='/category' className="subcategory_block_top_subcategory_title">Законы о запрете курения</NavLink>
                    </div>
                    <div className="subcategory_block_top_themes">
                        <div className="subcategory_block_top_themes_count">5</div>
                        <span>Тем</span>
                    </div>
                    <div className="subcategory_block_top_messages">
                        <div className="subcategory_block_top_themes_count">37</div>
                        <span>Сообщений</span>
                    </div>
                    <div className="subcategory_block_top_author">
                        <div className="subcategory_block_top_author_image">
                            <img src={IconAdmin} alt=""/>
                        </div>
                        <div className="subcategory_block_top_author_info">
                            <div className="subcategory_block_top_author_info_last_them">
                                Политика конфиденциальности важ ...
                            </div>
                            <div className="subcategory_block_top_author_info_date">
                                От <span className="subcategory_block_top_author_info_date_author" style={{color: 'red'}}>Svop</span>,
                                <span className="subcategory_block_top_author_info_date_author_date">15 Июля</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subcategory_block">
                    <div className="subcategory_block_top_icon">
                        <img src={IconCategory} alt=""/>
                    </div>
                    <div className="subcategory_block_top_subcategory">
                        <NavLink to='/category' className="subcategory_block_top_subcategory_title">Законы о запрете курения</NavLink>
                    </div>
                    <div className="subcategory_block_top_themes">
                        <div className="subcategory_block_top_themes_count">5</div>
                        <span>Тем</span>
                    </div>
                    <div className="subcategory_block_top_messages">
                        <div className="subcategory_block_top_themes_count">37</div>
                        <span>Сообщений</span>
                    </div>
                    <div className="subcategory_block_top_author">
                        <div className="subcategory_block_top_author_image">
                            <img src={IconAdmin} alt=""/>
                        </div>
                        <div className="subcategory_block_top_author_info">
                            <div className="subcategory_block_top_author_info_last_them">
                                Политика конфиденциальности важ ...
                            </div>
                            <div className="subcategory_block_top_author_info_date">
                                От <span className="subcategory_block_top_author_info_date_author" style={{color: 'red'}}>Svop</span>,
                                <span className="subcategory_block_top_author_info_date_author_date">15 Июля</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subcategory_block">
                    <div className="subcategory_block_top_icon">
                        <img src={IconCategory} alt=""/>
                    </div>
                    <div className="subcategory_block_top_subcategory">
                        <NavLink to='/category' className="subcategory_block_top_subcategory_title">Законы о запрете курения</NavLink>
                    </div>
                    <div className="subcategory_block_top_themes">
                        <div className="subcategory_block_top_themes_count">5</div>
                        <span>Тем</span>
                    </div>
                    <div className="subcategory_block_top_messages">
                        <div className="subcategory_block_top_themes_count">37</div>
                        <span>Сообщений</span>
                    </div>
                    <div className="subcategory_block_top_author">
                        <div className="subcategory_block_top_author_image">
                            <img src={IconAdmin} alt=""/>
                        </div>
                        <div className="subcategory_block_top_author_info">
                            <div className="subcategory_block_top_author_info_last_them">
                                Политика конфиденциальности важ ...
                            </div>
                            <div className="subcategory_block_top_author_info_date">
                                От <span className="subcategory_block_top_author_info_date_author" style={{color: 'red'}}>Svop</span>,
                                <span className="subcategory_block_top_author_info_date_author_date">15 Июля</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryBlock;
