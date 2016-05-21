var forever = require('forever')

forever.start('./run.js', {'uid': 'glnotify'})