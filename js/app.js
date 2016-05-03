// var whosTurn = "X";

$(document).ready(function(){
	var whosTurn = "X";

	function startGame () {
		setMessage(whosTurn + " gets to first!");
	}

	function setMessage (msg) {
		$(".message").html(msg);

	}

	$( ".square" ).click(function() {
		$(this).html(whosTurn);
		changeTurn();
		setMessage(whosTurn + " gets to go now...");
		whoWon();
		console.log(whosTurn);
	});

	function changeTurn() {
		if (whosTurn === "X") {
			whosTurn = "O";
		} else {
			whosTurn = "X";
		}
	}

 	function whoWon() {
 		var firstRow = $('.row:first-child .square').text();
 		if (firstRow === "XXX") {
 			setMessage("X won!");
 		} else if (firstRow === "OOO") {
 			setMessage("O WON!");
 		}

 		var lastRow = $('.row:last-child .square').text();
 		if (lastRow === "XXX") {
 			setMessage("X won!");
 		} else if (lastRow === "OOO") {
 			setMessage("O WON!");
 		}

 		var middleRow = $('.row:nth-child(2) .square').text();
 		if (middleRow === "XXX") {
 			setMessage("X won!");
 		} else if (middleRow === "OOO") {
 			setMessage("O WON!");
 		}
 	}	
	startGame();

});



