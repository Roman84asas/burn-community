import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { fetchHome } from '../../redux/actions/home'

import {HomeSearch, InviteB2B, HomeAllArticlesAndInfo, KnowMoo, ArticlesSectionHome} from "../../components/";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHome())
    }, [dispatch])

    const {topicTop, topicLatest, topicWiMessage, topTags, users, articlesLatest } = useSelector(({ home }) => home.items)
    const  isLoading  = useSelector(({ home }) => home.isLoading)

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
            {isLoading ? <HomeAllArticlesAndInfo
                topicTop={topicTop}
                topicLatest={topicLatest}
                topicWiMessage={topicWiMessage}
                topTags={topTags}
                users={users}
            /> : "Загружается" }

            <KnowMoo />
            <ArticlesSectionHome articlesLatest={articlesLatest}/>
        </div>
    )
}
export default Home;
