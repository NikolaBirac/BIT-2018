var a = -1;

var b = 0;

var c = 0;

var cond1 = (a >= b) && (a >= c) && (b >= c);
var cond2 = (a >= b) && (a >= c) && (c >= b);
var cond3 = (b >= a) && (a >= c) && (b >= c);
var cond4 = (b >= a) && (c >= a) && (b >= c);
var cond5 = (a >= b) && (c >= a) && (c >= b);

/*
if ((a >= b) && (a >= c) && (b >= c)) {
    console.log(a, b, c);
} else if ((a >= b) && (a >= c) && (c >= b)) {
    console.log(a, c, b);
} else if ((b >= a) && (a >= c) && (b >= c)) {
    console.log(b, a, c);
} else if ((b >= a) && (c >= a) && (b >= c)) {
    console.log(b, c, a);
} else if ((a >= b) && (c >= a) && (c >= b)) {
    console.log(c, a, b);
} else if ((b >= a) && (c >= a) && (b >= a)) {
    console.log(c, b, a);
} */

((a >= b) && (b >= c)) ? console.log(a, b, c) : ((a >= c) && (c >= b)) ? console.log(a, c, b) : (((b >= a) && (a >= c)) ? console.log(b, a, c) : (((c >= a) && (b >= c)) ? console.log(b, c, a) : (((a >= b) && (c >= a)) ? console.log(c, a, b) : console.log(c, b, a))))

/* result = ((a >= b) && (a >= c) && (b >= c)) ? console.log(a, b, c) : ((a >= b) && (a >= c) && (c >= b)) ? console.log(a, c, b) : ((b >= a) && (a >= c) && (b >= c)) ? console.log(b, a, c) : ((b >= a) && (c >= a) && (b >= c)) ? console.log(b, c, a) : ((a >= b) && (c >= a) && (c >= b)) ? console.log(c, a, b) : ((b >= a) && (c >= a) && (b >= a)) ? console.log(c, b, a); */

cond1 ? console.log(a, b, c) : (cond2 ? console.log(a, c, b) : (cond3 ? console.log(b, a, c) : (cond4 ? console.log(b, c, a) : cond5 ? console.log(c, a, b) : console.log(c, b, a))))

switch (a, b, c) {
    case cond1:
        console.log(a, b, c);
        break;
    case cond2:
        console.log(a, c, b);
        break;
    case cond3:
        console.log(b, a, c);
        break;
    case cond4:
        console.log(b, c, a);
        break;
    case cond5:
        console.log(c, a, b);
        break;
    default:
        console.log(c, b, a);
        break;
}
