import React from 'react';

import dateIcon from '../../../../assets/img/Date.svg';
import UserIcon from '../../../../assets/img/user.svg';
import LikeIcon from '../../../../assets/img/like-light.svg';
import ClockIcon from '../../../../assets/img/Clock.svg';
import EyeIcon from '../../../../assets/img/eye.svg';
import DislikeIcon from '../../../../assets/img/deslike-outlined.svg';

const ArticleOption = () => {
    return(
        <div className="article_option">
            <div className="article_option_left">
                <div className="article_option_date">
                    <img src={dateIcon} alt=""/>
                    <span>19.07.2020</span>
                </div>
                <div className="article_option_date">
                    <img src={UserIcon} alt=""/>
                    <span>Svop</span>
                </div>
                <div className="article_option_date">
                    <img src={LikeIcon} alt=""/>
                    <span>1 348</span>
                </div>
            </div>
            <div className="article_option_right">
                <div className="article_option_date">
                    <img src={ClockIcon} alt=""/>
                    <span>Чтение 4 минуты</span>
                </div>
                <div className="article_option_date">
                    <img src={EyeIcon} alt=""/>
                    <span>1 963 Просмотра</span>
                </div>
                <div className="article_option_date">
                    <img src={DislikeIcon} alt=""/>
                    <span>1 348</span>
                </div>
            </div>
        </div>
    )
}
export default ArticleOption;
