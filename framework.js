let data = require('./data.js'),
framework = {
    colors: data.colors,
    config: data.config,
    log: require('./framework/logger'),
    admin: require('./framework/admin'),
    logo: require('./framework/logo'),
    cli: require('./framework/cli')
}
module.exports = framework;