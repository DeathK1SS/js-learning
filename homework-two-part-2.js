"use strict";

var numbers = { }; //массив
var result = 0; //сюда мы запишем количество повторений числа А

//запрашиваем кол-во элементов массива
do {
    var quantityElements = +prompt('Введите число элементов массива','');
} while (!!isNaN(quantityElements));

//заполняем массив значениями
for (var i = 0; i < quantityElements; i++) {
    numbers[i] = prompt('Введите число - значение элемента массива','')
}

//запрашиваем число для проверки
do {
    var checkNumber = +prompt('Введите число для проверки нахождения в массиве','');
} while (!!isNaN(checkNumber));

//ищем совпадения значений массива с числом и записываем результат в переменную
for (var key in numbers) {
    if(numbers[key] == checkNumber) {
        result++;
    }
}

console.log(result);



