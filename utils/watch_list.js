var file = __dirname + '/../watch_list.json';
var jsonfile = require('jsonfile');

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