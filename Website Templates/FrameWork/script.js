function navBar(navBar) {
    var x = document.getElementById("navBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
    console.log("dfadsf");
    navBar.classList.toggle("navIconBarActive");
}
function focusContent() {
  var x = document.getElementById("navBar");
  if (x.className === "navBar") {

  } else {
      x.className = "navBar";
  }
}
