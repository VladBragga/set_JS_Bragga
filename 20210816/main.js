//========== TASK_1 ===============
const generateRandom = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

const onClickGenerateLogin = () => {
    const PWD_MIN_LEN = 2;
    const PWD_MAX_LEN = 20;
    //const PWD_SYMS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-$#&~*!';
    const FIRST_LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const ANOTHER_SYMBOL = 'abcdefghijklmnopqrstuvwxyz0123456789';
   
    const FIRST_LETTER_LEN = FIRST_LETTER.length - 1;
    const ANOTHER_SYMBOL_LEN = ANOTHER_SYMBOL.length - 1;
    let password = '';

    const rand_letter = generateRandom(0, FIRST_LETTER_LEN);
    password = `${ password }${ FIRST_LETTER[rand_letter] }`;

    const pwdLen = generateRandom(PWD_MIN_LEN, PWD_MAX_LEN);
    for(let i = 1; i < pwdLen; i += 1){
        const rand = generateRandom(0, ANOTHER_SYMBOL_LEN);
        password = `${ password }${ ANOTHER_SYMBOL[rand] }`;
    }

    const randView = document.querySelector('.rand-login');

    randView.innerText = password;
    
}

document.querySelector('.rand-login-gen').addEventListener('click', onClickGenerateLogin);
//=================================================
//================= TASK_2 ========================

const onClickGeneratePwd = () => {
    const PWD_MIN_LEN = 8;
    const PWD_MAX_LEN = 12;
    const PWD_SYMS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_-+=';
    const SPECIAL = '~!@#$%^&*()_-+=';
    const PWD_SYMS_LEN = PWD_SYMS.length - 1;
    let password = '', UpperCase, LowerCase, isNumber, Special; 
    const pwdLen = generateRandom(PWD_MIN_LEN, PWD_MAX_LEN);
do{
        password = '';
        UpperCase = 0,
        LowerCase = 0,
        isNumber = 0,
        Special = 0; 
    for(let i = 0; i < pwdLen; i += 1){
        const rand = generateRandom(0, PWD_SYMS_LEN);
        password = `${ password }${ PWD_SYMS[rand] }`;

        if(PWD_SYMS[rand] == PWD_SYMS[rand].toUpperCase()) UpperCase++;

        if(PWD_SYMS[rand] == PWD_SYMS[rand].toLowerCase()) LowerCase++;

        if(/[0-9]/.test(PWD_SYMS[rand])) isNumber++;

        if(SPECIAL.includes(PWD_SYMS[rand])) Special++;
    }

}
    while(UpperCase == 0 || LowerCase == 0 || Special == 0 || isNumber == 0)

    const randView = document.querySelector('.rand-pwd');

    randView.innerText = password;
    
}
document.querySelector('.rand-pwd-gen').addEventListener('click', onClickGeneratePwd);

//=================================================
//================= TASK_3 ========================
 const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }