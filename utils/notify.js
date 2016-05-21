var fs = require('fs');
var IFTTT = require('node-ifttt-maker');

const Configstore = require('configstore');
const pkg = require('./../package.json');
const config = new Configstore(pkg.name);

var exports = module.exports;

if(!config.get("ifttt_key")){
    console.log("ERROR: No IFTTT key found. Please run 'glnotify setup'.")
}

exports.ifttt = new IFTTT(config.get('ifttt_key'));

exports.ifttt_notify = function(param1, param2, param3) {
    exports.ifttt.request({
        event: 'new_github_issue',
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
            console.log("* Sent IFTTT notification: ")
            console.log("  '" + param1 + "'");
            console.log("  '" + param2 + "'");
            console.log("  '" + param3 + "'");
        }
    });
}