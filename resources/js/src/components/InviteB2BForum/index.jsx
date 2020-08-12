import React from "react";
import {NavLink} from "react-router-dom";



const InviteB2BForum = () => {

    return(
        <div className="invite_card_forum">
                <div className="invite_body_forum">
                    <h2 className="invite_body_title_forum">Для Вас кальянная индустрия - источник заработка или вы планируете начать бизнес в данной сфере ?</h2>
                    <p className="invite_body_description_forum">Получите персональное приглашение в закрытый раздел Burn Community для B2b </p>
                    <div className="invite_body_submits_forum">
                        <NavLink to="/" className="invite_body_invite_forum">Получить приглашение</NavLink>
                        <NavLink to="/" className="invite_body_submit_forum">Войти</NavLink>
                    </div>
                </div>
        </div>

    )
}

export default InviteB2BForum;
