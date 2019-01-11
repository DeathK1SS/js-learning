"use strict";

var string = ['а','б','р','и','к','о','с',];

function stringFilter(V,I,A) {
    return V == 'а' || V == 'о' || V == 'и' || V == 'е' || V == 'ё' || V == 'э' ||V == 'ы' || V == 'у' || V == 'ю' || V == 'я' || V == 'a' || V == 'e' || V == 'i' || V == 'o' || V == 'u' || V == 'y';
}

function stringFE(V,I,A) {
    if (V == 'а' || V == 'о' || V == 'и' || V == 'е' || V == 'ё' || V == 'э' ||V == 'ы' || V == 'у' || V == 'ю' || V == 'я' || V == 'a' || V == 'e' || V == 'i' || V == 'o' || V == 'u' || V == 'y') {
        console.log(V);
    }
}


console.log(string.filter(stringFilter));
console.log(string.filter(stringFE));