 var game = {
 	wins : 0,
 	losses : 0,
 	crystal_values :[0,0,0,0],
 	score : 0,
 	number : 0,

 	add_to_wins : function(){
 		this.wins+= 1 ;
 		$("#wins").text(this.wins);
 	},

 	add_to_losses : function() {
 		this.losses+= 1;
 		$("#losses").text(this.losses);
 	},

 	reset : function(){
 		this.score= 0;
 		this.number = number_generator();
 		this.update_crystal_values();

 		//This loop updates the attribute data-crystalvalue of each image  
 		for (var i=0; i<4; i++){
					
			crystal_image[i].attr("data-crystalvalue", game.crystal_values[i]);
			
		}
 		$("#number_to_guess").text(this.number);
 		$("#new_score").text(this.score);
 	},

 	update_crystal_values: function(){
 		for (i=0; i<this.crystal_values.length; i++){
 			this.crystal_values[i] = diamond_generator();
 		}
 	},

 	update_score : function(a){
 		this.score += a;
 		$("#new_score").text(this.score);
 	}  
   };
// Pick an integer between 19 and 120 
 number_generator = function(){
 	return (Math.floor(Math.random()*102) + 19);
 }


 // Pick an integer between 1 and 12
 diamond_generator = function(){
 	return (Math.floor(Math.random()*12) + 1);
 }

var crystal_image = [];
for (var i=1; i<5; i++){
	crystal_image[i-1] = $("<img>");
	crystal_image[i-1].addClass("image");
	// we add src attribute along witn the location of each image
	crystal_image[i-1].attr("src","assets/images/diamond_" + i + ".jpg");
	crystal_image[i-1].attr("data-crystalvalue", game.crystal_values[i-1]);
	$("#images").append(crystal_image[i-1]);
}

// Let the game begin
game.reset();
$("#wins").text(game.wins);
$("#losses").text(game.losses);

$(".image").on("click",function(){
	var value = ($(this).attr("data-crystalvalue"));
	game.update_score(parseInt(value));

	if(game.score === game.number){
		alert("You Won This Game!!");
		game.add_to_wins();
		game.reset();

	}
	else if (game.score > game.number){
		alert("Sorry, you lost this Game...");
		game.add_to_losses();
		game.reset();
	}
	else{
		//Do nothing...
		
	}
	//for (var i=0; i<game.crystal_values.length; i++){
	//	console.log(game.crystal_values[i]);
	//}
});
