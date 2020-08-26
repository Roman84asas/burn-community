import React, {useEffect} from 'react';

import GoogleIcon from '../../../../../../assets/img/google.svg'

const GoogleIn = () => {
    useEffect(() => {
        const _onInit = auth2 => {
            console.log('init OK', auth2)
        }
        const _onError = err => {
            console.log('error', err)
        }
        window.gapi.load('auth2', function() {
            window.gapi.auth2.init({ // не забудьте указать ваш ключ в .env
                    client_id: "850343706290-10ortj00mftmgsvicfcolv6gm3s2uaor.apps.googleusercontent.com",
                })
                .then(_onInit, _onError)
        })
    }, [])
    const HandelGoogleIn = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {
            const profile = googleUser.getBasicProfile()

        })

    }

    return(
        <button className="link_reg" onClick={HandelGoogleIn}>
            <img src={GoogleIcon} alt="" className="googleIcon"/>
            <span>Регистрация через Google</span>
        </button>
    )
}
export default GoogleIn;
