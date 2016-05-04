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
 			$(".row:first-child").addClass('strikeout');
 		} 
 		else if (firstRow === "OOO") {
 			setMessage("O WON!");
 			$(".row:first-child").addClass('strikeout');
 		}

 		var lastRow = $('.row:last-child .square').text();
 		if (lastRow === "XXX") {
 			setMessage("X won!");
 			$('.row:last-child').addClass('strikeout');
 		} else if (lastRow === "OOO") {
 			setMessage("O WON!");
 			$('.row:last-child').addClass('strikeout');
 		}

 		var middleRow = $('.row:nth-child(2) .square').text();
 		if (middleRow === "XXX") {
 			setMessage("X won!");
 			$('.row:nth-child(2)').addClass('strikeout');
 		} else if (middleRow === "OOO") {
 			setMessage("O WON!");
 			$('.row:nth-child(2)').addClass('strikeout');
 		}

 		

 		var middleCol = $('table tr > td:nth-child(2), table tr > th:nth-child(2) .square').text();
 			if (middleCol === "XXX") {
 			setMessage("X won!");
 			console.log('colTest, X win');
 			$('table tr > td:nth-child(2), table tr > th:nth-child(2)').addClass('strikeout1');
 		}
	 	}


	startGame();

});



