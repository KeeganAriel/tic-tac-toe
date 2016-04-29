$(document).ready(function(){
	
	function startGame () {
		var whosTurn = "X";
		setMessage(whosTurn + " gets to start!");
	}

	function setMessage (msg) {
		$(".message").text(msg);
	}


	$( ".square" ).click(function() {
		var whosTurn = "0";
		console.log("you clicked!");
		$(".square").html(whosTurn);

	});


	startGame();

});

	// $( ".square" ).one('click',function(event) {
	// 	var whosTurn = "0";
	// 	console.log("you clicked!");
	// 	$(".square").html(whosTurn);

 //        }
 //    );


