


 		console.log("Seession . js is working")
function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;             
}


$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username)
			$("#session").html("Session " + data.username);
	});

	$("#logout").click(logoutClicked);

});  

$("#createButton").click(function(){
	console.log("Create clicked front end")
          if ($("#ident").val() == "") {
            alert("ERROR");
            return false;
          }

          $.ajax({
            url: "/session",
            type: "POST",
            data: {ident:Number($("#ident").val()), name:$("#name").val()},
            success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("CREATE VALID");
            } ,     
            dataType: "json"
          }); 
    		  return false;
})
// function createClicked(){
// 	console.log(";aslkdjr;lkj;rlkj")
//           if ($("#ident").val() == "") {
//             alert("ERROR");
//             return false;
//           }

//           $.ajax({
//             url: "/session",
//             type: "POST",
//             data: {ident:Number($("#ident").val()), name:$("#name").val()},
//             success: function(data){
//               if (!data)
//                 alert("ERROR");
//               else
//                 alert("CREATE VALID");
//             } ,     
//             dataType: "json"
//           }); 
//     		  return false;
//     	}		
    


