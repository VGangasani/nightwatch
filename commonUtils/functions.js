const reusableCommands = {
    click: function(element){
      this.waitForElementVisible(element, 1000)
        .waitForElementVisible(element, 1000)
        .click(elememnt)
        .api.pause(1000)
      return this;
    }
  };


// Executing a function in the application context.
//https://stackoverflow.com/questions/27431450/iterating-elements-using-nightwatchjs
client.execute(function () {

  // Get elements by CSS selector.
  var elements = document.querySelectorAll('.elements');

  // Iterate over them.
  [].forEach.call(elements, function (element) {

    // Manipulate each element.
    element.click();
  });
});

//   browser.elements('css selector', '#my-list tr', function (result) { //loop through rows
//     var targetId=0;
//    console.log(result);
//     for(result:name){



//     }
//        console.log(name);
//      if(name =='two')targetId = index;  //find target index
//      }
//     browser.click('#my-list tr:nth-child('+targetId+') .btn-edit');  //click
// });


/** finding all the links on page */
browser.elements("css selector", "specific element", function(link_array) {
  for (var x = 0; x < link_array.value.length; x++){
    //Fetch the url from each 'a' tag in the content
    browser.elementIdAttribute(link_array.value[x].ELEMENT, "href", function(links) {
      console.log(links.value);
    });
  }
})

/**
 * ScrollToView and click
 */

module.exports.command = function (selector) {
  this
      .execute(function (selector) {
          document.querySelector(selector).scrollIntoView();
      }, [selector])
      .pause(200)
      .click(selector);
};