
'use strict';

var spawn = require( 'child_process' ).spawn;
var gruntRef, selenium, protractor, complete, protractorOptions;
var seleniumCommand = 'webdriver-manager';
var seleniumOptions = [ 'start' ];
var protractorCommand = 'protractor';
var seleniumRunning = false;


var displayError = function( data ) {

  gruntRef.log.debug( data );

  if( data.match && data.match( /Selenium is already running/ ) ) {

    gruntRef.log.debug( 'Selenium is already started' );
    seleniumRunning = true;
    startProtractor();

  }

};

var displayLog = function( data ) {

  gruntRef.log.write( data );

};

var handleOutput = function( data ) {

  gruntRef.log.debug( data );

  if( data.match && data.match( /Started\sSocketListener/ ) ) {

    gruntRef.log.debug( 'Selenium started!' );
    startProtractor();

  }

};

// In case the selenium process has ended before the 
var handleSeleniumStop = function( code, signal ) {

  if( code !== 143 ) {

     gruntRef.fatal( 'There was an issue with Selenium, you might want to run with the -debug option to check what\'s wrong' );

  }
  else {
    complete();
  }
};

var stopSelenium = function() {

  gruntRef.log.debug( 'Stopping Selenium' );

  // Kill the whole group
  spawn( 'pkill', ['-TERM', '-P', selenium.pid] );

  // process.kill( selenium.pid, 'SIGINT' );

};

var startProtractor = function() {

  gruntRef.log.debug( 'Starting protractor...' );

  protractor = spawn( protractorCommand, protractorOptions, {

    cwd: '.'

  });

  protractor.stderr.on( 'data', displayError );
  protractor.stdout.on( 'data', displayLog );

  // When the tests have completed, shut down Selenium
  protractor.on( 'close', function( code, signal ) {

    if( ! seleniumRunning ) {
      stopSelenium();
    }
    // complete();

  });

};

module.exports = function( grunt ) {

  gruntRef = grunt;

  grunt.registerTask(
    'webdriver-protractor',
    'A simple grunt plugin that starts webdriver, runs protractor tests and stops webdriver', function() {

      complete = this.async();

      var options = this.options();

      if( !options.configFile && typeof !options.configFile !== 'string' ) {

        grunt.fatal( 'You must specify a configFile path' );

      }

      protractorOptions = [ options.configFile ];

      grunt.log.debug( 'Starting selenium...' );

      selenium = spawn( seleniumCommand, seleniumOptions, {
        cwd: '.'
      });

      selenium.stderr.setEncoding( 'utf8' );
      selenium.stdout.setEncoding( 'utf8' );

      selenium.stderr.on( 'data', displayError );
      selenium.stdout.on( 'data', handleOutput );

      selenium.on( 'exit', handleSeleniumStop );
      selenium.on( 'close', handleSeleniumStop );
 
    });

};
