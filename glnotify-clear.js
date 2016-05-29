var storage = require('node-persist')

// Will blow away:
//  - watch_list saved repos
//  - saved ('read') issues
storage.initSync();
storage.clearSync();