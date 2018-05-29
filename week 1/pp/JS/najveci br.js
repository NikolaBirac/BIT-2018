var a = 1;

var b = 3;

var c = 7;

var d = 7;

var e = 9;
/*
if ((a >= b) && (a >= c) && (a >= d) && (a >= e)) {
    console.log(a);
} else if ((b >= a) && (b >= c) && (b >= d) && (b >= e)) {
    console.log(b);
} else if ((c >= a) && (c >= b) && (c >= d) && (c >= e)) {
    console.log(c);
} else if ((d >= a) && (d >= c) && (d >= b) && (d >= e)) {
    console.log(d);
}
*/


var cond1 = (a >= b) && (a >= c) && (a >= d) && (a >= e);
var cond2 = (b >= a) && (b >= c) && (b >= d) && (b >= e);
var cond3 = (c >= a) && (c >= b) && (c >= d) && (c >= e);
var cond4 = (d >= a) && (d >= c) && (d >= b) && (d >= e);
var cond5 = (e >= a) && (e >= b) && (e >= c) && (e >= d);

cond1 ? console.log(a) : (cond2 ? console.log(b) : (cond3 ? console.log(c) : (cond4 ? console.log(d) : console.log(e))));

switch (a, b, c, d, e) {
    case cond1:
        console.log(a);
        break;
    case cond2:
        console.log(b);
        break;
    case cond3:
        console.log(c);
        break;
    case cond4:
        console.log(d);
        break;
    case cond5:
        console.log(e);
        break;
}