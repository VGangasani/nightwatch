const { client } = require('nightwatch-cucumber');
const { After, Before } = require('cucumber');
var device = require('../nightwatch.conf')

module.exports = {
  Before: function (scenario) {
    console.log('Setting up ...');
    return client
      .init()
      .url(device.test_settings.default.launch_url)
    if (device.test_settings.iphone) {
      console.log('Setting up iphone browser size...');
      client.resizeWindow(375, 667);

    } else if (device.test_settings.Android) {
      console.log('Setting up android browser size...');
      client.resizeWindow(375, 667);
    }
    else{
      console.log('Setting up normal browser ...');
    }
    
  },

  After: function (scenario) {
    return client.end();
    console.log('Closing down...');
  },

  // beforeEach : function(browser) {

  // },

  // afterEach : function() {

  // },

  // 'step one' : function (browser) {
  //   browser
  //    // ...
  // },

  // 'step two' : function (browser) {
  //   browser
  //   // ...
  //     .end();
  // }
};