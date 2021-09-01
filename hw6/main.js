/* Составить описание класса для представления времени.
 Предусмотреть возможности установки времени и изменения 
 его отдельных полей (час, минута, секунда) с проверкой 
 допустимости вводимых значений. Создать методы изменения 
времени на заданное количество часов, минут и секунд. */
class Time{ 
    #hours = null;
    #minutes = null;
    #seconds = null;

    setTime(h, m, s) {
        if(h > 0 && h < 24 && m > 0 && m < 60 && s > 0 && s < 60){
        this.#hours = h;
        this.#minutes = m;
        this.#seconds = s;
        }
        else return 0;
 }
 set hours(value) { if (value < 24 && value > 0) {this.#hours = value;}
    else{
        console.log("Invalid hours. Hours wasn't changed");
    } 
}
get hoursValue() { return this.#hours; }
get minutesValue() { return this.#minutes; }
get secondsValue() { return this.#seconds; }

 set minutes(value) { if (value < 60 && value > 0) {this.#minutes = value; }
    else{
        console.log("Invalid minutes. Minutes wasn't changed");
    }
 }

 set seconds(value) { if (value < 60 && value > 0) {this.#seconds = value; }
    else{
        console.log("Invalid seconds. Seconds wasn't changed");
    } 
} 
}   

time1 = new Time();
time2 = new Time();
/* FALSE TIME */
if(time1.setTime(24, 56, 34) === 0) console.log(' 1. invalid create') 
else {
    time1.hours = 12;
    time1.minutes = 21;
    time1.seconds = 42;
    console.log(time1); 
}

/* TRUE TIME */
if(time2.setTime(21, 46, 59) === 0) console.log('2. invalid create') 
else {
    console.log('2. Было - ', time2); 
    time2.hours = 12;
    time2.minutes = 21;
    time2.seconds = 121;
    console.log('2. Стало - ', time2); 
}

