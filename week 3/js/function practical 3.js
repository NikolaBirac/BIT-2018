////////////////1.zadatak

function insert(string, add, number) {
    var b = '';

    if (typeof number == undefined) {
        b = b + string;
    } else {
        for (i = 0; i < string.length; i++) {
            if (i == number) {
                b = b + add;
                b = b + string[i];
            } else {
                b = b + string[i];
            }
        }
        return b;
    }
}

var result = insert('My random string', 'js ', 10)
console.log(result)

///////////////////////2.zadatak

var a = [NaN, 0, 15, false, -22, ' ', undefined, 47, null]
var b = '';


for (i = 0; i < a.length; i++) {
    if (typeof a[i] === 'number' || typeof a[i] === 'string') {
        if (a[i] === false) {
            continue;
        } else {
            b = b + a[i];
        }
    }
}
console.log(b);

///////////////////////3.zadatak

var a = [NaN, 0, 15, false, -22, ' ', undefined, 47, null]
var b = '';

for (i = 0; i < a.length; i++) {
    if (a[i] != 0 && !a[i] == true) {
        continue;
    } else {
        b = b + a[i]
    }
}
console.log(b);





