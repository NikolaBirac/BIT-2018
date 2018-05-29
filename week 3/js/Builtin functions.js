//////////////////1.zadatak
function arr(a) {
    var b = [];

    for (i = 0, j = 0; i < a.length; i++) {
        if (isFinite(a[i])) {
            b[j] = a[i] * 1;
            j++;
        }
    }
    return b
}

var result = arr(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);

//////////////////////2. zadatak

function check(a) {
    var b = '';

    for (i = 0; i < a.length; i++) {
        var element = a[i];
        if (isFinite(element) && !!parseInt(element) || typeof element === "string") {
            b = b + element;
        }
    }
    return b;
}

var result = check([NaN, 0, 15, false, -22, 'ghj', undefined, 47, null])
console.log(result);


//////
function check(a) {
    var b = '';

    for (i = 0; i < a.length; i++) {
        if (typeof a[i] === 'string' || typeof a[i] === 'number') {
            if (typeof a[i] === 'string') {
                b = b + a[i];
            } else
                if (isFinite(a[i])) {
                    b = b + a[i];
                }
        }
    }
    return b;
}

var result = check([NaN, 0, 15, false, -22, 'ghj', undefined, 47, null])
console.log(result);

///////////////////////3.zadatak

function check(a) {
    var b = [];

    for (i = 0, j = 0; i < a.length; i++) {
        if (!a[i] === true || typeof a[i] === 'string') {
            continue;
        } else {
            b[j] = a[i]
            j++
        }
    }
    return b
}

var result = check([NaN, 0, 15, false, -22, 'ghj', undefined, 47, null])
console.log(result);

////////////////////////4.zadatak

function check(a) {
    var b = 0;

    for (i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number' && isFinite(a[i])) {
            if (parseInt(a[i]) === a[i]) {
                b = b + 1
            }
        }
    }
    return b
}

var result = check([NaN, 23.1, 15, false, -22.5, '', 4, 7, null])
console.log(result);

///////////////////////5.zadatak

function check(a) {
    var b = 0;

    for (i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number' && isFinite(a[i])) {
            if (parseFloat(a[i]) !== parseInt(a[i])) {
                b = b + 1;
            }
        }
    }
    return b;
}

var result = check([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(result);




