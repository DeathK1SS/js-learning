function squareRoots(a,b,c) {
    var d=b*b-4*a*c; // дискриминант

    if ( d<0 )
        return []; // нет корней

    if ( d==0 )
        return [ -b/(2*a) ]; // один корень

    var x1=(-b+Math.sqrt(d))/(2*a);
    var x2=(-b-Math.sqrt(d))/(2*a);
    return [ x1, x2 ]; // два корня
}

function squareRootsTests() {
    console.log('тест 0,5,-5 -> один корень 1');
    var roots=squareRoots(0,5,-5);
    console.log( ((roots.length==1)&&(roots[0]==1))?'пройден':'НЕ ПРОЙДЕН!' )
}
squareRootsTests()