import React from 'react';


const TopicPaginate = () => {
    const HandleButtonUpdateTopic = () =>{alert('Изменить')}
    const HandleButtonCreateTopic = () =>{alert('Создать тему')}
    const HandleButtonAnswerTopic = () =>{alert('Ответить')}

    return(
        <div className="topic_body_paginate_sort">
            <div className="topic_body_paginate_sort_number_topics">
                <div className="sort_numbers_topic_body_paginate">
                    <div className="active">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <span>...</span>
                    <div>8</div>
                </div>
                <div className="topic_body_paginate_moo">
                    Далее
                    <div>»</div>
                </div>
                <div className="topic_body_paginate_all">
                    Страница 1 из 8
                </div>
            </div>
            <div className="topic_body_paginate_buttons">
                <div className="topic_body_paginate_buttons_ucq" onClick={HandleButtonUpdateTopic}>Изменить</div>
                <div className="topic_body_paginate_buttons_ucq" onClick={HandleButtonCreateTopic}>Создать тему</div>
                <div className="topic_body_paginate_buttons_ucq" onClick={HandleButtonAnswerTopic}>Ответить</div>
            </div>
        </div>
    )
}

export default TopicPaginate;
