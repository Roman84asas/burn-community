import React from 'react';


import FacebookIcon from '../../../../../../assets/img/facebook.svg'

const FacebookIn = () => {

    return(
        <button className="link_reg">
            <img src={FacebookIcon} alt="" className="fcIcon"/>
            <span>Регистрация через Facebook</span>
        </button>
    )
}
export default FacebookIn;
