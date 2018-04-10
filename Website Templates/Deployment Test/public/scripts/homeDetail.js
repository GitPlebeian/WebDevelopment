function navBar(){
  navBarToggle = $('.navBarToggle')
  obj = document.getElementById("navBarLinks")

  $(obj).css('color',"red")
  navBarToggle.toggleClass("active")
  if(obj.style.maxHeight){
    obj.style.maxHeight = null
  } else {
    obj.style.maxHeight = obj.scrollHeight + 'px'
  }
}


function accordianToggle(thing) {
  things = thing.nextElementSibling
  obj = $(thing.nextElementSibling);
  $('.accordianToggle').removeClass('active')
  $(thing).toggleClass('active')
  allAcorrdions = $('.accordianContent')
  allAcorrdions.each(function(){
    $(this).css('max-height','0')
  })
  if($(thing).hasClass('active')){
    obj.css('max-height','0')
    setTimeout(function(){
      obj.css('border-width','0px')
    },205)
    console.log('meme');
  } else {
    obj.css('border-width','1px')
    things.style.maxHeight = things.scrollHeight + 'px'
  }
}

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
