var path = require('path')
var file = path.join(__dirname, '..','watch_list.json');
var jsonfile = require('jsonfile');
var trim = require('trim');
var storage = require('node-persist');
var fs = require('fs');

var exports = module.exports;

exports.data = function() {
  storage.initSync();
  if (!storage.getItem('watch_list')){
    storage.setItem('watch_list', []);
  }
  return storage.getItemSync('watch_list');
}

exports.save = function(new_data) {
    storage.initSync();
    storage.setItem('watch_list', new_data);
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