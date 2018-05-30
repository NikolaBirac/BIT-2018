const figlet = require('figlet');//samo ime modula koji download-ujemo
const drawing = () =>
    figlet.textSync('Frontend Bootcamp');

module.exports.drawing = drawing;