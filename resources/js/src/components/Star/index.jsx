import React from 'react';


import star from '../../utils/helpers/star';

import starClear from '../../../../assets/img/star-clear.svg';
import starHalf from '../../../../assets/img/star-half.svg';
import starAll from '../../../../assets/img/star-all.svg';

const Star = ({integ}) => {
    const {star_clear, star_half, star_all} = star(integ);
    return(
        <div className="profile_body_all_section_params_number">
            {
                star_all.map((e) =>(
                    <img src={starAll} alt="" key={e}/>
                ))

            }
            {
                star_half.map((e) =>(
                    <img src={starHalf} alt="" key={e}/>
                ))

            }
            {

                star_clear.map((e) =>(
                    <img src={starClear} alt="" key={e}/>
                ))
            }

        </div>
    )
}
export default Star;
