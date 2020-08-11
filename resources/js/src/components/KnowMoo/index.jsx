import React from "react";
import {NavLink} from "react-router-dom";



const KnowMoo = () => {

    return(
        <div className="km_card">
            <div className="wrapper">
                <div className="km_body">
                    <h2 className="km_title">У BurnComunity есть онлайн школа где вы можете получить знания об кальянной индустрии</h2>
                    <p className="km_description">Рыба текст всегда поможет, тут тоже необходим контент</p>
                    <div className="km_submits">
                        <NavLink to="/" className="km_invite">Узнать больше</NavLink>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default KnowMoo;
