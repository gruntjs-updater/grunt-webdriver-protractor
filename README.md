grunt-webdriver-protractor
==========================

This plugin makes it easy to integrate your protractror tests as a part of your Grunt testing process. You *need* to have webdriver and protractor already installed and accessible on your PATH or this won't work.

I most certainly does not work on Windows either.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-webdriver-protractor --save-dev
```

### Prerequisites

Follow intructions on how to get started with [Protractor](https://github.com/angular/protractor/blob/master/docs/getting-started.md#setup-and-config)

You need to be able to to launch webdriver `webdriver start` and protractor `protractor config.js` before using this plugin.

The plugin also works seamlessly if webdriver is already running.

## Configuration

```js
'webdriver-protractor': {
  options: {
    configFile: 'protractor.conf.js'
  }
},
```

That's all there is. I'll add other Protractor options, or alternative ways to start webdriver in a later release.

## Debug

If you have any issue using this plugin, you can run grunt `webdriver-protractor -debug` to get more informations on what went wrong.

## Test

    grunt
Runs grunt-jshint and grunt-webdriver-protractor

## Release History
- 0.0.3 Added a test exemple, bugfix
- 0.0.2 Documentation
- 0.0.1 Initial release

## Known issues
- There are no tests. Yet! There will be in the next release.
- Does not work on windows.

