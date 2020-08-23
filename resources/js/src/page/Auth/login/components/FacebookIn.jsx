import React from 'react';


import FacebookIcon from '../../../../../../assets/img/facebook.svg'

const FacebookIn = () => {

    return(
        <button className="link_in">
            <img src={FacebookIcon} alt="" className="fcIcon"/>
            <span>Войти через Facebook</span>
        </button>
    )
}
export default FacebookIn;
