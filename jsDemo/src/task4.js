export const definePalindrome = (p) => {
    let checkValid = checkValidFourthTask(p);

    if (!checkValid.status) {
        if(typeof(p) == 'number') p = p.toString();// if p typeof number
        for (let i = 0; i < p.length; i+=1) {
            for (let j = 0; j < p.length; j+=1) {
                let pal = p.slice(i, j + i + 1); // get part of the number
                let palReverse = pal.split('').reverse().join(''); //reverse the part of the number

                if (pal == palReverse && pal.length > 1) return pal;
            }
        }
        return 0;
    } else {
        return checkValid;
    }
}

export const checkValidFourthTask = (p) => {
    if (p) {
        let reg = /^\d+$/;

        if (reg.test(p)) {
            return true;
        } else return {
            status: 'failed',
            reason: 'invalid'
        }
    } else return {
        status: 'failed',
        reason: 'empty'
    }
}