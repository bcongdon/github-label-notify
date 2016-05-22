var path = require('path')
var forever = require('forever')

forever.start(path.join(__dirname, 'run.js'), {'uid': 'glnotify'})