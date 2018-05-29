///1.zadatak

let capFirstLetter = (...args) => {
    let array = Array.from(args);
    let newArray = array.filter(e => typeof e == 'string');
    newArray.forEach(function (element, i, newArray) {

        newArray[i] = element.charAt(0).toUpperCase() + element.slice(1);
    })
    console.log(newArray);
}
capFirstLetter('hello', 'there', 'ES', 6);

////2.zadatak

const tax = 0.2;
let a = e => e * tax
console.log(a(200));

///3.zadatak

let arr = [4, 6, 11, -9, 2.1]
let red = (arr, n = 1) => arr.map(e => e + n);
console.log(red(arr));

////////4.zadatak

let arr = [6, 11, 9, 8, 3]
let even = arr => arr.filter(e => e % 2 == 0)
console.log(even(arr));

///////5.zadatak

let arr = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
let b = arr => arr.filter(e => e.toLowerCase().includes('js'))

console.log(b(arr));

/////6.zadatak

let arr = [1.6, 11.34, 9.23, 7, 3.11, 8];
let render = arr => arr.filter(e => Number.isInteger(e))
console.log(render(arr));

////7.zadatak

let arr = [23, 11.5, 9, 'abc', 45, 28, 553]
let b = arr => arr.filter(e => Number.isInteger(e) && e.toString().includes(5))
console.log(b(arr));

////8.zadatak

let arr = [1.6, 11.34, 29.23, 7, 3.11, 18];
let b = arr => {
    let elem = arr.filter(e => e > 10)
    let res = '';
    let bla = elem => {
        for (let i in elem) {
            res += arr.indexOf(elem[i]) + ' ';
        }
        return res;
    }
    return bla(elem);
}
console.log(b(arr));

/////10.zadatak

let arr = [3, 11, 9, 5, 6]
let b = arr => {
    arr.every(check)
    return 'yes'
}
let check = value => value > 0
console.log(b(arr));

///11.zadatak

let arr = [2, 8, 3]
let b = arr => arr.reduce((acc, e) => acc * e, 1)
console.log(b(arr));

////12.zadatak

var arr = [2, 7, 3, 8, 5.4]
let b = Math.max(...arr)
console.log(b);

