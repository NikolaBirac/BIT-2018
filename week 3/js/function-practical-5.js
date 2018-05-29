//vezba
var minmax = function (a) {

    var i;
    var j;

    for (i = 0; i < a.length; i++) {
        min = a[i];

        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[i]) {
                var tmp = a[j];
                a[j] = a[i];
                a[i] = tmp;
            }
        }
    }
    return a;
}

var k = [8, 11, 6, 9, 4];
var result;
result = minmax(k);
console.log(result);

///////////////////////////////1.zadatak

var minmax = function (a) {

    var minElement = a[0];
    var maxElement = a[0];
    var minIndex = 0;
    var maxIndex = 0;

    for (i = 0; i < a.length; i++) {

        if (a[i] < minElement) {
            minElement = a[i];
            minIndex = i;
        } else if (a[i] > maxElement) {
            maxElement = a[i];
            maxIndex = i;
        }
    }
    a[minIndex] = maxElement;
    a[maxIndex] = minElement;

    return a;
}

var a = [3, 500, 12, 149, 53, 414, 1, 19];
var result = minmax(a);
console.log(result);

///////////////////////////////////2.zadatak

var newArray = function (arr) {

    var b = [];

    for (i = 0; i < a.length; i++) {
        b[i] = (a[i] / 2) + 5;

        if (b[i] === 0) {
            b[i] = 20;
        }
    }
    return b;
}

var a = [3, 500, -10, 149, 53, 414, 1, 19];
var result = newArray(a);
console.log(result);

//////////////////////////////////3.zadatak

var novi = function (a, b) {

    var grade = '';
    var final = '';
    for (i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {

        if (b[j] < 51) {
            grade = 'failed\n';
        } else if (b[j] < 61) {
            grade = '6\n';
        } else if (b[j] < 71) {
            grade = '7\n';
        }
        else if (b[j] < 81) {
            grade = '8\n';
        }
        else if (b[j] < 91) {
            grade = '9\n';
        } else if (b[j] >= 91) {
            grade = '10 \n';
        }

        final = final + a[i] + ' acquired ' + b[j] + ' and earned ' + grade
    }
    return final;
}

var names = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"]
var points = [50, 39, 63, 72, 99, 51, 83, 59];
var result = novi(names, points);
console.log(result);

//////////////////////////////////////4.zadatak

var multi = function (a) {
    var i;
    var j;

    for (i = 0; i < a.length; i++) {
        min = a[i];

        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[i]) {
                var tmp = a[j];
                a[j] = a[i];
                a[i] = tmp;
            }
        }
        a[i] = a[i] * 2;
    }
    return a;
}

var numbers = [13, 11, 15, 5, 6, 1, 8, 12];

var result = multi(numbers);
console.log(result);

///////////////////////////////5.zadatak

var max = function (a) {

    var i;
    var j;

    for (i = 0; i < a.length; i++) {

        for (j = i + 1; j < a.length; j++) {
            if (a[j] > a[i]) {
                var tmp = a[j];
                a[j] = a[i];
                a[i] = tmp;
            }
        }
    }
    return a;
}

var a = [13, 11, 15, 5, 6, 1, 8, 12];
var result;
result = max(a);
console.log(result);

/////////////////////////////6.zadatak

var loop = function (a) {
    var sum = 0;
    var oduzmi = 0;

    for (i = 0; i <= a; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    for (i = 0; i <= 500; i++) {
        if (i % 2 !== 0) {
            oduzmi += i
        }
    }
    sum = (sum - oduzmi) * 12.5
    return sum;
}
var vrednost = 1000;
var result = loop(vrednost);
console.log(result);


//////////////////////////7.zadatak
'use strict'
var slova = function (a) {
    var b = '';
    var i;
    for (i = 0; i < a.length; i++) {
        if (typeof a[i] === 'string' && a[i].length > 1) {
            b = b + a[i][0] + a[i][1];
        }
    }
    return b;
}

var imena = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
var result = slova(imena);
console.log(result);

//////////////////////////////////8.zadatak


var reverse = function (string) {

    var n = '';

    for (i = string.length - 1; i >= 0; i--) {
        n = n + string[i];
    }
    return n;
}


var description = 'Belgrade Institute of Technology';
var result = reverse(description);
console.log(result);

//////////////////////////////////////9.zadatak

function komb(a, b) {
    var novi = '';

    for (i = a; i < b; i++) {
        for (j = 1; j < b; j++) {
            if (i != j) {
                novi = novi + '(' + i + ',' + j + ')';
            }
        }
    }
    return novi;
}

var q = 1;
var w = 7;
var result = komb(q, w);
console.log(result);

/////////////////////////////////10.zadatak

function num() {

    var prime = [];

    for (var i = 0; i < arguments.length; i++) {
        var zamena = arguments[i];

        for (var j = 2; j < zamena; j++) {
            if (zamena % j === 0) {
                prime[i] = false;
                break;
            }
            prime[i] = true;
        }
    }
    return prime;
}

var result = num(17, 15, 7, 10);
console.log(result);
