import React from 'react';


import { homeApi } from '../../utils/fromApi'

import {HomeSearch, InviteB2B, HomeAllArticlesAndInfo, KnowMoo, ArticlesSectionHome, Footer} from "../../components/";


const Home = () => {
    const data = homeApi.getHome().then(({ data }) => { console.log(data) });
    return(
        <div className="home_content">
            <HomeSearch />
            <div className="home_info_content wrapper">
                <div className="info_content">
                    <div className="info_content_img1"></div>
                    <div className="info_content_title">Посети кальянную библиотеку</div>
                    <p className="info_content_description">Присоединяйтесь к самому крупному кальянному сообществу</p>
                </div>
                <div className="info_content">
                    <div className="info_content_img2"></div>
                    <div className="info_content_title">Задай вопрос на форуме</div>
                    <p className="info_content_description">Присоединяйтесь к самому крупному кальянному сообществу</p>
                </div>
                <div className="info_content">
                    <div className="info_content_img3"></div>
                    <div className="info_content_title">Получи помощь технической поддержки</div>
                    <p className="info_content_description">Присоединяйтесь к самому крупному кальянному сообществу</p>
                </div>
            </div>
            <InviteB2B />
            <HomeAllArticlesAndInfo />
            <KnowMoo />
            <ArticlesSectionHome />
        </div>
    )
}
export default Home;
