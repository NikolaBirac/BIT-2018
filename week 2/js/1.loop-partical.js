var start = 1;
var end = 5;

for (i = start; i < end; i++) {
    console.log(i);
}
///


for (i = 0; i < 10; i++) {
    console.log(i);
}

/* prikazi samo parne brojeve*/

var start = 1;
var end = 5;

for (i = 0; i < end; i = i + 2) {
    console.log(i);
}

/////

for (i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

//////da nam ispisuje zbir brojeva od 1 do 100 ///1+2+3+....100

var sum = 0;

for (var number = 1; number <= 100; number++) {
    sum = sum + number;
}
console.log(sum);


/////1. zadatak

for (i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + "is odd");

    }
}

////2. zadatak

var sum = 0

for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i
    }
}
console.log(sum)

////3. zadatak


var a = [1, 2, 3, 4, 5]
var sum = 0;
var pro = 1;
for (var i = 0; i < a.length; i++) {
    sum = sum + a[i];
    pro = pro * a[i];
}
console.log(sum)
console.log(pro)

/////4.zadatak

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}

///5.zadatak
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for (i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++)
        console.log(a[i][j]);
}

/////6.zadatak

var sum = 0

for (i = 0; i <= 20; i++) {
    sum = sum + (i * i);
}
console.log(sum);

//////7.zadatak

var ocene = [80, 77, 88, 95, 68];
var prosek = 0
var zbir = 0

for (i = 0; i < ocene.length; i++) {
    zbir = zbir + ocene[i]
}
console.log(prosek = 'prosek je ' + zbir / ocene.length)

/*
for (i = 0; i < ocene.length; i++) {
    if (ocene[i] < 70) {
        console.log('dovoljan')
    } else if (ocene[i] < 80) {
        console.log('dobar')
    } else if (ocene[i] < 90) {
        console.log('vrlo dobar')
    } else if (ocene[i] < 100) {
        console.log('odlican')
    }
}
*/
for (i = 0; i < ocene.length; i++) {
    if (ocene[i] < 81.6 * 0.7) {
        console.log('dovoljan')
    } else if (ocene[i] < 81.6 * 0.8) {
        console.log('dobar')
    } else if (ocene[i] < 81.6 * 0.9) {
        console.log('vrlo dobar')
    } else if (ocene[i] <= 81.6) {
        console.log('odlican')
    } else {
        console.log('nadprosecan')
    }
}


/////8. zadatak

for (i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
        console.log('Fizz')
    } else if (i % 5 == 0 && i % 3 !== 0) {
        console.log('Buzz')
    } else if (i % 5 == 0 && i % 3 == 0) {
        console.log('FizzBuzz')
    } else {
        console.log(i)
    }

}













