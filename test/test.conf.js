
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 50000,
  specs: ['protractor/**/*.js'],

  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
  }

};
