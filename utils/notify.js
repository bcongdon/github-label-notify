var fs = require('fs');
var file = __dirname + '/../config.json';
var IFTTT = require('node-ifttt-maker');

var exports = module.exports;
var data = {}
try{
  data = fs.readFileSync(file, 'utf8');
  data = JSON.parse(data);
}
catch(err){
    console.log("ERROR: Unable to loading config.json")
}

exports.ifttt = new IFTTT(data.ifttt)

exports.ifttt_notify = function(param1, param2, param3) {
    exports.ifttt.request({
        event: data.event_name,
        method: 'GET',
        params:{
            'value1': param1,
            'value2': param2,
            'value3': param3
        }
    }, function(err) {
        if(err){
            throw(err);
        }
        else {
            console.log("Sent IFTTT notification.")
        }
    });
}