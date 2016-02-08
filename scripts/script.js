$(document).ready(function(){

	$('.aboutImg').hover(function(){
		$(this).children().fadeIn(250).stop;
	}, function(){
		$('.secret').fadeOut(250);
	});

	$('#drop').hover(function(){
		$('#dm').slideDown(300).stop;
		}, function(){
			$('#dm').slideUp(300).stop;
	});

	var firstanimation = function(){
		$('.aboutImg').animate({
			left: '300px',
		});
	};


		$(window).on('scroll', function(){
			if($(window).scrollTop() > 600){
				$('.imgL').animate({
					left: '1250px',
				});
				// $('.imgR').animate({
				// 	left: '300px',
				// });
			};
		});

	
	$('#newInputForm').on('submit', function(e){
	//when the submit button on the form is clicked, do this
		e.preventDefault();
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		var timestamp = month + "/" + day + "/" + year
		//prevents the default function of the submit button from firing
		//doesn't send the input away
		if ($('#newInput').val().length >= 1){
				$('#tdul').append('<li class="li"><i class="fa fa-times-circle"></i><p>' + $("#newInput").val() + ' <span>' + timestamp + '</span></p></li>');
			//this adds an item to the list with the same formatting as the ones that are already there
			};
		$('#newInput').val("");
		//this just clears the previous input from the text box

		$('.fa').on('click', function(){
		//selects the class .fa on click, runs a function
			$(this).parent().fadeOut(200 ,function(){
			//fades out the element with the .fa class
				$(this).remove();
				//removes the element completely from the html
			});
		});	
	});
	$('#tdul').on('click', '.li', function(){
	//selects the ul element on click, runs a function
		$(this).toggleClass('complete');
	}); //toggles the class complete

	$('.fa').on('click', function(){
	//selects the class .fa on click, runs a function
		$(this).parent().fadeOut(200 ,function(){
		//fades out the element with the .fa class
			$(this).remove();
			//removes the element completely from the html
		});
	});

});