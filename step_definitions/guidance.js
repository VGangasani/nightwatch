const { client } = require('nightwatch-cucumber');
const { Given, Then, When, After, Before } = require('cucumber');
var timeoutSettings = require('../commonUtils/timeoutSettings');
var getPageTimeout = timeoutSettings.config.STEPTIMEOUT;
var headerPage = require('../pages/headerObjects')
var guidancePage = require('../pages/guidance')


// \"([^\"]*)\"
//"([^"]*)"


Before(function (scenario) {
    return client
        .init()
        // .pause(2000)
        .maximizeWindow();
});

After(function (scenario) {
    return client
        .end();
});

Then(/^user clicks on the search finctionality$/, function () {
    client.isVisible(headerPage.header_search_button, results => {
        if (results.value) {
            console.log('control is coming here to click the header_search_button')
            return client
                .waitForElementVisible(headerPage.header_search_button, getPageTimeout)
                .click(headerPage.header_search_button)
        } else {
            console.log('control is coming here to check the mobile_header_search_button')
            return client
                .waitForElementPresent(headerPage.mobile_header_search_button, getPageTimeout)
            client.useXpath().click(headerPage.mobile_header_search_button)
        }
    })
});

Then(/^user see the input search box$/, function () {
    return client
        .waitForElementVisible(guidancePage.header_search_input, getPageTimeout)
        .assert.visible(guidancePage.header_search_input)
});

When(/^user enter the search query as \"([^\"]*)\"$/, (searchstring) => {
    return client
        .setValue(guidancePage.header_search_input, searchstring)
        .keys(client.Keys.ENTER)
    // .pause(15000)

});

Then(/^user clicks on the search to see the result$/, function () {
    return client
        .keys(client.Keys.ENTER)

});

Then(/^user see the search results$/, function () {
    return client
        .waitForElementVisible(guidancePage.search_result_page, getPageTimeout)
    assert.visible(guidancePage.search_result_page)
});


Then(/^user select the guidance page$/, function () {
    return client
        .waitForElementPresent(guidancePage.search_result_page, getPageTimeout)
        .click(guidancePage.search_result_click)
});

Then(/^user verify he is on guidance page$/, function () {
    return client
        .useXpath()
        .waitForElementPresent(guidancePage.guidance_title, getPageTimeout)
        .assert.visible(guidancePage.guidance_title, "guidance")
});

Then(/^user verify guidance title is available$/, function () {
    return client
        .useXpath()
        .waitForElementPresent(guidancePage.guidance_type, getPageTimeout)
        .assert.visible(guidancePage.guidance_type)
});

Then(/^user verify guidance summary is available$/, function () {
    return client
        .useCss()
        .waitForElementPresent(guidancePage.guidance_summary, getPageTimeout)
        .assert.visible(guidancePage.guidance_summary)
});

Then(/^user verify created date ia available$/, function () {
    return client
        .useXpath()
        .waitForElementPresent(guidancePage.guidance_created_date, getPageTimeout)
        .assert.visible(guidancePage.guidance_created_date)
});

Then(/^user verify guidance information panel is available$/, function () {
    return client
        .useCss()
        .waitForElementVisible(guidancePage.guidance_detailed_container, getPageTimeout)
        .assert.visible(guidancePage.guidance_created_date)
});
Then(/^user verify published date is available$/, function () {
    return client
        .useXpath()
        .waitForElementVisible(guidancePage.guidance_published_date, getPageTimeout)
        .assert.visible(guidancePage.guidance_published_date)
});

Then(/^user verify reviewed date is available$/, function () {
    return client
        .useXpath()
        .waitForElementVisible(guidancePage.guidance_reviewed_date, getPageTimeout)
        .assert.visible(guidancePage.guidance_reviewed_date)
});

Then(/^user verify version is available$/, function () {
    return client
        .useXpath()
        .waitForElementVisible(guidancePage.guidance_version, getPageTimeout)
        .assert.visible(guidancePage.guidance_version)
});

Then(/^user verify written for is available$/, function () {
    return client
        .useXpath()
        .waitForElementVisible(guidancePage.guidance_written_for, getPageTimeout)
        .assert.visible(guidancePage.guidance_written_for)
});

Then(/^user verify guidance primary image is available$/, function () {
    return client
        .useCss()
        .waitForElementVisible(guidancePage.guidance_primary_image, getPageTimeout)
        .assert.visible(guidancePage.guidance_primary_image)
        .assert.visible(guidancePage.guidance_primary_image_caption)
});

Then(/^user verify guidance download panel is available$/, function () {

});

Then(/^user verify guidance in this guide is available$/, function () {
    return client
        .useXpath()
        .waitForElementVisible(guidancePage.guidance_in_this_guide, getPageTimeout)
        .assert.visible(guidancePage.guidance_in_this_guide)
});

Then(/^user verify guidance help text is available$/, function () {
    return client
        .useCss()
        .waitForElementVisible(guidancePage.guidance_information_panel_i, getPageTimeout)
        .assert.visible(guidancePage.guidance_information_panel_i)
});

When(/^user clicks on the i help text icon$/, function () {
    return client
        .useCss()
        .waitForElementVisible(guidancePage.guidance_information_panel_i, getPageTimeout)
        .click(guidancePage.guidance_information_panel_i)
});

Then(/^user see the sliding model window appear$/, function () {
    client.useXpath()
    client.isVisible(guidancePage.guidance_sliding_model, results => {
        if (results.value) {
            return client
                .waitForElementVisible(guidancePage.guidance_sliding_model, getPageTimeout)
                .assert.visible(guidancePage.guidance_sliding_model)
        } else {
            return client
                .waitForElementVisible(guidancePage.guidance_sliding_model_content, getPageTimeout)
                .assert.visible(guidancePage.guidance_sliding_model_content)
        }
    })
});

Then(/^user verify the help text is available in side model window$/, function () {
    return client
        .waitForElementVisible(guidancePage.guidance_sliding_model, getPageTimeout)
        .assert.visible(guidancePage.guidance_sliding_model)
});

Then(/^user closes the sliding model window$/, function () {
    return client.useCss()
        .click(guidancePage.guidance_sliding_model_close)
        // .waitForElementNotPresent(guidancePage.guidance_sliding_model_close, getPageTimeout)
});

Then(/^user looks for the tagged terms is available$/, function () {
    // client.verify.visible(guidancePage.guidance_tagged_term_toggle_media)
});

When(/^user clicks on the tagged term$/, function () {
    client.pause(3000).useXpath()
    client.isVisible(guidancePage.guidance_tagged_term_toggle_media, results => {
        if (results.value) {
            console.log('tagged term is available ')
            client.getText(guidancePage.guidance_tagged_term_toggle_media, function (term) {
                console.log('The tagged term is ' + term.value)
                var terms = term.value
                return terms
            })
            return client
                .useXpath()
                .waitForElementVisible(guidancePage.guidance_tagged_term_toggle_media, getPageTimeout)
                .click(guidancePage.guidance_tagged_term_toggle_media)
        } else {
            console.log('tagged term is not avaialble')
        }
    })
});

Then(/^user verify the tagged term is available inside model window$/, function () {
    client.pause(1000).useCss()
    client.isVisible(guidancePage.guidance_sliding_model_content, results => {
        if (results.value) {
            console.log('tagged term is available inside sliding model')
            client.useCss()

            client.getText(guidancePage.guidance_tagged_term_title, function (termTitle) {
                console.log('The tagged term is inside model ' + termTitle.value)
                // client.assert.equal(term.value, termTitle.value)
                client.assert.visible(guidancePage.guidance_sliding_model_other_terms_used_in)
            })

        } else {
            console.log('tagged term is not avaialble inside sliding model')
        }
    })
});

Then(/^user looks for the accordion is available$/, function () {
    client.useCss()
        .verify.visible(guidancePage.guidance_accordion)
});

Then(/^user clicks on the accordion and verify$/, function () {
    client.useCss().isVisible(guidancePage.guidance_accordion, accordions => {
        console.log('This is normal view desktop and tab to visible ')
        if (accordions.value) {
            client.elements('css selector', guidancePage.guidance_accordion, function (allLinks) {
                allLinks.value.forEach(function (index) {
                    console.log('Element value is ' + index.ELEMENT)
                    client.elementIdClick(index.ELEMENT, function (res) {
                        client.assert.visible(guidancePage.guidance_accordion_expanded_panel)
                    });
                })
            });
        } else {
            console.log('No accordion found in this page')
        }
    })
});

Then(/^user clicks on the accordion will disappear and verify$/, function () {
    client.isVisible(guidancePage.guidance_accordion, accordions => {
        console.log('This is normal view desktop and tab to disappear')
        if (accordions.value) {
            client.elements('css selector', guidancePage.guidance_accordion_header, function (allLinks) {
                allLinks.value.forEach(function (index) {
                    console.log('Element value is ' + index.ELEMENT)
                    client.elementIdClick(index.ELEMENT, function (res) {
                        // client.expect.element(guidancePage.guidance_accordion_expanded_panel).to.not.be.visible;
                    });
                })
            });
        } else {
            console.log('No accordion found in this page')
        }
    })
});

Then(/^user looks for the download panel and verify$/, function () {
    client.useCss().isVisible(guidancePage.guidance_download_panel, results => {
        if (results.value) {
            console.log('download panel and verify')
            client.assert.visible(guidancePage.guidance_download_panel)
        } else {
            console.log('download panel is not avaialble')
        }
    })
});

Then(/^user verify the documents information is visible$/, function () {
    //this needs to implement
});

Then(/^user looks for the topics panel$/, function () {
    client.useCss().isVisible(guidancePage.guidance_topics_panel, results => {
        if (results.value) {
            console.log('tagged term is available and clicked')
            client.assert.visible(guidancePage.guidance_topics_panel)
        } else {
            console.log('download panel is not avaialble')
        }
    })
});

Then(/^user verify the topics are clickable$/, function () {
    client.isVisible(guidancePage.guidance_accordion, accordions => {
        console.log('normal view desktop and tab to verify the topics are clickable')
        if (accordions.value) {
            client.elements('css selector', guidancePage.guidance_topics_tagged, function (allLinks) {
                allLinks.value.forEach(function (index) {
                    console.log('Element value is ' + index.ELEMENT)
                    client.elementIdClick(index.ELEMENT, function (res) {
                        client
                            .waitForElementVisible(guidancePage.guidance_topics_model_window, getPageTimeout)
                            .assert.visible(guidancePage.guidance_topics_model_window)
                            .keys(client.Keys.ESCAPE)
                    });
                })
            });
        } else {
            console.log('No accordion found in this page')
        }
    })
});

Then(/^user looks for the also see panel$/, function () {
    client.useCss().isVisible(guidancePage.guidance_also_see_panel, results => {
        if (results.value) {
            console.log('tagged term is available and clicked')
            client.assert.visible(guidancePage.guidance_also_see_panel)
        } else {
            console.log('download panel is not avaialble')
        }
    })
});

Then(/^user verify the also see panel got the information$/, function () {
    //this needs to implement
});