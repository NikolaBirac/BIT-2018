//zbir dva broja

function sum(a, b) {

    var result;
    result = a + b;

    return result;

}

var s;
s = sum(2, 3);

console.log(s);
///////////////////////////////////// 1. zadatak

function isString(s) {
    if (typeof s == 'string') {
        return true;
    } else {
        return false;
    }

}

var word = 'abc';
var result = isString(word);
if (result == true) {
    console.log("It is string!")
} else {
    console.log("It's not string!")
}

/////////////////////////////////// 2.zadatak

function blank(b) {
    if (b === '') {
        return true;
    } else {
        return false;
    }
}

var razmak = 12;
var result = blank(razmak);
if (result == true) {
    console.log("Yes")
} else {
    console.log("No")
}

////////////////////////////////// 3.zadatak

function concatNTimes(string, nTimes) {
    var stringOutput = "";

    if (nTimes <= 0) {
        return false;
    } else {
        for (var i = 0; i < nTimes; i++) {
            stringOutput = stringOutput + string;
        }

        return stringOutput;
    }
}

var result = concatNTimes("Ha", 1);
console.log(result);

///////////////////////////////////// 4.zadatak

function novo(rec) {

    var sum = 0
    for (i = 0; i < rec.length; i++) {
        if (rec[i] === 'n') {
            sum = sum + 1
        }
    }
    return sum
}

var rec = 'My random string';
console.log(novo(rec));

////////////////////////////////////5.zadatak

//1.nacin

function broj(nesto) {

    for (i = 0; i < nesto.length; i++) {
        if (nesto[i] === 'n') {

            return i + 1;
        }
    }
    return -1;
}

var nesto = 'My random string';
console.log(broj(nesto));

//2.nacin

function broj(string, slovo) {

    for (i = 0; i < string.length; i++) {
        if (string[i] === slovo) {
            return i + 1;
        }
    }
    return -1;
}

var result = broj('My random string', 'n')
console.log(result);

////////////////////////////////// 6.zadatak

function broj(nesto) {

    for (i = nesto.length - 1; i >= 0; i--) {
        if (nesto[i] === 'n') {

            return i + 1;
        }
    }
    return -1;
}

var nesto = 'My random string';
console.log(broj(nesto));

/////////////////////////////////// 7.zadatak

function posebno(string) {
    var b = []

    for (i = 0; i < string.length; i++) {

        if (string[i] == " ") {
            b[i] = 'null';
        } else {
            b[i] = string[i]
        }
    }
    return b
}

var result = posebno("My random string")
console.log(result)

//////////////////////////////// 8. zadatak

function w(broj) {
    for (i = broj - 1; i > 1; i--) {

        if (broj % i == 0) {
            return false;
        }
    }
    return true;
}
var result = w(20);
if (result == true) {
    console.log("yes")
} else {
    console.log("no")
}

////////////////////////////////9. zadatak


function replace(string, separator) {
    var newString = '';

    for (i = 0; i < string.length; i++) {

        if (string[i] == ' ' && separator == '_') {
            newString = newString + separator;
        } else if (string[i] == ' ' && separator == '+') {
            newString = newString + separator;
        } else if (string[i] == ' ') {
            separator = '-'
            newString = newString + separator;
        } else {
            newString = newString + string[i];
        }
    }
    return newString
}

var result = replace('My random string')
console.log(result);

// opsirinije za bilo koj separator:

function replace(string, separator) {
    var newString = '';

    for (i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            if (separator === undefined) {
                separator = '-'
            } else {
                newString = newString + separator
            }
        } else {
            newString = newString + string[i]
        }
    }
    return newString;
}

var result = replace('My random string')
console.log(result);

/////////////////////////////////////////10.zadatak


function first(string,n) {

    var newString = '';

    for (i = 0; i < string.length && n < string.length; i++) {
        
        if ( i != n ) {
            newString = newString + string[i]
            
        } else {
            newString =  newString + '...'
            return newString
        }
    }
    return newString = "bla"
}

var result = first('Satisfaction', 55)
console.log(result);