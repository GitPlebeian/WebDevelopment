function navBar(navBar) {
    var x = document.getElementById("navBar");
    var y = document.getElementById("navBarSlideInid");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
    navBar.classList.toggle("navIconBarActive");
    y.classList.toggle("navBarSlideInActive");
}
function focusContent() {
  var x = document.getElementById("navBar");
  if (x.className === "navBar") {

  } else {
      x.className = "navBar";
  }
}
console.log("asdfasdfasdf");
$.ajax({
  url: "/userInfo",
  type: "GET",
  success: function(data){
    if (data.loginState){
      $("#usernameDisplay").append("Hi, " + data.username);
      $("#loginLink").css("display","none");
      $("#loginLink2").css("display","none");
    } else{
      $("#usernameDisplay").css("display","none")
      $("#logout").css("display","none")
      $("#logout2").css("display","none")
      $(".cart").css("display","none");
    }
  },
  dataType: "json"
});
