var inquirer = require('inquirer');
var IFTTT = require('node-ifttt-maker');
var checker = require('./utils/checker.js')

const Configstore = require('configstore');
const pkg = require('./package.json');
const config = new Configstore(pkg.name);

var prompts = [
  {
    name: 'ifttt_key',
    message: 'IFTTT Maker Key:',
    validate: function (input) {
      return input.length > 20
    }
  }
]

console.log("Please activate your IFTTT Maker channel and enter your Secret Key below.")
inquirer.prompt(prompts).then(function(answers) {
  var ifttt = new IFTTT(answers.ifttt_key);
  ifttt.request({
    event: 'event',
    method: 'GET',
    params: {
        'value1': 'test',
        'value2': 2,
        'value3': {
            x: 1, y: 2
        }
    }
  }, function (err) {
      if (err) {
        console.log("Could not validate credentials.");
      } else {
        config.set("ifttt_key", answers.ifttt_key);
        console.log("Credentials saved.");
        console.log("Running initial issue check.");
        checker.run_check(true);
        console.log("Completed setup.")
      }
  });
});