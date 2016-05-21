#!/usr/bin/env node
var pkg = require('./package.json');

var app = require('commander')

app
    .version(pkg.version)
    .command('setup', 'Setup GLNotify with your IFTTT Maker Key')
    .command('run', 'Watches your watch list for new issues.', {isDefault: true})
    .command('clear', 'Clears issues marked as \'seen\'')
    .parse(process.argv);

