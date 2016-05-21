var path = require('path')
var file = path.join(__dirname, '..','watch_list.json');
var jsonfile = require('jsonfile');
var trim = require('trim')

var exports = module.exports;

exports.data = function() {
  try{
      return jsonfile.readFileSync(file);
  }
  catch(err){
    console.log("ERROR: Unable to loading watch_list.json")
    return []
  }
}

exports.save = function(new_data) {
    jsonfile.writeFileSync(file, new_data, {spaces: 4});
}

exports.create_entry = function(user, repo, labels) {
    var data = exports.data();
    new_entry = {
        'user': trim(user),
        'repo': trim(repo),
        'labels': labels
    }
    // Remove duplicate repos
    data = data.filter(function(element){
        return !(element.user === new_entry.user &&
                    element.repo === new_entry.repo)
    })
    data.push(new_entry);
    exports.save(data);
}