import React from 'react';

import GoogleIcon from '../../../../../../assets/img/google.svg'

const GoogleIn = () => {

    return(
        <button className="link_in">
            <img src={GoogleIcon} alt="" className="googleIcon"/>
            <span>Войти через Google</span>
        </button>
    )
}
export default GoogleIn;
