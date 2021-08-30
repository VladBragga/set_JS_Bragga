export const envelopes = (a, b) => {
    let checkValid = checkValidSecondTask(a, b);

    if (!checkValid.status) {
        let width_a = parseFloat(a.width),
            height_a = parseFloat(a.height),
            width_b = parseFloat(b.width),
            height_b = parseFloat(b.height);

        if (width_a < width_b && height_a < height_b || width_a < height_b && height_a < width_b) {
            return 1;
        } else if (width_a > width_b && height_a > height_b || width_a > height_b && height_a > width_b) {
            return 2;
        } else {
            return 0;
        }
    } else {
        return checkValid;
    }
}


export const checkValidSecondTask = (a, b) => {
    if (a.width && a.height && b.width && b.height) {
        let reg = /^([0-9]*[.])?[0-9]+$/;

        if ((reg.test(a.width)) && (reg.test(b.width)) && (reg.test(a.height)) &&
         (reg.test(b.height)) && (parseInt(a.width)) && (parseInt(b.width)) && 
         (parseInt(a.height)) && (parseInt(b.height)) && ((a.width > 0 && a.width <= 1000) 
         && (a.height > 0 && a.height <= 1000) && (b.height > 0 && b.height <= 1000) &&
         (b.width > 0 && b.width <= 1000))) {
            return true;
        } 
        else return {
            status: 'failed',
            reason: 'invalid'
        }
    } 
    else return {
        status: 'failed',
        reason: 'empty'
    }
}