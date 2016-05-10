// var whosTurn = "X";

$(document).ready(function(){
	var whosTurn = "X";
	var gameOver = false;

	function startGame () {
		setMessage(whosTurn + " gets to go first!");
	}

	function setMessage (msg) {
		$(".message").html(msg);

	}



	function changeTurn() {
		if (whosTurn === "X") {
			whosTurn = "O";
		} else {
			whosTurn = "X";
		}
	}

	function setWinner(lineValues, lineSelector, classes) {
		var winner = lineValues[0];
		setMessage(winner + " won!");
		gameOver = true;
		$(lineSelector).addClass(classes);
	}

	$( ".square" ).click(function() {
		if ($(this).html() === "" && !gameOver) {
			$(this).html(whosTurn);
			changeTurn();
			setMessage(whosTurn + " gets to go now...");
			whoWon();

		} 
	});



	function whoWon() {

		// for (var i =1; i <= 3; i++) {
		// 	var selector = '.row:nth-child( '+ i +'') .square')
		// 	var values = $(selector).text();
		// if (values === 'XXX' || values === "OOO") {
		// 	setWinner( values, selector, 'strikeout');
		// 	}

		// }

		var firstRow = $('.row:first-child .square').text();
		if (firstRow === "XXX" || firstRow === 'OOO') {
			setWinner(firstRow, ".row:first-child", 'strikeout');
		
		}
		else if (firstRow === "OOO") {
			setMessage("O WON!");
			$(".row:first-child").addClass('strikeout');
			gameOver = true;
		}

		var middleRow = $('.row:nth-child(2) .square').text();
		if (middleRow === "XXX") {
			setMessage("X won!");
			$('.row:nth-child(2)').addClass('strikeout');
			gameOver = true;
		} else if (middleRow === "OOO") {
			setMessage("O WON!");
			$('.row:nth-child(2)').addClass('strikeout');
			gameOver = true;
		}

		var lastRow = $('.row:last-child .square').text();
		if (lastRow === "XXX") {
			setMessage("X won!");
			$('.row:last-child').addClass('strikeout');
			gameOver = true;
		} else if (lastRow === "OOO") {
			setMessage("O WON!");
			$('.row:last-child').addClass('strikeout');
			gameOver = true;
		}


		var firstCol = $('td:nth-child(1)').text();
		if (firstCol === "XXX") {
			setMessage("X won!");
			$('td:nth-child(1)').addClass('strikeout1');
			gameOver = true;
		} else if (firstCol ==="OOO") {
			setMessage("O WON!!!");
			$('td:nth-child(1)').addClass('strikeout1');
			gameOver = true;
		}

		var middleCol = $('td:nth-child(2)').text();
		if (middleCol === "XXX") {
			setMessage("X won!");
			$('td:nth-child(2)').addClass('strikeout1');
			gameOver = true;
		} else if (middleCol === "OOO") {
			setMessage("O WON!");
			$('td:nth-child(2)').addClass('strikeout1');
			gameOver = true;
		}

		var lastCol = $('td:nth-child(3)').text();
		if (lastCol === "XXX") {
			setMessage("X won!");
			$('td:nth-child(3)').addClass('strikeout1');
			gameOver = true;
		} else if (lastCol === "OOO") {
			setMessage("O WON!");
			$('td:nth-child(3)').addClass('strikeout1');
			gameOver = true;
		}

		var diagonal1 = $('.diag1').text();
		if (diagonal1 === "XXX") {
			setMessage("X won!");
			$('.diag1').addClass('diag1Strikeout');
			gameOver = true;
		} else if (diagonal1 === "OOO") {
			setMessage("O WON!");
			$('.diag1').addClass('diag1Strikeout');
			gameOver = true;

		}

		var diagonal2 = $('.diag2').text();
		if (diagonal2 === "XXX") {
			setMessage("X won!");
			$('.diag2').addClass('diag2Strikeout');
			gameOver = true;
		} else if (diagonal2 === "OOO") {
			setMessage("O WON!");
			$('.diag2').addClass('diag2Strikeout');
			gameOver = true;
		}

	}

	$('.button' ).click(function() {	
		setMessage();
		startGame();
		$( ".square" ).removeClass( "strikeout1 diag1Strikeout diag2Strikeout" );
		$(".row").removeClass("strikeout");
		$( ".square" ).empty();
	});



	startGame();

});



