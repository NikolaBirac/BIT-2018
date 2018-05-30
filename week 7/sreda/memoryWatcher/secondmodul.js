const memoryinfo = require('./memoryInfo');

const alertMessage = (memory) => {
    console.log(`Amount of your memory is ${memory}`)
};
memoryinfo.startChecking();
memoryinfo.RegisterForAlerts(alertMessage);
