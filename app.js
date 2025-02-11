// const isCofee=confirm('Siz kofe ichesizbi?')
// console.log(isCofee);
// if (isCofee){
//     console.log("bul sizdin Kofe");
// }else{
//     console.log("kechiresiz bizde kofe gana bar");
// }
// const color=prompt('Светофорго тус жазыныз')
//     if (color==="кызыл"){
//        console.log("токтонуз"); 
//     }else if (color==="сары"){
//         console.log("даярданыныз");
//     }else if (color==="жашыл"){
//         console.log("Отунуз");
//     }else {
//         console.log ("Svetofordo ${color} tys jok");
//     }
// true || false=true
// true || true = true
// false || false = false
//true && false = false
//true && true = true
//fallse && false = false
// (true && false) || (true && true)

// const total=1000;
// const cash= true;
// const cashAmount=800;
// const card=true;
// const cardAmount=1500;
// console.log(totalAmount);

// const total1=+prompt("Жалпы канча болду?");
// const cash1=confirm("Сизде накталай акча барбы?");
// const cashAmount1=+prompt("Сизде канча накталай акча бар")
// const card1=confirm("Cизде карта барбы?");
// const cardAmount1=+prompt("Картанда канча акча бар?");
// const totalAmount = cashAmount1+cardAmount1
// if ((cash1 && cashAmount1>total1) || (card1 && cardAmount1>total1)){
//     console.log("сиз толой аласыз");
// }else if (totalAmount>total1){
//     console.log("сиз толой аласыз"+totalAmount);
// }else{
//     console.log("sorry");
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) break; // 3кө жеткенде токтойт
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) continue; // 3тү өткөрүп жиберет
//     console.log(i);
// }

// // Колдонуучудан жыл, ай жана күн алуу
// const year = parseInt(prompt("Жыл жазыңыз (мисалы, 2025):"));
// const month = parseInt(prompt("Ай жазыңыз (1-12):")) - 1; // Айды 0 негизинде алуу керек
// const day = parseInt(prompt("Күн жазыңыз (1-31):"));

// if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
//     // Колдонуучунун киргизген маалыматы менен Date объектин түзүү
//     const date = new Date(year, month, day);

//     // Апта күндөрүнүн аттарынын массиви
//     const daysOfWeek = [
//         "Жекшемби", 
//         "Дүйшөмбү", 
//         "Шейшемби", 
//         "Шаршемби", 
//         "Бейшемби", 
//         "Жума", 
//         "Ишемби"
//     ];

//     // Текшерүү: Күн туурабы
//     if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
//         const dayName = daysOfWeek[date.getDay()]; // Апта күнүнүн атын алуу
//         console.log(`${year}-${month + 1}-${day} күнү: ${dayName}`);
//     } else {
//         console.log("Туура эмес күн киргиздиңиз!");
//     }
// } else {
//     console.log("Туура эмес маалымат киргиздиңиз!");
// }

// const actor={
//     name:`Bred Pit`,
//     age: 50,
//     siblings:{
//         sister:{
//         name:`Rose`,
//         age: 35,
//         },
//         brother:{
//         name: `Nick`,
//         age: 30,  
//         }
//     },
//         getInfo:function (){
//             const message= `My favorite actor is ${this.name}. He is ${this.age} years old. He's ${this.siblings.sister.name}`
//         }
// }

// const numbers = [12, 55, 33, 76, 99];
// const newNumbers = numbers.map(num => num * 10);
// console.log(newNumbers);

// const drinks=[`water`, `fanta`, `asu`, `beer`];
// const newDrinks=drinks.map(word=>word.length**2);
// console.log(newDrinks);

// const Drinks=drinks.filter(word=>word.length>3);
// console.log(Drinks);

// const myDrinks=drinks.reduce((el, summa)=>(el+length.summa));
// console.log(myDrinks);

// const users=[
//     {name:"John", age:17, level:"Junior", salary:1000},
//     {name:"Miriam", age:27, level:"Senior", salary:10000},
//     {name:"Oscar", age:37, level:"Middle", salary:7000},
//     {name:"Max", age:22, level:"Senior", salary:9000},
//     {name:"Steve", age:40, level:"Junior", salary:2000},
//     {name:"Michael", age:30, level:"Senior", salary:13000},
// ]
// const newUsers=users.map(level=>users.toUpperCase());
// console.log(newUsers);

// const friuts= [`apple`, `banana`,`cherry`]
// const itFriuts=fr.find(fr=>fr`banana`);
// console.log(itFriuts);

wrtyui