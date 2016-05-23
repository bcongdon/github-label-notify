#!/usr/bin/env node
var pkg = require('./package.json');

var app = require('commander')

app
    .version(pkg.version)
    .command('setup', 'Setup GLNotify with your IFTTT Maker Key')
    .command('run', 'Watches your watch list for new issues.', {isDefault: true})
    .command('clear', 'Clears issues marked as \'seen\'.')
    .command('add', 'Add repos/labels to your watch list. Overwrites duplicate repos.')
    .command('init', 'Mark all current issues in watch list as read')
    .parse(process.argv);

