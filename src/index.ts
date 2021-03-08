var express = require('express');
var app = express();
var cors= require('cors');

// Environments
var env = process.env.NODE_ENV || 'development';
var envConfig = require('./config/env')[env];

// Express configuration
require('./config/config')(app, envConfig);

// Database
// require('./config/database')(envConfig)

// Routes
require('./config/routes')(app);

app.get('/ping',(req: any,res: { send: (arg0: string) => void; })=>{
  res.send('pong')
})
// Start server
app.listen(envConfig.port, function(){
	// console.log(envConfig.database)
  console.log('Server listening on port ' + envConfig.port);
});