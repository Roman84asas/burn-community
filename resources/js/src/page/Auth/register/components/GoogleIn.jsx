import React from 'react';

import GoogleIcon from '../../../../../../assets/img/google.svg'

const GoogleIn = () => {

    return(
        <button className="link_reg">
            <img src={GoogleIcon} alt="" className="googleIcon"/>
            <span>Регистрация через Google</span>
        </button>
    )
}
export default GoogleIn;
