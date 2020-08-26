import React, {useEffect} from 'react';


import VKIcon from '../../../../../../assets/img/vkIn.svg'

const VKIn = () => {



    const HandelVKIn = () => {
        alert('VKIn');
    }
    return(
        <button className="link_reg" onClick={HandelVKIn}>
            <img src={VKIcon} alt="" className="vkIcon"/>
            <span>Регистрация через Vk</span>
        </button>
    )
}
export default VKIn;
