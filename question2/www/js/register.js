$(function() {

	$("#btnLogin").click(function(){
		location.href="login.html"
	});

	$("#frmRegister").submit(function(e){
		e.preventDefault();
		e.stopPropagation();
		var email = $("#inputEmail").val();
		var pass1 = $("#inputPassword").val();
		var pass2 = $("#inputPassword2").val();
		if (pass1 === pass2){
			var datalist = "inputEmail="+email+"&inputPassword="+pass1;
			$.ajax({
				type:"post",
				url:"http://localhost:8080/mokda/Register",
				data: datalist,
				cache: false,
				success: function(mydata){
					var myData = JSON.parse(mydata);
					if(myData.status === 1){
						alert("user already register");
					}
					else{
						alert("User Succesfully Register");
						location.href="login.html";
					}

				},
				Error:function(){
					console.log("ajax error!");
					alert("Please contect admin!");
				}

			});
		}else{
			alert("Password does not match!");
		}
	});
})