$(document).ready(function(){
	
	var computerNumber = Math.floor((Math.random() * 100) + 1);
	
	var clickCount = 5;

	var clickedVal = $('td').on('click', function(event){
		console.log(this.innerText);
		var value = this.innerText;
		
		if(value == computerNumber){
			$(this).css("background-color", "#27ae60");
			alert("Winner");
			location.reload();
		}
		
		if(clickCount == 1){
			alert("Game Over");
			location.reload();
		}

		if((value >= (computerNumber + 6)) || (value <= (computerNumber - 6))){
			$(this).css("background-color", "#2980b9");
			clickCount -= 1;
			$('.num_remaining').html(clickCount);
		} else if((value <= (computerNumber + 6)) || (value >= (computerNumber - 6))){
			$(this).css("background-color", "#c0392b");
			clickCount -= 1;
			$('.num_remaining').html(clickCount);
		}

	});

});


