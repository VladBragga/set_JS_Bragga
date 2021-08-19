//======= TASK 1 =========
const firtMeeting = () => {

    const s=[
        { name: 'Fred', surname: 'Corwill'},
        { name: 'Wilfred', surname:  'Corwill'},
        { name:'Barney', surname: 'Tornbull'},
        { name:'Betty', surname: 'Tornbull'},
        { name:'Bjon', surname: 'Tornbull'},
        { name:'Raphael', surname: 'Corwill'},
        { name:'Alfred', surname: 'Corwill'} 
    ];

    s.sort(function(a, b){

        const surnameA=a.surname;
        const surnameB=b.surname;
        const nameA=a.name;
        const nameB=b.name;

        if (surnameA < surnameB)  return -1;
        if (surnameA > surnameB)  return 1;
        if(surnameA === surnameB){
            if (nameA < nameB)  return -1;
            if (nameA > nameB)  return 1;
        }
        return 0; // Никакой сортировки
    })

   s.map((el) => {
      el.name = el.name.toUpperCase();
      el.surname = el.surname.toUpperCase();
  });

  let ResultMeeting = '';

    for(i of Object.keys(s)){
        ResultMeeting += ' ('+`${s[i].name}`+','+`${s[i].surname}`+')';
        
    }
    console.log(ResultMeeting);
}

//======= TASK 2 =========
const meeting = (array, kol) => {
    let arr = array;
    const result = [arr.length];
       result.push(0),
       need = kol;
    let agent, chairs_here, difference;
    const reducer = (acc, cur) => acc + cur;
  
  if(need == 0) console.log("Game on!");
    else{
    arr.forEach(function(item, i, arr) {
      if(result.reduce(reducer) == need)
         {  return 0; }
      agent = item[0].length;
      chairs_here = item[1];
      difference = chairs_here - agent;
      if(difference == 0 || difference < 0){ // ветка нет стульев
          result[i] = 0;}
      if(difference > 0){ // ветка есть стулья
        difference > need ? result[i] = need : result[i] = difference; }
    });
  }
        if(result.reduce(reducer) < need)   console.log("Not Enough!");
        if(result.reduce(reducer) == need)  console.log(result);
  };

//======= TASK 3 =========

const ShortestDistance = (array) => {
    const letter = {
        1 : 'A',
        2 : 'B',
        3 : 'C',
        4 : 'D',
        5 : 'E',
        6 : 'F',
        7 : 'G'
    }
    let position = array;
    const positionLen = position.length;

    let MasMinus1 = [],
        MasMinus2 = [],
        minDistance = [];

   let flag = 0, x = 0, firstPoint, secondPoint;
   minDistanceValue = Math.abs(position[0][0] - position[1][0]) + Math.abs(position[0][1] - position[1][1]);
  
    while(flag !== positionLen-1){
     for(let i = flag; i < positionLen-1; i++){
            MasMinus1[x] = Math.abs(position[flag][0] - position[i+1][0]);
            MasMinus2[x] = Math.abs(position[flag][1] - position[i+1][1]);
            minDistance[x] = MasMinus1[x] + MasMinus2[x];  
            if(minDistanceValue > minDistance[x]){
                firstPoint = flag+1;
                secondPoint = i+2;
                minDistanceValue = minDistance[x];
            }                         
            x++;  
        }
        flag++;
    }
    console.log('Shortest way - '+letter[firstPoint],letter[secondPoint], array[firstPoint-1], array[secondPoint-1]);

}
