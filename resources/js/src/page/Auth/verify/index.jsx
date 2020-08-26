import React from 'react';
import {Link} from "react-router-dom";

import ImgBottom from '../../../../../assets/img/Verify.jpg'

const Verify = () => {
    return(
        <div className="verify_page">
            <h2 className='verify_page_title'>Присоединяйтесь к BurnCommunity</h2>
            <div className="verify_page_description">
                Добро пожаловать новичек. Вы успешно прошли регистрацию в нашем сообществе. Можете зайти в Ваш аккаунт.
            </div>
            <div className="redirect_register">
                <Link className="register-link" to="/login">
                    OK
                </Link>
            </div>
            <img src={ImgBottom} alt=""/>
        </div>
    )
}
export default Verify;
