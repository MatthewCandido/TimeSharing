$("#btnSignUp").on("click", function() {
	$("#main-container").load("pages/registration.php");
	window.history.pushState("","Registration","registration");
});

$( document ).ready(function() {
	router();	
});


function router() {	
	if (window.location.href.indexOf("home") != -1) {
		alert("HAAA	")
		$("#main-container").load("pages/home.php");
	}
	else if (window.location.href.indexOf("registration") != -1) {
		$("#main-container").load("pages/registration.php");
	}
}

//$("#main-container").load("pages/home.php");
//window.history.pushState("","Registration","home");    