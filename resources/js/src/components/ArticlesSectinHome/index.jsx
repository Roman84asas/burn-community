import React from 'react';
import TestImg from '../../../../assets/img/test.jpg';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const ArticlesSectionHome = ({articlesLatest}) => {
    const  isLoading  = useSelector(({ home }) => home.isLoading)
    let articles;
    if(articlesLatest !== undefined && articlesLatest !== null) {
        articles = articlesLatest.data
    }


    return(
        <div className="home_articles_section">
            <div className="home_articles_section_body wrapper">
                <h3 className="home_articles_section_title">
                    Интересные статьи
                </h3>
                <div className="home_articles_section_carts">
                    { isLoading ?
                        articles.map((article) => (
                            <NavLink /*to={`/${article.slug}`}*/ to="/article" className="home_articles_section_cart" style={{backgroundImage: `url('${TestImg}')` }} key={`${article.id}_${article.b2b}`}>
                                <div className="home_articles_section_cart_body">
                                    <h2 className="home_articles_section_cart_title">{article.title}</h2>
                                    <p className="home_articles_section_cart_description">
                                        {article.description}...
                                    </p>
                                </div>
                            </NavLink>
                        )) : "Загружается"
                    }
                </div>
            </div>
        </div>
    )
};

export default ArticlesSectionHome;
