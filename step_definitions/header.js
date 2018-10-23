const { client } = require('nightwatch-cucumber');
const { Given, Then, When, After, Before } = require('cucumber');
var timeoutSettings = require('../commonUtils/timeoutSettings');
var getPageTimeout = timeoutSettings.config.STEPTIMEOUT;
var headerPage = require('../pages/headerObjects')
var guidancePage = require('../pages/guidance')


Before(function (scenario) {
    return client
        .init()
        // .resizeWindow(375, 812) 
        // .resizeWindow(768,1042)
        .pause(1000);
});

After(function (scenario) {
    return client
        .end();
});

Given(/^user want to open the ncsc website$/, function () {
    return client
        // .resizeWindow(375, 812)
        .pause(1000)
    // .waitForElementVisible(headerPage., getPageTimeout)
});

When(/^user verify the home page title \"([^\"]*)\"$/, function (title) {
    return client.assert.title(title)
});

Then(/^user verify is on the ncsc home pape \"([^\"]*)\"$/, function (welcome_message) {
    return client
        .useXpath()
        .waitForElementVisible(headerPage.ncsc_welcome_message, getPageTimeout)
        // .expect.element('h1').text.to.contain(welcome_message)
        .assert.containsText(headerPage.ncsc_welcome_message, welcome_message)

});
Then(/^user check ncsc header is available$/, function () {
    return client
        .useCss()
        .waitForElementVisible(headerPage.header_ncsc, getPageTimeout)
        .assert.visible(headerPage.header_ncsc)
});

When(/^user verify ncsc logo is available$/, () => {

    client.isVisible(headerPage.mobile_header_logo, results => {
        if (results.value) {
            return client
                .waitForElementVisible(headerPage.mobile_header_logo, getPageTimeout)
                .assert.visible(headerPage.mobile_header_logo)
        }
        else {
            return client
                .waitForElementVisible(headerPage.header_logo, getPageTimeout)
                .assert.visible(headerPage.header_logo)
        }
    });
});

Then(/^user looks for the search functionality$/, function () {
    client.isVisible(headerPage.mobile_header_search_button, results => {
        if (results.value) {
            console.log('user looks for the search functionality is visible for mobile ', results.value)
            return client
                .waitForElementVisible(headerPage.mobile_header_search_button, getPageTimeout)
                .assert.visible(headerPage.mobile_header_search_button)
        }
        else {
            console.log('user looks for the search functionality is visible for normal ')
            return client
                .waitForElementVisible(headerPage.header_search_button, getPageTimeout)
                .assert.visible(headerPage.header_search_button)
        }
    });
});


Then(/^user looks for the cisp media centre and signin navigation bar$/, function () {

    client.isVisible(headerPage.header_links_cisp_mediacentre_signin, results => {
        if (results.value) {
            console.log('This view is desktop and tab view')
            return client
                .assert.visible(headerPage.header_links_cisp_mediacentre_signin)
        } else {
            console.log('This view is only mobile')
            // client.verify.visible(headerPage.header_links_cisp_mediacentre_signin)
        }
    });
});

Then(/^user looks for the header links$/, function () {

    client.isVisible(headerPage.header_links_main, results => {
        if (results.value) {
            console.log('This is destop and tab view')
            return client
                .waitForElementVisible(headerPage.header_links_main, getPageTimeout)
                .assert.visible(headerPage.header_links_main)
        } else {
            console.log('This is mobile view only')
            // client.verify.visible(headerPage.header_links_main)
        }
    })
});

When(/^user clicks on the header links one by one$/, () => {
    client.isVisible(headerPage.header_links_main, results => {
        console.log('This is normal view desktop and tab')
        if (results.value) {
            client.elements('css selector', headerPage.header_links, function (allLinks) {
                allLinks.value.forEach(function (index) {
                    console.log('Element value is ' + index.ELEMENT)
                    client.elementIdClick(index.ELEMENT, function (res) {
                        client.back();
                    });
                })
            });
        } else {
            console.log('This is mobile view')
            client.click(headerPage.mobile_header_menu_bars)
                .waitForElementPresent(headerPage.header_links, getPageTimeout)
            client.elements('css selector', headerPage.header_links, function (allLinks) {
                allLinks.value.forEach(function (index) {
                    console.log('Element value is ' + index.ELEMENT)
                    client.elementIdClick(index.ELEMENT, function (res) {
                        client.back();
                    });
                })
            });
        }
    })
    // client.elements('css selector', headerPage.header_links, function (allLinks) {
    //     allLinks.value.forEach(function (index) {
    //         console.log('Element value is ' + index.ELEMENT)
    //         client.elementIdClick(index.ELEMENT, function (res) {
    //             client.back();
    //         });
    //     })
    // });





    // client.elements('css selector', headerPage.header_links,function (links) {
    //     for (var i=0; i < links.value.length; i++) {
    //         // client.pause(1000);
    //         client.elementIdClick(links.value[i].ELEMENT);
    //         // client.waitForElementVisible('.article-detail');
    //         // client.expect.element(element.postHeroTitle).to.be.present;
    //         client.back();
    //     }
    // })
});

Then(/^user see links navigating to the defined page$/, function () {
    console.log('Header links are navigated to the defiend')
});