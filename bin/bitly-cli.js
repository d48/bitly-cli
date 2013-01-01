#! /usr/bin/env node

var Bitly   = require('bitly')
  , path    = require('path')
  , config  = require( path.join(__dirname, '../config', 'config.json') )
  , bitly   = new Bitly(config.username, config.apiKey)
  , exec    = require('child_process').exec
  , args    = process.argv.splice(2)
  , command = args[0]
  , log     = console.log
  ;

var commands = { 
  shorten: shorten
  , help: help
};


// Main functions
// ----------------------------------------------------------------------------

/**
 * Calls bitly api to shorten url
 * 
 * @param cmd {String} cli command, to cache
 * @param url {String} url to shorten
 * @return {String} shortened url in format d48.io/someRandomString
 */
function shorten(cmd, url) {
  log('Shortening this url: ', url);

  bitly.shorten(url, function(err, res) {
    if(err) {
      console.log("Error thrown: ", err);
    } else {
      var shortUrl = res.data.url;
      log("Result: ", shortUrl);
      exec("echo " + shortUrl + " | pbcopy");

      log("\n" + shortUrl + " has been copied to the clipboard.")
    }
  });
};

/**
 * Usage
 * 
 * @param url {String} url string to convert
 * @return void log output of how to use
 */
function help() {
  log('Usage: bitly shorten "http://www.someurl.com"');
};


// kick off the command parsed from the command-line
commands[command].apply(this, args);
