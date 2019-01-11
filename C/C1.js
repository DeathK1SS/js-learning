"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    let colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    let used = {};
    let count = 0;

    console.log( 'цветов: ' + colorsCount );
    for ( let i=1; ; i++ ) {
        let n=randomDiap(1,7);
        if (n in used) {
            continue;
        }
        used[n]=true;
        let colorName=colors[n];
        console.log( colorName );
        count++;
        if (count == colorsCount) {
            break;
        }
    }
}

mood(5);
console.log('\nXXXXXXXXXX\n ');
mood(7);