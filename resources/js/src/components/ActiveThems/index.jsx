import React from 'react';
import {NavLink} from "react-router-dom";

import IconAdmin from '../../../../assets/img/admin.jpg'

const ActiveThems = () => {
    return(
        <div className="active_them">
            <div className="active_them_title">
                <h2>Самые активные темы</h2>
            </div>
            <div className="active_them_body">
                <div className="active_them_body_user">
                    <div className="active_them_body_user_image">
                        <img src={IconAdmin} alt=""/>
                    </div>
                    <div className="active_them_body_user_thames">
                        <NavLink to="/forum">Новый законопроект против кальянов</NavLink>
                        <div className="active_them_body_user_thames_info">
                            От <span>SsOos</span>, <span>15 Июля</span>
                        </div>
                    </div>
                    <div className="active_them_body_user_all_info">
                        <div className="active_them_body_user_all_info_count">
                            5 428
                        </div>
                        <span>Сообщений</span>
                    </div>
                </div>
            </div>
            <div className="active_them_body">
                <div className="active_them_body_user">
                    <div className="active_them_body_user_image">
                        <img src={IconAdmin} alt=""/>
                    </div>
                    <div className="active_them_body_user_thames">
                        <NavLink to="/forum">Новый законопроект против кальянов</NavLink>
                        <div className="active_them_body_user_thames_info">
                            От <span>SsOos</span>, <span>15 Июля</span>
                        </div>
                    </div>
                    <div className="active_them_body_user_all_info">
                        <div className="active_them_body_user_all_info_count">
                            5 428
                        </div>
                        <span>Сообщений</span>
                    </div>
                </div>
            </div>
            <div className="active_them_body">
                <div className="active_them_body_user">
                    <div className="active_them_body_user_image">
                        <img src={IconAdmin} alt=""/>
                    </div>
                    <div className="active_them_body_user_thames">
                        <NavLink to="/forum">Новый законопроект против кальянов</NavLink>
                        <div className="active_them_body_user_thames_info">
                            От <span>SsOos</span>, <span>15 Июля</span>
                        </div>
                    </div>
                    <div className="active_them_body_user_all_info">
                        <div className="active_them_body_user_all_info_count">
                            5 428
                        </div>
                        <span>Сообщений</span>
                    </div>
                </div>
            </div>
            <div className="active_them_body">
                <div className="active_them_body_user">
                    <div className="active_them_body_user_image">
                        <img src={IconAdmin} alt=""/>
                    </div>
                    <div className="active_them_body_user_thames">
                        <NavLink to="/forum">Новый законопроект против кальянов</NavLink>
                        <div className="active_them_body_user_thames_info">
                            От <span>SsOos</span>, <span>15 Июля</span>
                        </div>
                    </div>
                    <div className="active_them_body_user_all_info">
                        <div className="active_them_body_user_all_info_count">
                            5 428
                        </div>
                        <span>Сообщений</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ActiveThems;
