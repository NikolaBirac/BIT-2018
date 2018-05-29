var i = 0
while (i < 5) {
    console.log(i);
    i++
}
//////////////////////////////
var i;
for (i = 0; i < 5; i++) {

    if (i == 2) {
        continue;           //kada dodje i=2 on ga ne stampa nego ga vraca gore i nastavlja dalje!
    }
    console.log(i)
}
/////////////////////////////
i = 0

do {
    console.log(i);
    i++
} while (i < 5);
/////////////////////////// Sabrati sve brojeve koji su parni a 
///////////////////////////nalaze se na neparnim pozicijama (do-while)

var a = [5, 6, 7, 4, 4, 8]
var i = 0;
var sum = 0;
do {
    if (a[i] % 2 == 0 && i % 2 == 1) {
        sum = sum + a[i];
    }

    i++;

} while (i < a.length);
console.log(sum);
