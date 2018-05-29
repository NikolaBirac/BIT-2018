//1.zadatak
(
    function (arr) {

        var tmp;
        tmp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = tmp;

        console.log(arr);
    }
)([4, 5, 11, 9]);

///////////////////////////////2.zadatak

(
    function (a, b) {
        var result = a * b;
        console.log(result);
    }
)(4, 5);

//////////////////////////////3.zadatak

(
    function (arr) {

        var novi = '';
        var sum = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === 'm' || arr[i] === 'M') {
                novi = novi + '*';
                sum++
            } else {
                novi = novi + arr[i];
            }
        } console.log(novi, sum)
    }
)('prograMming');

/////////////////////////// 4.zadatak


var email = function () {
    return function (name, surname) {
        return name + '.' + surname + '@gmail.com'
    }
}
console.log(email()('marko', 'markovic'));

///////////////////////////5.zadatak

var oktal = function () {
    return function (number) {
        return parseInt(number, 8);
    }
}
console.log(oktal()('034'));

/////////////////////////////6.zadatak

function succes() {
    return 'Your password is cool';
}
function error() {
    return 'Your password is invalid';
}

function check(password) {

    if (password.length < 6) {
        return error();
    } else {
        for (i = 0; i < password.length; i++) {
            if (password[i] = parseInt(password[i])) {
                return succes();
            }
        }
    } return error();
}

console.log(check('JSGuru123'));
//////////////////////////////////7.zadatak

function sort(arr) {
    var newArray = [];
    for (i = 0, j = 0; i < arr.length; i++) {
        if (odd1(arr[i])) {
            newArray[j] = arr[i];
            j++;
        }
    }
    return newArray;
}

function odd1(num) {
    return num % 2 === 1;
}

var niz = [2, 8, 11, 4, 9, 3]
console.log(sort(niz));





