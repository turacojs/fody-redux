var production = process.env.NODE_ENV === 'production';
return module.exports = require('./lib-node6' + (production ? '' : '-dev') + '/ReduxApp');
// help autocomplete
module.exports = require('./src/ReduxApp');
