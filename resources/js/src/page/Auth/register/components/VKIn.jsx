import React from 'react';


import VKIcon from '../../../../../../assets/img/vkIn.svg'

const VKIn = () => {

    return(
        <button className="link_reg">
            <img src={VKIcon} alt="" className="vkIcon"/>
            <span>Регистрация через Vk</span>
        </button>
    )
}
export default VKIn;
