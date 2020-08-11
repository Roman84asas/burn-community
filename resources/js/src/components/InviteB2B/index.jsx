import React from "react";
import {NavLink} from "react-router-dom";



const InviteB2B = () => {

    return(
        <div className="invite_card">
            <div className="wrapper">
                <div className="invite_body">
                    <h2 className="invite_body_title">Для Вас кальянная индустрия - источник заработка или вы планируете начать бизнес в данной сфере ?</h2>
                    <p className="invite_body_description">Получите персональное приглашение в закрытый раздел Burn Community для B2b </p>
                    <div className="invite_body_submits">
                        <NavLink to="/" className="invite_body_invite">Получить приглашение</NavLink>
                        <NavLink to="/" className="invite_body_submit">Войти</NavLink>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default InviteB2B;
