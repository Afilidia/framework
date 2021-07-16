let
framework = require('./framework'),
fs = require('fs'),
Table = require('easy-table'),
line = ()=>{},
list = {
    log: {
        search: {exec: (args)=>{framework.admin.searchLogs(args.join(" "))}, desc: "Search entries in log with text"},
        calculate: {exec: (args)=>{framework.admin.searchLogs(args.join(" "), true)}, desc: "Calculate entries in log with text"},
        exec: (args)=>{framework.log(0, list.help.exec(["log"]))}
    },
    echo: {exec: (args)=>{framework.log(0,args.join(" "))}, desc: "Print text to CLI"},
    help: {exec: (args)=>{
        if(args[0]&&list[args[0]]) {
            let fullCommand = list[args[0]];
            for (let i = 1; i < args.length; i++) fullCommand = fullCommand[args[i]] || false;
            if(!fullCommand||(!fullCommand.desc&&Object.keys(fullCommand).length<2)) return framework.log(0, "This command is not available to show");
            let table = new Table();
            if(Object.keys(fullCommand).length>1) {
                Object.keys(fullCommand).forEach(commandKey => {
                    let commandValue = fullCommand[commandKey];
                    if(commandKey != "exec" && commandKey != "desc") {
                        table.cell('Argument', `$(fg-blue)${commandKey}$(gb-reset)`);
                        table.cell('Description', `$(gb-reset)${commandValue.desc||""}`);
                        table.newRow();
                    }
                });
            }
            framework.log(0, `$(fg-blue)${args.join(" ")}$(gb-reset)${fullCommand.desc ? `\t-\t${fullCommand.desc}`:""}\n${table.toString()}`);
        } else {
            let table = new Table();
            Object.keys(list).forEach(commandKey => {
                let commandValue = list[commandKey];
                table.cell('Command', `$(fg-blue)${commandKey}$(gb-reset)`);
                table.cell('Description', `$(gb-reset)${commandValue.desc||""}`);
                table.newRow();
            });
            framework.log(0, `$(fg-blue)Hello Admin! $(fg-cyan)Here is your abilities list:$(gb-reset)\n${table.toString()}`);
        }
    }, desc: "This command gives you a helping hand with command list and helpful informations"},
    run: {exec: (args=>{
        fs.readFile(args[0],(err, script)=>{
            if(err) return framework.log(0,`$(fg-red)No such file`)
            script = script.toString();
            let i = 0;
            let lines = script.split('\n');
            let runnextline = () => {
                line(lines[i]);
                i++;
                if(i<lines.length) runnextline();
            };
            runnextline();
        });
    }), desc: "Executes Raptor script (file.rs)"},
    diagnostic: {exec: (args)=>{
        process.report.writeReport(args.length?args.join(" "):"diag.json");
    }, desc: "Creates file with diagnostic data (diagnostic file.json)"},
    restart: {exec: (args)=>{
        process.exit();
    }, desc: "Restarts worker"},
    stop: {exec: (args)=>{
        process.exit(2);
    }, desc: "Sends exit signal to manager"}
},
update = (linef) => {
    line = linef;
};
module.exports = {update, list};