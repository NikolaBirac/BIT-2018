const os = require('os');

let handlerFunction = [];

const checkMemory = () => {
    let memory = os.freemem() / 1024 / 1024;
    if (memory < 2024) {
        for (let i in handlerFunction) {
            handlerFunction[i](memory);
        }
    } else {
        console.log("You're okay!")
    }
};

const startChecking = () => setInterval(checkMemory, 1000);


const RegisterForAlerts = (handler) => {
    handlerFunction.push(handler);
};



module.exports = { RegisterForAlerts, startChecking }; 
