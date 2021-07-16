let fs = require('fs');
module.exports = {
    colors: require('./framework/colors'),
    config: require('./config.json'),
    addLogEntry: (text) => {
        fs.appendFile(`./main.log`, `\n${text}`, 'utf8', (err)=>{});
    },
    readLog: (callback) => {
        callback(fs.readFileSync('./main.log', 'utf8').toString());
    }
};