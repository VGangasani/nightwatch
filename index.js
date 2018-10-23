var reporter = require('cucumber-html-reporter');
const browser = require('./nightwatch.conf')
// var browsers = require('../pages/headerObjects');
 
var options = {
        theme: 'bootstrap',
        jsonFile: './reports/cucumber.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"",
            "Test Environment": "int",
            "Browser": {},
            "Platform": "",
            "Parallel": "Scenarios",
            "Executed": ""
        }
    };
 
    reporter.generate(options);