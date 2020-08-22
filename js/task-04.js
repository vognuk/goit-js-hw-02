/*Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и 
добавляет в конец строки троеточие 
'...', после чего возвращает укороченную версию.*/

function formatString(string, maxLength = 40) {
    let normalizedStringLength = '';
    let lengthString = string.length;
  
    if (lengthString >= maxLength) {
      normalizedStringLength = string.slice(0, maxLength).concat('...');
    } else {
      normalizedStringLength = string;
    }
  
    return normalizedStringLength;
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
  );
