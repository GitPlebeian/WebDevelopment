function navIconClick() {
    var x = document.getElementById("navBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
function focusContent() {
    var x = document.getElementById("navBar");
    if (x.className !== "navBar") {
        x.className = "navBar";
    }
}
