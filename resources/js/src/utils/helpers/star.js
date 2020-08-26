export default (integ) => {
    let star_clear = [];
    let star_half = [];
    let star_all = [];
    if(integ === 0) {
        for(let i = 0; i<5; i++){
            star_clear[i] = i;
        }
    } else if (integ > 0 && integ < 1) {
        for(let i = 0; i<4; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<1; i++){
            star_half[i] = i;
        }
    } else if (integ === 1 ) {
        for(let i = 0; i<4; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<1; i++){
            star_all[i] = i;
        }
    } else if (integ > 1 && integ < 2) {
        for(let i = 0; i<3; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<1; i++){
            star_all[i] = i;
        }
        for(let i = 0; i<1; i++){
            star_half[i] = i;
        }
    } else if (integ === 2) {
        for(let i = 0; i<3; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<2; i++){
            star_all[i] = i;
        }
    } else if (integ > 2 && integ < 3) {
        for(let i = 0; i<2; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<2; i++){
            star_all[i] = i;
        }
        for(let i = 0; i<1; i++){
            star_half[i] = i;
        }
    } else if (integ === 3) {
        for(let i = 0; i<2; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<3; i++){
            star_all[i] = i;
        }
    } else if (integ > 3 && integ < 4) {
        for(let i = 0; i<1; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<3; i++){
            star_all[i] = i;
        }
        for(let i = 0; i<1; i++){
            star_half[i] = i;
        }
    } else if (integ === 4) {
        for(let i = 0; i<1; i++){
            star_clear[i] = i;
        }
        for(let i = 0; i<4; i++){
            star_all[i] = i;
        }
    } else if (integ > 4 && integ < 5) {

        for (let i = 0; i < 4; i++) {
            star_all[i] = i;
        }
        for (let i = 0; i < 1; i++) {
            star_half[i] = i;
        }
    } else {
        for(let i = 0; i<5; i++){
            star_all[i] = i;
        }
    }
    return {star_clear, star_half, star_all};
}
