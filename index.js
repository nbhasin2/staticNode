var wintersmith = require('wintersmith');
var env = wintersmith('./config.json');

env.build(function(error) {
  if (error) throw error;
  require('./server').start({
    name: 'bhasin.me',
    publicPath: 'build' // This is the default output directory for Wintersmith. Change this if you've configured it differently.
  });
});