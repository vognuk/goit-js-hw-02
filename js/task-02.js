/*Задание 2
Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, 
и возвращающую цену гравировки всех слов в строке*/

const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
    message      = message.split(' ').length;
    pricePerWord = message * pricePerWord;

    return pricePerWord;
  };
  
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10,),); 
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20,),); 
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),);
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),);
console.log(calculateEngravingPrice('Uno', 100));
