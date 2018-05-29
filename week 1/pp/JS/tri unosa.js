//za tri unosa korisnika, naci zbir brojeva
//za tri unosa korisnika, naci zbir parnih brojeva
//za tri unosa korisnika, naci broj brojeva koji se zavrsavajy cifrom 4

var a = "11";

var b = 14;

var c = 0;

var n = 0;

var z = 0;

var br = 0;

/** if ((typeof a == "number") && (typeof b == "number") && (typeof c == "number")) {
    n = a + b + c;
} console.log('Zbir brojeva je: ' + n); **/

if (typeof a == "number") {
    n += a;
}
if (typeof b == "number") {
    n += b;
}
if (typeof c == "number") {
    n += c;
} console.log('Zbir brojeva je: ' + n);

/**if ((typeof a == "number") && (typeof b == "number") && (typeof c == "number")) {
    if ((a % 2 == 0) && (b % 2 == 0) && (c % 2 == 0)) {
        console.log(a + b + c);
    } else if ((a % 2 !== 0) && (b % 2 == 0) && (c % 2 == 0)) {
        console.log(c + b);
    } else if ((a % 2 == 0) && (b % 2 !== 0) && (c % 2 == 0)) {
        console.log(a + c);
    } else if ((a % 2 == 0) && (b % 2 == 0) && (c % 2 !== 0)) {
        console.log(a + b);
    } else if ((a % 2 !== 0) && (b % 2 !== 0) && (c % 2 == 0)) {
        console.log(c);
    } else if ((a % 2 == 0) && (b % 2 !== 0) && (c % 2 !== 0)) {
        console.log(a);
    } else if ((a % 2 !== 0) && (b % 2 == 0) && (c % 2 !== 0)) {
        console.log(b);
    } else if ((a % 2 !== 0) && (b % 2 !== 0) && (c % 2 !== 0)) {
        console.log("nema parnih brojeva");
    }
} **/

/** if ((typeof a == "number") && (typeof b == "number") && (typeof c == "number")) **/
{
    if ((typeof a == "number") && (a % 2 === 0)) {
        z = a;
    }
    if ((typeof b == "number") && (b % 2 === 0)) {
        z += b;
    }
    if ((typeof c == "number") && (c % 2 === 0)) {
        z += c;
    }
} console.log('Zbir parnih brojeva je: ' + z);

/** if ((typeof a == "number") && (typeof b == "number") && (typeof c == "number")) {
    if (a % 10 == 4) {
        console.log(a);
    }
    if (b % 10 == 4) {
        console.log(b);
    }
    if (c % 10 == 4) {
        console.log(c);
    }
} **/

/** if ((typeof a == "number") && (typeof b == "number") && (typeof c == "number")) **/
{
    if ((typeof a == "number") && (a % 10 == 4)) {
        br += 1;
    }
    if ((typeof b == "number") && (b % 10 == 4)) {
        br += 1;
    }
    if ((typeof c == "number") && (c % 10 == 4)) {
        br += 1;
    }
} console.log('Broj brojeva koji se zavrsavaju sa 4 je: ' + br);