browser.elements('css selector', 'img', function(result) {
    for (var element in result.value) {
      this.elementIdAttribute(result.value[element].ELEMENT,'src',function(result) {
        console.log(result.value);
        var imgwidth = browser.execute(function(result) {
          var img = new Image();

          img.onload = function() {

            console.log('loaded...');

            var width = img.naturalWidth,
                height = img.naturalHeight;

            console.log(width);
            console.log(height);

          };
          img.src = result.value;

          console.log('!!!!!');

        });

      console.log('done');


      });
    }
  });