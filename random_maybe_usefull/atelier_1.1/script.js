function check_username_password(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username=="a" && password=="111")
		return true;
	return false;
}

function login(){
	if( check_username_password())
		return true;
	else{
		alert("The username or the password is incorrect!\nTry again.");
		return false;
	}
}

function logout(){
	window.location.replace("Login.html");
}

function result(){
	var sum = 0;
	var i;
	for(i=1;i<6;i++){
		sum += parseFloat(document.getElementById( "mark" + i ).value);
	}
	return ( sum / 5 );
}
	
function get_result(){
	var view = "<h1>Your result is : " + result() + " / 20</h1>"
	document.getElementById("loginbox").innerHTML = view;
	document.getElementById("loginbox").style.height = "100px";
	document.getElementById("loginbox").style.margin = "50px 0px";
}