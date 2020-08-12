import React from "react";


const Statistic = () => {
    return(
        <div className="statistic_block wrapper">
            <div className="statistic_block_title">
                <h2>Статистика форума</h2>
            </div>
            <div className="statistic_block_body">
                <div className="statistic_block_content">
                    <div className="statistic_block_content_first">
                        <div className="statistic_block_content_first_desc">Пользователей</div>
                        <div className="statistic_block_content_first_count">1 975 708</div>
                    </div>
                    <div className="statistic_block_content_second">
                        <div className="statistic_block_content_second_desc">Максимум онлайн</div>
                        <div className="statistic_block_content_second_count">14 235</div>
                    </div>
                </div>
                <div className="statistic_block_content">
                    <div className="statistic_block_content_first">
                        <div className="statistic_block_content_first_desc">Пользователей</div>
                        <div className="statistic_block_content_first_count">1 975 708</div>
                    </div>
                    <div className="statistic_block_content_second">
                        <div className="statistic_block_content_second_desc">Постов</div>
                        <div className="statistic_block_content_second_count">235</div>
                    </div>
                </div>
                <div className="statistic_block_content">
                    <div className="statistic_block_content_first">
                        <div className="statistic_block_content_first_desc">Максимум онлайн</div>
                        <div className="statistic_block_content_first_count">14 235</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Statistic;
