
///////////////////////////////////1.zadatak

function vowels(string) {
    var counter = 0;
    for (i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                counter++;
                break;
        }
    }
    return counter;
}

var aa = "random";
console.log(vowels(aa));

////////////////////////////////2.zadatak

function glavna() {

    return function (arr, arr2) {

        var newArray = [];
        for (i = 0, j = 0; i < arr.length; i++) {
            newArray[j] = arr[i];
            newArray[++j] = arr2[i];
            j++
        }
        return newArray;
    }
}

var a = ['a', 'b', 'c'];
var b = [1, 2, 3];
console.log(glavna()(a, b));

//////////////////////////////3.zadatak

function move(arr, num) {
    var newArray = [];
    for (i = 0, j = 0; i < arr.length; i++) {

        if (i < num) {
            newArray[arr.length - num + i] = arr[i];
        } else {
            newArray[j] = arr[i];
            j++
        }
    }
    return newArray;
}

var niz = [1, 2, 3, 4, 5, 6];
var broj = 2;
console.log(move(niz, broj));

/////////////////////////////////4.zadatak

function takeNumber(num) {

    var newArray = [];
    var deset = 10;
    var i = 0;

    while (num >= 10) {
        newArray[i] = num % deset;
        num = parseInt(num / deset)
        i++
    }
    newArray[i] = num;

    for (i = 0, j = newArray.length - 1; i < j; i++ , j--) {
        var tmp = newArray[j];
        newArray[j] = newArray[i];
        newArray[i] = tmp;
    }
    return newArray;
}

var a = 652;
console.log(takeNumber(a));

////////////////////////////////5.zadatak



