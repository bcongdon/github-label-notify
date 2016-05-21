var watch_list = require("./watch_list.js");
var notify = require("./notify.js");
var storage = require('node-persist');
var github = require('./github.js');

var exports = module.exports;

function notify_on_issues(issues){
    'using strict'
    issues.forEach(function(curr){
        var labels = []
        curr.labels.forEach(function(l){
            labels.push(l.name)
        });
        notify.ifttt_notify(curr.title + " (" + curr.number + ")",
            labels.join(", "),
            curr.html_url
        );
    });
}

exports.run_check = function(initial){
    for(var i = 0; i < watch_list.data().length; i++){
        repo_entry = watch_list.data()[i];
        github.get_new_issues(repo_entry.user,
            repo_entry.repo,
            repo_entry.labels[0],
            function(res){
                if (initial) return;
                if (res) notify_on_issues(res);
            });
    }
}