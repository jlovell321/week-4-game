
var result;
var lost;
var add;


result = Math.floor(Math.random() * 20) + 101;

 //console.log(result);

$("#result").html('Result: ' + result);
//4 crystals
for(var i = 0; i <4; i++) {
	// Each crystal needs to have a random number between 1 - 12
	var randomNumber = Math.floor(Math.random() * 12);
	//console.log(randomNumber);

	var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal',
			"data-random": randomNumber
		});

	$(".crystals").append(crystal);
}


$(".crystal").on('click', function (){

	console.log($(this));
});
// The total number needs to randomly generate a number between 19-120. 
// A new number regenerates every single time for each crystal whe the game restarts
// Clicking on singular crystal adds to your points. 
// If the numbers add up to the total score then the player wins.
// If they go over the total score the player loses.
// Score tracker. 


