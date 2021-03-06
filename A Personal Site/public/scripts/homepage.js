window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

var active = true
function navBar(){
  navBarToggle = $('.navBarToggle')
  obj = document.getElementById("navBarLinks")

  $(obj).css('color',"red")
  navBarToggle.toggleClass("active")

  if(active){
    $('.navBar').toggleClass('active')
    active = !active
  } else {
    setTimeout(function() {
      $('.navBar').toggleClass('active')
    }, 150)
    active = !active
  }

  if(obj.style.maxHeight){
    obj.style.maxHeight = null
  } else {
    obj.style.maxHeight = obj.scrollHeight + 'px'
  }
}

if(sessionStorage.getItem('firstTime') == null){
  setTimeout(function() {
    $('.introMain').addClass('animate')
  },350)

  setTimeout(function() {
    $('.introP').addClass('animate')
  },650)
  setTimeout(function() {
    $('.navBar').css('opacity','1')
  },750)
} else {
  $('.introMain').css({'transition' : '0','opacity' : '1','top':'0'})
  $('.introP').css({'transition' : '0','opacity' : '1','left':'0'})
  $('.navBar').css({'transition' : '0','opacity' : '1'})
}
$(window).scroll(function() {
  var navBar = $('.navBar')
  if($(window).scrollTop() > 72){
    navBar.addClass('scrolled')
  } else {
    navBar.removeClass('scrolled')
  }

  if($(window).scrollTop() > 10){
    $('.intro').css('height', '400px')
  }
})

sessionStorage.setItem('firstTime', false)


function accordianToggle(thing) {
  var changeToDeactive = false;
  things = thing.nextElementSibling
  obj = $(thing.nextElementSibling);
  if($(thing).hasClass('active')){
    changeToDeactive = true
  }
  $('.accordianToggle').removeClass('active')

  if(!changeToDeactive){
    $(thing).toggleClass('active')
  }
  allAcorrdions = $('.accordianContent')
  allAcorrdions.each(function(){
    $(this).css('max-height','0')
  })
  if(changeToDeactive){
    obj.css('max-height','0')
    setTimeout(function(){
      obj.css('border-width','0px')
    },205)
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
