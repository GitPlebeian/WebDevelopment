$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

var viewportHeight = $('.parallax-window').outerHeight();
$('.parallax-window').css({ height: viewportHeight });

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
