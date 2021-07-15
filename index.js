let config = require('./config.json');
require('./bin/www')(config.server.port);