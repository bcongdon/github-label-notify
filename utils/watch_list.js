var fs = require('fs');
var file = __dirname + '/../watch_list.json';

var exports = module.exports;

exports.data = function() {
  try{
      data = fs.readFileSync(file, 'utf8');
      data = JSON.parse(data);
      return data
  }
  catch(err){
    console.log("ERROR: Unable to loading watch_list.json")
    return []
  }
}