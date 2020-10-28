// "use strict";

// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

//-----------02


// const total = 100;
// const ordered = 130;

// if (ordered > total) {
//     console.log("На складе недостаточно твоаров!");
// } else{
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

//-------------03


// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let value = prompt("Введите пароль")
// console.log(value);

// if (value === null) {
//     message = 'Отменено пользователем!'
// } else if (value === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!'
// } else {
//     message='Доступ запрещен, неверный пароль!'
// }
// alert(message);


//--------------04

// const credits = 23580;
// const pricePerDroid = 300;
// const valuePeaces = prompt("Количество дроидов")
// let totalPrice;


// if (valuePeaces === null) {
//     console.log('Отменено пользователем!'); 
// } else {
//     totalPrice = valuePeaces * pricePerDroid;
// }

// if (totalPrice > credits) {
//     console.log('Недостаточно средств на счету!');
// } else {
//     console.log(`Вы купили ${valuePeaces} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
// }
 

//-----------------05


// const country = prompt("Страна доставки")
// const correct = country.toLowerCase();

// let cost;

// switch (correct) {
//     case "китай":
//         cost = 100;
//         break;
//     case "чили":
//         cost = 250;
//         break;  
//     case "австралия":
//         cost = 170;
//         break;
//     case "индия":
//         cost = 80;
//         break;
//     case "ямайка":
//         cost = 120;
//         break;
//     default:
//         alert('В вашей стране доставка не доступна');
    
// };

// console.log(`Доставка в ${correct} будет стоить ${cost} кредитов`);


//---------06

// let input;
// let total = 0;
// do {
//     input = prompt("Введите число")
//     total += Number(input);
// } while (input !== null)

// console.log(total);
