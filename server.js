var http = require('http')
  , app = require('./config/express')()
  , config = require('./config/config')()
  ;
require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address, function () {
    console.log('Express Https Server ' + config.address + ' (' + config.env + ') escutando na porta ' + config.port);
});