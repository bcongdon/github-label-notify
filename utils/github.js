var GitHubApi = require("github");
var storage = require('node-persist');

var github = new GitHubApi({
    // required 
    version: "3.0.0"
});

var exports = module.exports

reset_storage = function() {
    storage.initSync();
    storage.clearSync();
}

exports.get_new_issues = function(usr, repo, labels, callback) {
    github.issues.repoIssues({
        user: usr,
        repo: repo,
        state: "open",
        labels: labels
        }, function(err, res){
            if(err){
                throw(err)
            }
            storage.initSync();
            var dict = storage.getItem("github_issues")
            var new_issues = []
            dict = dict || {}
            for(var i = 0; i < res.length; i++){
                if(!(res[i].html_url in dict)){
                    new_issues.push(res[i])
                    dict[res[i].html_url] = res[i]
                }
            }
            storage.setItem("github_issues", dict);
            callback(new_issues);
    });
}