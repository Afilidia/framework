let log = require('./logger'),
data = require('../data'),
fs = require('fs'),
admin = {
    searchLogs: (searchString, onlyCalc) => {
        data.readLog((logFile)=>{
            let results = [];
            let line = 0;
            let entries = logFile.split(`­\n${data.colors.reset}`);
            entries.forEach(entry => {
                entry.split("\n").forEach(_ => {line++});
                if(entry.includes(searchString)) results.push([line,entry]);
            });
            let resStr = "";
            if(!onlyCalc) results.forEach(result => {
                resStr += `$(fg-cyan)Line: ${result[0]}\n$(fg-white)${result[1]}\n`;
            });
            resStr += `$(fg-cyan)Total lines: ${results.length}`;
            log(0, resStr, false, false, false)
        });
    }
}
module.exports = admin;