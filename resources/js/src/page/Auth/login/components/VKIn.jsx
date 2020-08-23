import React from 'react';


import VKIcon from '../../../../../../assets/img/vkIn.svg'

const VKIn = () => {

    return(
        <button className="link_in">
            <img src={VKIcon} alt="" className="vkIcon"/>
            <span>Войти через Vk</span>
        </button>
    )
}
export default VKIn;
