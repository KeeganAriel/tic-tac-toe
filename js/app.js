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
		// check for the rows
		for (var i = 1; i <= 3; i++) {
			var selector = '.row:nth-child('+ i +') .square';
			var values = $(selector).text();
			if (values === 'XXX' || values === 'OOO') {
				setWinner( values, selector, 'strikeout');
			}
		}

		// check the coloums
		for (var i = 1; i <= 3; i++) {
			var selector = '.square:nth-child(' + i +')';
			var values = $(selector).text();
			if (values === 'XXX' || values === 'OOO') {
				setWinner(values, selector, 'strikeout1');
			}
		}

		// check diags
		var selector = '.diag1';
		var values = $(selector).text();
		if (values === 'XXX' || values === 'OOO') {
			setWinner(values, selector, 'diag1Strikeout');
		}

		var selector = '.diag2';
		var values = $(selector).text();
		if (values === 'XXX' || values === 'OOO') {
			setWinner(values, selector, 'diag2Strikeout');
		}

	}

	$('.button' ).click(function() {	
		setMessage();
		startGame();
		$( ".square" ).removeClass( "strikeout1 diag1Strikeout diag2Strikeout" );
		$(".row").removeClass("strikeout");
		$( ".square" ).empty();
		gameOver = false;
	});


	startGame();

});



