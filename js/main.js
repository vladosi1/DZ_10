let length = prompt("Введите длину массива:", "5");
let elements = prompt(`Введите ${length} чисел через запятую:`);
let newArray = elements.split(",").map(parseFloat).sort((a, b) => a - b);

alert(`Ваш введенный массив: ${newArray}`);

let [_, ...deletedArray] = newArray;
deletedArray.splice(1, 3);

alert(`Элементы с 2 по 4 удалены: ${deletedArray}`);
console.log(deletedArray);
