/////obrni redosled u nizu i ubaci ga u B niz
var a = [1, 2, 6, 5, 11];

for (var i = a.length - 1; i >= 0; i--)
    console.log(a[i]);                                  //ne napravi niz nego navede samo brojeve

var a = [1, 2, 6, 5, 11];
var b = [];
var i;
var j;

for (var i = a.length - 1, j = 0; i >= 0; i-- , j++) {
    b[j] = a[i]
}

console.log(b)



////// zameni mesta prvog i poslednje, drugog i cetvrtog.

//1.
var x = 4;
var y = 10;
var tmp;
tmp = x;                                           ///ideja
x = y;
y = tmp;
console.log(x, y)

// 2. 

var a = [1, 2, 6, 5, 11];
var i;
var j;

for (i = 0, j = a.length - 1; i < j; i++ , j--) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}
console.log(a);


//// zadatak 1

var e = 3;
var a = [5, -4.2, 3, 7];

var ind = false;

for (var i = 0; i < a.length; i++) {
    if (e == a[i]) {
        ind = true;
    }    // mozemo ovde da stavimo break i kad gad nadje u nizu on odma izlazi iz 
    //  petlje i nastavlja dalje
}

if (ind == false) {
    console.log('No!');
} else {
    console.log('Yes!');
}
//// zadatak 2

var a = [-3, 11, 5, 3.4, -8];
var b = [];

for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        b[i] = a[i];
    } else {
        b[i] = a[i] * 2;
    }
}
console.log(b);

////3.zadatak

var a = [4, 2, 2, -1, 6];
var min = a[0];
for (var i = 1; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
    }
}
console.log(min, a.indexOf(min));

////4.zadatak

var a = [8, 4, 2, -1, 6];
var min = a[0];


for (var i = 0; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
    }
}
var min2 = +Infinity;

/* if (min == a[0]) {
    min2 = a[1];
} else {
    min2 = a[0];
} */
for (var i = 0; i < a.length; i++) {

    if (a[i] != min && a[i] < min2) {
        min2 = a[i];
    }
}
console.log(min2);


////5. zadatak
var a = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i]
    }
}
console.log(sum);


////6. zadatak

var a = [2, 4, -2, 7, -2, 3, 2];
var i;
var j;
var yee = false;
for (i = 0, j = a.length - 1; i < j; i++ , j--) {
    if (a[i] == a[j]) {
        yee = true
    } else {
        yee = false
    }
}

if (yee == true) {
    console.log('The array is symmetric.')
} else {
    console.log('The array is not symmetric.')
}


//////////////////////////// 7.zadatak


var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
var c = [];

for (i = 0, j = 0; i < a.length; i++ , j = j + 2) {
    c[j] = a[i];
    c[j + 1] = b[i];
}
console.log(c)

///////////////////////8.zadatak

var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
var c = []

for (i = 0, j = 0; i < a.length; i++) {
    c[i] = a[i];
}
for (i = 0, j = a.length; i < b.length; i++ , j++) {
    c[j] = b[i];
}
console.log(c)


var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
var c = []

for (i = 0, j = 0; i < a.length; i++ , j++) {
    c[i] = a[i];
    c[j + a.length] = b[i];
}
console.log(c)


////////////////////9.zadatak

var a = [4, 6, 2, 8, 2, 2]
var e = 2
var b = []
for (i = 0, j = 0; i < a.length; i++) {
    if (a[i] != 2) {
        b[j] = a[i];
        j++
    }
}
console.log(b)


/////////////////////////////10. zadatak

//Jedan nacin

var e = 78
var p = 3
var a = [2, -2, 33, 12, 5, 8]
var b = []

if (p > a.length) {
    console.log('Error message');
} else {
    for (i = 0, j = 0; i < 3; i++ , j++) {
        b[j] = a[i]
        b[p] = e
    }
    for (i = p, j = p + 1; i < a.length; i++ , j++) {
        b[j] = a[i]
    }
    console.log(b)
}

//Drugi nacin

var e = 78
var p = 3
var a = [2, -2, 33, 12, 5, 8]
var b = []

for (i = 0, j = 0; i < a.length; i++ , j++) {
    if (i != p) {
        b[j] = a[i];
    } else {
        b[j] = e;
        j++
        b[j] = a[i]
    }
}
console.log(b)






