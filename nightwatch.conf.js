const seleniumServer = require('selenium-server')
// const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')
// const iedriver = require('InternetExplorerDriver')
// const geckodriver = require('geckodriver')
var SauceLabs = require("saucelabs");

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'timeout.js',
    '--require', 'step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json', 'features']
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1', 
    port: 4444,
    // cli_args : {
    //   'webdriver.chrome.driver' : chromedriver.path,
    //   'webdriver.gecko.driver' : geckodriver.path
    // }
  },
  test_settings: {
    end_session_on_fail: false,
    skip_testcases_on_fail: false,
    default: {
      launch_url: 'http://localhost:3000/',//'https://int.ncscdev.co.uk/?crafterSite=ncsc', 
      // selenium_host: 'ondemand.saucelabs.com',
      // selenium_port: 80,
      // username: 'mrobertson', //Starbucks12 and need run this >> bin/sc -u mrobertson -k 809c02ac-cc3a-4335-b9ba-84bab261527f
      // access_key: '809c02ac-cc3a-4335-b9ba-84bab261527f',
      // access_key: '5249a2c7-66b7-49b1-9b11-464b908c18e0',
      use_ssl: false,
      silent: true,
      output: true,
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
    
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/screenshots'
      },

      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        // 'phantomjs.binary.path': phantomjs.path,
        'webdriver.chromedriver.driver': chromedriver.path,
        // '--window-size': '320,640',
      }
    },

    chrome: {
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/screenshots'
      },
      // silent: true,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chromedriver.driver': chromedriver.path,
        }
      }
    },
    safari: {
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/screenshots'
      },
      desiredCapabilities: {
        browserName: 'safari',
        // platformName:'iOS',
        // platformVersion: '10.0.3',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      // selenium: {
      //   cli_args: {
      //     'webdriver.safaridriver.driver': safaridriver.path,
      //   }
      // }
    },
    firefox: {
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/screenshots'
      },
      // silent: true,
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true,
        javascriptEnabled: true,
        acceptSslCerts: true
      },

      selenium: {
        // start_process : true,
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path,
        }
      }
    },
    IE: {
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/screenshots'
      },
      desiredCapabilities: {
        browserName: 'internet explorer',
        ignoreProtectedModeSettings:true,
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      // selenium: {
      //   // start_process : true,
      //   cli_args: {
      //     'webdriver.ie.driver': InternetExplorerDriver.path,
      //   }
      // }
    },
    Edge: {
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/screenshots'
      },
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      // selenium: {
      //   // start_process : true,
      //   cli_args: {
      //     'webdriver.edge.driver': MicrosoftWebDriver.path,
      //   }
      // }
    },
    Android: {
      desiredCapabilities: {
        name : 'Nightwatch - Mobile Web Android',
        appiumVersion: '1.6.5',
        platformName: 'Android',
        platformVersion: '7.0',
        deviceName : 'Android GoogleAPI Emulator',
        browserName: 'chrome'
      },
      globals: {
        propertyData: {
          environment:'android-7'
        }
      }
    },
    iphone: {
      desiredCapabilities: {
        name : 'Nightwatch - Mobile Web iphone',
        appiumVersion: '1.7.1',
        platformName: 'iOS',
        platformVersion: '11.0',
        deviceName : 'iPhone X Simulator',
        browserName: 'chrome'
      },
      globals: {
        propertyData: {
          environment:'iPhone X'
        }
      }
    },
  }
}





/**
 * To run the browsers in server use this link 
 * https://stackoverflow.com/questions/36804758/cannot-launch-safari-browser-with-nightwatch
 * 
 * To run the tests oin different browsers use this link left hand panel have all the links
 * https://github.com/nightwatchjs/nightwatch/wiki/Microsoft-Edge-Browser-Setup


/**
 * This is old settings just kept for record will delete after the framework is stable
 */

// const seleniumServer = require('selenium-server');
// const chromedriver = require('chromedriver');
// const geckodriver = require('geckodriver');
// const phantomjs = require('phantomjs-prebuilt');

// require('nightwatch-cucumber')({
//   cucumberArgs: ['--require', 'step_definitions',
//                  '--format', 'node_modules/cucumber-pretty', 
//                  '--format', 'json:reports/cucumber.json', 'features']
// });



// module.exports = {
//   output_folder: 'reports',
//   custom_assertions_path: '',
//   page_objects_path: 'page_objects',
//   globals_path : '',
//   live_output: false,
//   disable_colors: false,
//   selenium: {
//     start_process: true,
//     server_path: seleniumServer.path,
//     log_path: '',
//     host: '127.0.0.1',
//     port: 4444,
//     cli_args : {
//       'webdriver.chrome.driver' : chromedriver.path,
//       'webdriver.gecko.driver' : geckodriver.path
//     }
//   },
//   test_settings: {
//     default: {
//       launch_url: 'https://authoring.uat.ncscdev.co.uk/studio#/login',
//       selenium_port: 4444,
//       selenium_host: '127.0.0.1',
//       desiredCapabilities: {
//         // browserName: 'firefox',
//         browserName: 'chrome',
//         javascriptEnabled: true,
//         // acceptSslCerts: true,
//         // chromeOptions: {
//         //   args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
//         // }
//       },
//       // selenium: {
//       //   cli_args: {
//       //     'webdriver.chrome.driver': chromedriver.path,
//       //     // 'webdriver.gecko.driver': geckodriver.path find out parallel execution with cross browser
//       //   }
//       // }
//     },
//     chrome: {
//       desiredCapabilities: {
//         browserName: 'chrome',
//         javascriptEnabled: true,
//         acceptSslCerts: true
//       },
//     //   selenium: {
//     //     cli_args: {
//     //       'webdriver.chrome.driver': chromedriver.path
//     //     }
//     //   }
//     },
//     firefox: {
//       desiredCapabilities: {
//         browserName: 'firefox',
//         javascriptEnabled: true,
//         marionette: true
//       },
//       // selenium: {
//       //   cli_args: {
//       //     'webdriver.gecko.driver': geckodriver.path
//       //   }
//       // }
//     }
//   }
// };














