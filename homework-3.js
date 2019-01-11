"use strict";

var string = prompt("Введите строку","");
var letters = [string.split('')];

function vowelsCount(a) {
    var vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    var counter = 0;

    for(var i = 0; i < 5; i++) {
        if(a[i] == "а") {
            counter++;
        }
    }

    return counter;
}

console.log(vowelsCount(letters));