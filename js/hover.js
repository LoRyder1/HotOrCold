$(document).ready(function() {

	$("#numberChart td").hover(function(){
		$(this).addClass("purple");
	}, function(){
		$(this).removeClass("purple");
	});

	$('td').on('click', function(event){
		var value = this.innerText;
		console.log(value);
	});
    
});