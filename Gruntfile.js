/*
 * grunt-webdriver-protractor
 * https://github.com/Velan/grunt-webdriver-protractor
 *
 * Copyright (c) 2014 Velan Vijatovic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    'webdriver-protractor': {
      options: {
        configFile: 'test/test.conf.js'
      }
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['webdriver-protractor']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
