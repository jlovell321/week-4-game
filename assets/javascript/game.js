
var random_number;
var lost = 0;
var win = 0;
var previous =0;
// getting the crystals

var resetAndStart = function() {
	//resets the crystals to empty
	$(".crystals").empty();

	var images = [
				'assets/images/jewel4.jpg',
				'assets/images/jewel3.jpg',
				'assets/images/jewel2.jpg',
				'assets/images/jewel1.jpg'];
	// The total number needs to randomly generate a number between 19-120.
	random_number = Math.floor(Math.random() * 20) + 101;
// A new number regenerates every single time for each crystal whe the game restarts
	$("#result").html('Result: ' + random_number);

	for(var i = 0; i < 4; i++) {

			var random = Math.floor(Math.random() * 11) + 1;

			var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + (images[i]) + "')",
				"background-size":"cover"
			});
			//crystal.html(random);

		$(".crystals").append(crystal);
	}

	$("#previous").html("Total Score: " + previous);
}

resetAndStart();

// Clicking on singular crystal adds to your points.
$(document).on('click', ".crystal", function () {

		var num = parseInt($(this).attr('data-random'));

		previous += num;

		$("#previous").html("Total Score: " + previous);

		console.log(previous);
// If the numbers add up to the total score then the player wins if not they lose.
		if(previous > random_number) {

			lost--;

			$("#lost").html("Losses: " + lost);

			previous = 0;

			resetAndStart();
		}

		else if (previous === random_number) {

			win++;

			$("#win").html("Wins: " + win);

			previous = 0;

			resetAndStart();
		}
});





