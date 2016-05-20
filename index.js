var GitHubApi = require("github");
var watch_list = require("./utils/watch_list.js")
 
var github = new GitHubApi({
    // required 
    version: "3.0.0"
});

github.issues.repoIssues({
    user: "matplotlib",
    repo: "matplotlib",
    state: "open",
    labels: "Difficulty: Medium"
}, function(err, res){
    if(err){
        console.log(err)
        throw(err)
    }
    for(var i = 0; i < res.length; i++){
        console.log(res[i].html_url)
    }
});