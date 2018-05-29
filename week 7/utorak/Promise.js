//0.zadatak

const p = new Promise((resolve, reject) => {
    const date = new Date().toDateString();
    resolve(date);
})

p.then(function (vreme) {
    console.log(vreme);
    return 'today is'
}).then(function (string) {
    console.log(string);
})

//1.zadatak

for (let i = 0; i < 100; i++) {
    new Promise(function (resolve) {
        setTimeout(resolve, (500 - 1) * Math.random() + 1, i);
    }).then((num) => {
        console.log(num);
    })
}

//2. i 3. zadatak
const array = [];

for (let i = 0; i < 100; i++) {
    array[i] = new Promise(function (resolve) {
        setTimeout(resolve, (500 - 1) * Math.random() + 1, i);
    })
}
Promise.race(array).then(function (value) {
    console.log(value);
})
Promise.all(array).then(function () {
    console.log('All promises are completed!')
})