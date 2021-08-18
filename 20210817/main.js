//======= TASK 1 =========
convertToRoman = (num) => {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let str = '';
  
    for (let i of Object.keys(roman)) {
      let q = Math.floor(num / roman[i]);
      /* console.log(i); */
      /* console.log(q); */
      num -= q * roman[i];
      /* console.log(num); */
      str += i.repeat(q);
    }
  
    return str;
  }
//======== TASK 2 =========
const converterTemperature = (valNum, first, second) => {
 //check correct input   
    if(first != 'c' && first != 'k' && first != 'f') {
     return console.log('Invalid data');
    }
    if(second != 'c' && second != 'k' && second != 'f') {
        return console.log('Invalid data');
       }
//result
    if(first == 'f'){
        return second == 'c' ? (valNum-32)/1.8 : ((valNum-32)/1.8)+273.15; 
    }
    if(first == 'c'){
        return second == 'f' ? (valNum*1.8)+32 : valNum+273.15;
    }
    if(first == 'k'){
        return second == 'f' ? ((valNum-273.15)*1.8)+32 : valNum-273.15;
    }
}