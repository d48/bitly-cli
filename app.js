var Bitly = require('bitly');
var path  = require('path');
var config = require( path.join(__dirname, 'config', 'config.json') );


var bitly = new Bitly(config.username, config.apiKey);
