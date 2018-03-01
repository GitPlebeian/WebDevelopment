$(".navBar a").mouseover(function() {
  $(this).animate({
    top: '-4px',
    borderBottomWidth: '4px'
  }, 100);
});

$(".navBar a").mouseout(function() {
  $(this).animate({
    top: '0px',
    borderBottomWidth: '0px'
  }, 100);
});
