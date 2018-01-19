var selectedElement = null;
$(document).ready(function() {
  $("a.underlineLink").mouseover(function() {
    selectedElement = this;
    $(selectedElement).animate({
      'borderBottomWidth': '2px',
      'borderBottomColor': '#123456',
      top: '2px'
    }, 60);
    console.log(selectedElement);
  });
});

$(document).ready(function() {
  $("a.underlineLink").mouseout(function() {
    $(selectedElement).animate({
      // border-bottom: '3px solid black',
      'borderBottomWidth': '0px',
      'borderBottomColor': '#f37736',
      top: '0px'
    }, 60);
    selectedElement = null;
    console.log("worked");
  });
});