"use strict";

var numbers = { };

numbers.a = +prompt('Введите первое число А','');

do {
    numbers.b = +prompt('Введите второе число B','число B должно быть больше числа A');
} while (numbers.a > numbers.b);


console.log(summ(numbers.a, numbers.b));

function summ(a, b) {
    if (b <= a) {
        return b;
    }
    return b + summ(a, b - 1);
}