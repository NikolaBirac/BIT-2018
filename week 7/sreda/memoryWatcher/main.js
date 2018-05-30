const memoryinfo = require('./memoryInfo');

const alertMessage = (memory) => {
    console.log(`ALERT! Amount of your memory is ${memory}`)
};
memoryinfo.startChecking();
memoryinfo.RegisterForAlerts(alertMessage);