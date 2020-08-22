/*Задача 2-9
Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. 
Добавляемый логин должен:

проходить проверку на длину от 4 до 16-ти символов включительно
быть уникален, то есть отсутствовать в массиве logins

Разбей задачу на подзадачи с помощью функций.
Проверку на отсутствие аргументов или на правильный 
тип аргументов делать не нужно.

Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и 
верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон 
от 4-х до 16-ти символов включительно.

Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и 
добавляемый логин как параметры и проверяет наличие login в массиве allLogins, 
возвращая true если такого логина еще нет и false если логин уже используется.

Напиши функцию addLogin(allLogins, login) которая:

Принимает новый логин и массив всех логинов как параметры
Проверяет валидность логина используя вспомогательную функцию isLoginValid
Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 
'Ошибка! Логин должен быть от 4 до 16 символов'
Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции 
isLoginUnique
Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 
'Такой логин уже используется!'
Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 
'Логин успешно добавлен!'

🔔 Принцип единственной ответственности функции - 
каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
не затрагивая работу программы в целом.
Предикатные функции возвращают только true или false. Такие функции принято называть 
начиная с is: isLoginUnique и isLoginValid в нашем случае.
isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
isLoginValid только проверяет валидный ли логин и возвращает true или false.
addLogin добавляет или не добавляет логин в массив. При этом для проверок условия 
добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.*/

// 'use strict';
// let login = 'Sparrow';
// let allLogins = ['Caramba', 'Sparrow'];
// const min = 4;
// const max = 16;

// const isLoginValid = function(login) {  
//     if (login.length >= min && login.length <= max ) {
//         return true;       
//     } 
// };

// console.log (isLoginValid (login));

// const isLoginUnique = (allLogins, login) => {
//      if (allLogins.includes(login)) {
//          return true;
//      }
// };

// console.log(isLoginUnique (allLogins, login));

// // let login = 'Sparrow';
// // const allLogins = ['Caramba', 'Sparrow'];

// const addLogin = (allLogins, login) => {
//     if (isLoginValid(login) !== true) {
//         return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
//     } else if (isLoginUnique(allLogins, login) === true) {
//         return console.log('Такой логин уже используется!');
//     } else 
//         allLogins.push(login);
//         return console.log('Логин успешно добавлен!');
// };

// console.log(addLogin(allLogins, login));

//

function isLoginValid(login, min = 4, max = 16) {
    return login.length >= min && login.length <= max ? true : false;
  }
  
  function isLoginUnique(allLogins, login) {
    return allLogins.includes(login) ? false : true;
  }
  
  function addLogin(allLogins, login) {
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message;

    if (isLoginValid(login) !== true) {
      return (message = ERROR);
    } else if (isLoginUnique(allLogins, login) !== true) {
      return (message = REFUSAL);
    } else 
      allLogins.push(login);
      return (message = SUCCESS);
  }
  
  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
  
//   console.log(addLogin(logins, 'Ajax')); 
//   'Логин успешно добавлен!'
//   console.table(logins);
  
  // console.log(addLogin(logins, 'robotGoogles')); 
  // 'Такой логин уже используется!'
  
  // console.log(addLogin(logins, 'Zod'));
  // 'Ошибка! Логин должен быть от 4 до 16 символов'
  
  // console.log(addLogin(logins, 'jqueryisextremelyfast')); 
  // 'Ошибка! Логин должен быть от 4 до 16 символов' 