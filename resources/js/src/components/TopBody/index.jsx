import React from 'react';
import {TopicPaginate} from "../";

import AddminIcon from '../../../../assets/img/addmin.png';
import SelectIcon from '../../../../assets/img/selec.jpg';

const TopBody = () => {
    return(
        <div className="topic_body_info">

           <div className="topic_body_info_top">
               <div className="topic_body_info_top_title">
                   <div className="topic_body_info_top_title_first">
                       <img src={AddminIcon} alt=""/>
                       <div className="topic_body_info_top_title_first_info">
                           <div className="topic_body_info_top_title_first_info_title">
                               Новости от 23\07\2020
                           </div>
                           <div className="topic_body_info_top_title_first_info_descr">
                               Автор <span style={{color: '#FF4D35'}}>Admin</span>, 23 Июля 2020 в 16:05
                           </div>
                       </div>
                   </div>
                   <div className="topic_body_info_top_title_second">
                       <div className="topic_body_info_top_title_second_all_msg">Сообщений в теме 312</div>
                       <div className="topic_body_info_top_title_second_read">
                           <img src={SelectIcon} alt=""/>
                           Отметить эту тему прочитаной
                       </div>
                   </div>
               </div>
               <TopicPaginate />

               <div className="topic_body_info_top_body">
                   topic_body_info_top_body
               </div>
           </div>
        </div>
    )
}

export default TopBody;
