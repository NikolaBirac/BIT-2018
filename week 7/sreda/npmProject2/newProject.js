const lorem = require('lorem-ipsum');



const blog = () => {

    let counter = 0;
    const arr = [];
    for (let i = 0; i < 20; i++) {
        const obj = {};

        obj.id = counter;
        obj.title = lorem({
            count: 3,
            units: 'words'
        })
        obj.text = lorem({
            count: 2,
            units: 'sentences'
        })
        arr.push(obj);
        counter++;
    }
    return arr;
}

module.exports = blog;