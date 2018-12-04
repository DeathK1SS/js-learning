"use strict";

var numbers = { };

numbers.a = +prompt('Введите первое число А','');

do {
    numbers.b = +prompt('Введите второе число B','число B должно быть больше числа A');
} while (numbers.a > numbers.b);


console.log(summ(numbers.b));

function summ(b) {
    if (b <= numbers.a) {
        return b;
    }
    return b + summ(b - 1);
}