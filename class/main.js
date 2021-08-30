const firstTask = () => {
    class Train{
        nameStation = '';
        numberTrain = 1;
        time = '';
        
        constructor(name, time){
            this.nameStation = name;
            this.numberTrain = Math.floor(Math.random() * 100);
            this.time = time;
        }   
    };

    class RailwayStation{
        train =[];
        addTrain(trains){
            this.train = trains;
        }
        sortTrainsNum = (numberTrain) => { return (a, b) => a[numberTrain] > b[numberTrain] ? 1 : -1};
        
        sortTrainsName = (nameStation) => { return (a, b) => a[nameStation] > b[nameStation] ? 1 : -1};
    
        searchTrain(num){
            let flag = 0;
            for(let i = 0; i < this.train.length; i++) 
                if(this.train[i].numberTrain == num) { flag = i; }
                return flag;
        }
    }
    let train = [];
    let train_example = [];
    const nameStation = ['Одесса', 'Киев', 'Львов', 'Днепр', 'Харьков'];
    const time = ['18:00', '19:00', '12:00', '9:00', '14:00'];

    for(let i = 0; i < 5; i++){
        const random = Math.floor(Math.random() * nameStation.length);
        train[i] = new Train(nameStation[random], time[random]);
        const numTrain_example = train[i].numberTrain;
        train_example[i] = [nameStation[random] , numTrain_example, time[random]] 
    }
    console.log(train);
    console.log(train_example);
    alert(train_example);
    let railway1 = new RailwayStation();
    railway1.addTrain(train);

    let action = prompt("Отсортировать по номерам (1), Отсотрировать по названию (2), Найти поезд (3).");
        switch(action){
        case '1' : { 
            railway1.train.sort(railway1.sortTrainsNum('numberTrain'));
            console.log(railway1.train);
            break;}
        case '2' : { 
            railway1.train.sort(railway1.sortTrainsName('nameStation'));
            console.log(railway1.train);
                break; }
        case '3': { 
                let num = prompt('Введите номер поезда');
                if(railway1.searchTrain(num) === 0){
                    console.log('GOVNO');
                }
                else{
                let index = railway1.searchTrain(num);
                console.log(railway1.train[index]);
                break; }}   
            default: {
            }
        }
}
/* ============================================== */
const secondTask = () => {

    class Book{
        year = 0;
        author = '';
        title = '';
        category = '';
        static bookNumber = 0;
  
        constructor(y, a, t, c) {
            this.year = y;
            this.author = a;
            this.title = t;
            this.category = c;
        }
        getYear()  { return this.year; }
        getAuthor()  { return this.author; }
        getTitle()  { return this.title; }

        static count(book){
            Book.bookNumber += 1;
        }
    }
    class Library{

        book = [];

        findAuthor(auth){
         return  Library.filter(el => this.book[el].author === auth);
        }
        findYear(year){
            return  Library.filter(el => this.book[el].year === year);
        }
        findByTitle(category){
            return  Library.filter(el => this.book[el].title === category);
        }
        
        DeleteBookByBookNumber(num)
        {
            let book = Library.filter(el => this.book[el].bookNumber === num);
            if (book != null)
            {
                Library.Remove(book);
            }
        }
        findByNumber(num){
            return  Library.filter(el => this.book[el].bookNumber === num);
        }
    }

const book1 = new Book(2002, 'Jack Richer', 'Holly Shit', 'comedy');
const book2 =new Book(1996, 'Pavlo Tichina', 'Night Dream', 'drama');
}


