"use strict";

// const logItems = function (array) {
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${[i + 1]} -`, array[i]);
//     }
    
// }
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


//------------02

// const calculateEngravingPrice = function(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120



//--------03

// const findLongestWord = function (string) {
//     const max = 5
//     const splitStr = string.split(" ")   
//     for (let el of splitStr) {
//         if (el.length >= max) {
//             return el
//         }
//     }  
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'



//-----------04


// const formatString = function(string) {
//     const newString = string.split("")
//     if (newString.length <= 40) {
//         return string
//     } else {
//          newString.splice(40, 40, '...')
//         return newString.join("")
//     }
    
    
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка


//----------05

// const checkForSpam = function (message) {
//     if (message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam')) {
//         return true
//     } else {
//         return false
//     }
// }
//     /*
//      * Вызовы функции для проверки работоспособности твоей реализации.
//      */
//     console.log(checkForSpam('Latest technology news')); // false

//     console.log(checkForSpam('JavaScript weekly newsletter')); // false

//     console.log(checkForSpam('Get best sale offers now!')); // true

//     console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


//--------------06


// let input;
// const numbers = [];
// let total = 0;

// do {`
//     input = prompt("Введите число")
//     numbers.push(Number(input));
//  } while (input !== null)
// for (let el of numbers) {
//         total += el
//     }
//    console.log(`Общая сумма чисел равна ${total}`);



//-------------07



// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//     if (login.length >= 4 && login.length <= 16) {
//         return true
//     } else {
//         return false
//     }
// };
// const isLoginUnique = function(allLogins, login) {
//     if (allLogins.join(" ").includes(login)) {
//       return false
//     } else {
//         return true
//   }
// };

// const addLogin = function(allLogins, login) {
//     if (!isLoginValid(login)) {
//       console.log('Ошибка! Логин должен быть от 4 до 16 символов');
//     } else if (!isLoginUnique(allLogins, login)) {
//         console.log('Такой логин уже используется!');
//     } else {
//         allLogins.push(login)
//         console.log('Логин успешно добавлен!');
//     }
//     console.log(logins);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'