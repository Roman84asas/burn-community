import React from 'react';
import {ArticleTop, ArticleMessage, ListSort, ArticleOption, InviteSection} from "../../components/";

import ArticleImage from '../../../../assets/img/article.jpg';
import LikeImage from '../../../../assets/img/like-light.svg';
import DisLikeImage from '../../../../assets/img/deslike-outlined.svg';
import ShareImage from '../../../../assets/img/share.svg';
import AdminImage from '../../../../assets/img/addmin.png';

const Article = () => {
    const [inputValue, SetValue] = React.useState("");
    const handelChange = (e) => {
        SetValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Содержание формы: ' + inputValue)
        SetValue("");
    }
    console.log(inputValue);
    return(
        <div className='article wrapper'>
            <ArticleTop />
            <div className="article_content">
                <div className="article_body_left">
                    <div className="article_body">
                        <h2 className="article_body_title">Получи помощь технической поддержки</h2>
                        <img src={ArticleImage} alt="" className="article_body_image"/>
                        <div className="article_body_text">
                            <p>С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации
                                направлений прогрессивного развития. Равным образом реализация намеченных плановых заданий позволяет оценить значение дальнейших
                                направлений развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции играет важную роль в формировании
                                форм развития.</p>

                            <p>Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание систем
                                массового участия. Равным образом консультация с широким активом позволяет выполнять важные задания по разработке соответствующий условий
                                активизации. Задача организации, в особенности же укрепление и развитие структуры позволяет выполнять важные задания по разработке систем
                                массового участия. Идейные соображения высшего порядка,
                                а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание дальнейших направлений развития.</p>
                        </div>
                        <div className="article_body_like_share">
                            <div className="article_body_like">
                                <div className="article_body_like_left">
                                    <img src={LikeImage} alt=""/>
                                    <span>1 348</span>
                                </div>
                                <div className="article_body_like_right">
                                    <img src={DisLikeImage} alt=""/>
                                    <span>48</span>
                                </div>
                            </div>
                            <div className="article_body_share">
                                <img src={ShareImage} alt=""/>
                                <span>Поделится</span>
                            </div>
                        </div>
                    </div>
                    <div className="article_body_message">
                        <div className="article_body_message_comments">
                            Комментарии <span>(36)</span>
                        </div>
                        <div className="article_body_message_content">
                            <div className="article_body_message_content_input">
                                <img src={AdminImage} alt="" className="article_body_message_content_input_image"/>
                                <form onSubmit={handleSubmit} className="article_body_message_content_input_inp_form">
                                    <input
                                        type="text"
                                        placeholder="Введите текст сообщения"
                                        value={inputValue}
                                        onChange={handelChange}
                                        className="article_body_message_content_input_inp"
                                    />
                                </form>
                            </div>
                            <ArticleMessage />
                            <ArticleMessage />
                            <ArticleMessage />
                            <ArticleMessage />
                            <ArticleMessage />
                            <ArticleMessage />
                        </div>

                    </div>
                    <div className="sort_article">
                        <ListSort />
                    </div>
                </div>
                <div className="article_body_right">
                    <ArticleOption />
                    <InviteSection />
                </div>
            </div>
        </div>
    )
}
export default Article;
