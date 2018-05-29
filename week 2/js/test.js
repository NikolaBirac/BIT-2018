var total = 0;
var a = [undefined, 1, 2, 3, undefined, 4];

for (i = 0; i < a.length; i++) {
    if (!a[i]) //on ulazi ovde samo ako je vrednost true {
        // Can't proceed with undefined data
        continue;
}


total += a[i];
}

console.log(total);


if (!undefined) {
    // true 
    console.log("tu smo!");
} else {
    // false
}