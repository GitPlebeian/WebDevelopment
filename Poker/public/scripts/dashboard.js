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