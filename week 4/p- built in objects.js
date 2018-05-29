//////////////////2.zadatak
var num = 12345;
var b = String(num); // "12345"
console.log(typeof b)
var c = b.split('').reverse().join('')
var aa = parseInt(c)
console.log(aa);
/////////////////////////////3.


// "12345".split("3")-- > ["12", "45"]
// "12345".split("")-- > ["1", "2", "3", "4", "5"]
// ["1", "2", "3", "4", "5"].reverse()-- > ["5", "4", "3", "2", "1"]
// ["5", "4", "3", "2", "1"].join("")-- > "54321"

var a = 'Webmaster'
var b = a.toLowerCase().split('').sort().join("")
console.log(b)
////////////////////////////4.zadatak
var a = 'Republic of Serbia'
var b = a.split(' ')
for (i = 0; i < b.length; i++) {
    b[i] = b[i].split('').sort().join('');
}
console.log(b)

///////////////////////////////5.zadatak
var a = 'John Snow';
var b = a.split(' ');
console.log(b);

/////////////////////////////6.zadatak

// var a = 'John Snow';
// var a_splitted = a.split('');
// a_splitted.splice(6, 3);
// console.log(a_splitted);

var a = 'John Snow';
var b = a.split(' ');
b[b.length - 1] = b[b.length - 1].charAt(0) + '.';
var c = b.join(' ');
console.log(c)
////////////////////////////////7.zadatak

function x(position, num, pravac) {
    num = num.toString();
    var a = position.slice(num.length, position.length);
    if (pravac == 'l') {
        num = a + num;
    } else {
        num = num + a
    }
    return num
}
console.log(x('0000', 123, 'l'))

//////////////////////////////////8.zadatak

var string = "js string exercises";
string = string.split('')
string[0] = string[0].toUpperCase()
string = string.join('')
console.log(string)

///////////////////////////////9.zadatak

function show(email) {
    var b = email.split('@')
    var c = b[0].slice(0, b[0].length / 2)
    var adress = c + '...@' + b[1]
    return adress
}
var email = "nikolabirac@example.com";
console.log(show(email));

///////////////////////////////////////10.zadatak




