/*Вычисление суммы массива
Напиши функцию reduceArray(array), которая принимает 
числовой массив array. Если массив array не пустой, 
необходимо посчитать сумму всех элементов массива, 
используя цикл for. Для подсчета суммы используй 
переменную total. Функция должна возвращать 0 
если массив пустой и значение total в противном случае.*/

// создать функцию принимающую числовой массив;
// функция возвращает ноль если массив пуст и значение
// проверка не пустой ли массив
// посчитать сумму всех элементов цыклом for
// задать переменную total для записи суммы элементов массива

// const reduceArray = (array) => {
//     let total = 0;
//     if (array.length === 0) {
//         total = 0;
//     } else {
//         for (let i = 0; i < array.length; i += 1) {
//            total += array[i];
//         }
//     }
//     return total;
// };

// console.log (reduceArray([]));

'use strict';
const function = reduceArray(array) {
  let total = 0;
  // Write code under this line
   if (array.length === 0) {
        total = 0;
    } else {
        for (let i = 0; i < array.length; i += 1) {
           total += array[i];
        }
    }
    return total;
};
 
console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5

