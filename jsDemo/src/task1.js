export const chessSize = (lenght, width, symbol) => {

    let checkValid = checkValidFirstTask(lenght, width, symbol);
    if(!checkValid.status){
    let chess = '';

        for (let i = 0; i < width; i+=1) {
            for (let j = 0; j < lenght; j+=1) {
                chess += (i+j) % 2 === 1 ? ' ' : symbol;
            }
            chess += '\n'
        }
    return chess;
    }
    else {
        return checkValid;
    }
}

export const checkValidFirstTask = (lenght, width, symbol) => {
    if (lenght && width && symbol) {
        let reg = /^\d+$/;

        //number or not
        if (reg.test(lenght) && reg.test(width) && parseInt(lenght) && parseInt(width) &&
        (lenght >= 1 && lenght <= 64) && (lenght >= 1 && lenght <= 64) && (symbol.length == 1)) {
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