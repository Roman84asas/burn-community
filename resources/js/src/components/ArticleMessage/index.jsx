import React from 'react';

import ImageIcon from '../../../../assets/img/women3.jpg';

const ArticleMessage = () => {
    return(
        <div className='article_message'>
            <div className="article_message_img">
                <img src={ImageIcon} alt=""/>
            </div>
            <div className="article_message_body">
                <div className="article_message_body_info">
                    <span>KidsP</span>, 23 Июля 2020 в 16:05
                </div>
                <div className="article_message_body_message">
                    Ну вот и опять Минздрав напоминает о себе и  хочет плотно взяться против курения кальянов и вейпа ,
                    давайте порассуждаем как этом может отразится на Кальянных, смогут ли спокойно жить кальянные где
                    нет кухни бара а только кальян или же всем будет туго.
                </div>
            </div>
        </div>
    )
}

export default ArticleMessage;
