
var result;
var lost;
var add;
//4 crystals
for(var i = 0; i <4; i++) {
	
	var randomNumber = Math.floor(Math.random() * 12);
	console.log(random);

	var crystal = $("<div>");

		crystal.attr("class", 'crystal');

	$(".crystals").append(crystal);
}

// Each crystal needs to have a random number between 1 - 12


// The total number needs to randomly generate a number between 19-120. 
// A new number regenerates every single time for each crystal whe the game restarts
// Clicking on singular crystal adds to your points. 
// If the numbers add up to the total score then the player wins.
// If they go over the total score the player loses.
// Score tracker. 


