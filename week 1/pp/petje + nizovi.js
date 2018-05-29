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

var a = [4, 20, 2, -1, 6];
var min = a[0];

for (var i = 0; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
    }
}


var min2;

//
if (min == a[0]) {
    min2 = a[1];
} else {
    min2 = a[0];
}

for (var i = 1; i < a.length; i++) {

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
var a = [2, 4, -2, 7, -2, 4, 2];
var i;
var j;

for (i = 0, j = a.length - 1; i < j; i++ , j--) {
    if (a[i] == a[j]) {
    }
    console.log('The array is symmetric.')
}






