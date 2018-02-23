
  		function success(data) {
  			alert(data.name);
  		}

      let num = 0
  		function requestClicked(){
  		  $.get("/request", {index:num},success);
  		  return false;
        num++
        if(num > 3){
          num = 0;
        }
  		}
      function changeClicked(){
        console.log("asdf");
        $.post("/change", {index:0,name:"jack"}, success);
        return false;
      }

  		$(document).ready(function(){
  		  $("#requestButton").click(requestClicked);
        $("#changeButton").click(changeClicked)
  		});
