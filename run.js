var checker = require('./utils/checker.js')
var scheduler = require('node-schedule');

var currSeconds = new Date().getSeconds();

// Run every 1 minute
scheduler.scheduleJob(currSeconds + " * * * * *", function(){
    console.log("Running scheduled check at " + new Date().toString("yyyy-MM-dd HH:mm:ss"));
    checker.run_check();
})