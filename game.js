$(document).ready(function() {
    buttons = ["box1", "box2", "box3", "box4"];

    var counter = 0;
	var wins = 0;
	var losses = 0;
	
	$('#win').text(wins);
	$('#loss').text(losses);
	
	crystal();
	game();
	function crystal () {
		var numbers = []
			while(numbers.length < 4){
			  var randomNumber = Math.floor(Math.random()*15)
              var found = false;
              
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomNumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomNumber;
			}
				
		for (i = 0; i < numbers.length; i++) {
			var crystals = $('<img>');
			crystals.attr('data-num', numbers[i]);
			crystals.attr('src', buttons[i]);
			crystals.addClass('boxes')
			$('#buttons').append(crystals);
		}
	}

	function game() {

		counter = 0;
		$('#score').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min)+1);
			}

		var guess = randomIntFromInterval(19,120);

		$('.value').text(guess);


		$('.image').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#score').text(counter);

		    if (counter === guess){
              alert('Winner')
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#buttons').empty();
		      crystal();
		      game();
       
		    } else if ( counter > guess){
		        alert('Try again')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#buttons').empty();
		        crystal();
		        game();
		    }
		});
	}

});
