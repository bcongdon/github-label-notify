var watch_list = require('./utils/watch_list.js')
var inquirer = require('inquirer');
var trim = require('trim')

var prompts = [
  {
    name: 'user',
    message: 'Repo Username:',
    validate: function (input) {
      return input.length > 0
    }
  },
  {
    name: 'repo',
    message: 'Repo Name:',
    validate: function (input) {
      return input.length > 0
    }
  },
  {
    name: 'labels',
    message: 'Labels to watch: (Comma separated)',
    validate: function (input) {
      return input.length > 0
    }
  },
  {
    name: 'add_another',
    message: 'Add another repo?',
    type: 'confirm'
  }
]

function doPrompt() {
    inquirer.prompt(prompts).then(function(answers) {
        var parsed_labels = answers.labels.split(',');
        parsed_labels = parsed_labels.map(function(label){
            return trim(label);
        });
        watch_list.create_entry(answers.user,
            answers.repo,
            parsed_labels);

        if(answers.add_another){
            doPrompt();
        }
    });
}

doPrompt();