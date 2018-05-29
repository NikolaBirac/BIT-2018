



var a = [2, 3, 4, 5]
var sum = 0
var pro

for (i = 0; i < a.length; i++) {
    sum = sum + a[i]
    pro = sum / a.length
}
console.log(pro)

//////////////////////// 5. zadatak

var res = '\n'

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        if (i == 1 && j == 1) {
            res = res + '+ \t'
        } else {
            var res = '*\n'
        }
    }
    res = res + '\n';
}
console.log(res)


//bax
var res = "\n";
var i;
var j;
for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        if (i == 0 || i == 4)
            res = res + '*';
    } if (j > 0) {
        res = res + '\n';
    }

}
console.log(res);




////ONA

var i;
var j;
var n = 5;

for (i = 0; i < n; i++) {


    if (i == 0 || i == n - 1) {

        var stars = "";
        for (j = 0; j < n; j++) {
            stars = stars + "*"
        }
        console.log(stars);
    } else {
        var line = "";
        line = line + '*';
        for (j = 1; j <= n - 2; j++) {
            line = line + " ";
        }
        line = line + "*";

        console.log(line);
    }
}

/// krst
var i;
var j;
var n = 5;

for (i = 0; i < n; i++) {


    if (i == 0 || i == n - 1 || i == (n - 1) / 2) {

        var stars = "";
        for (j = 0; j < n; j++) {
            stars = stars + "*"
        }
        console.log(stars);
    } else {
        var line = "";
        line = line + '*';
        for (j = 1; j <= n - 2; j++) {
            if (j == (n - 1) / 2) {
                line = line + '*';
            } else {
                line = line + " ";
            }
        }
        line = line + "*";

        console.log(line);
    }
}

///7. zadatak
var n = 923;
var digit;

while (n > 0) {

    digit = n % 10;

    n = (n - digit) / 10;

    console.log(digit);
}


var n = 923;
var digit;

var digits = [];
var i = 0;

while (n > 0) {

    digit = n % 10;

    n = (n - digit) / 10;

    //console.log(digit);

    digits[i] = digit;
    i++;

}

var f;
var l;
for (f = 0, l = digits.length - 1; f < l; f++ , l--) {
    var tmp;
    tmp = digits[f];
    digits[f] = digits[l];
    digits[l] = tmp;
}

console.log(digits);


////
var n = 9231245;

var digits = []

var s = n + '';

console.log(s);
for (var i = 0; i < s.length; i++) {
    digits[i] = s[i];
}
console.log(digits);
