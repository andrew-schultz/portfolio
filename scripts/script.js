$(document).ready(function(){

	$('.workBubble').hover(function(){
		$(this).children().fadeIn(250).stop;
	}, function(){
		$('.secret').fadeOut(250);
	});

	$('.aboutImg2').hover(function(){
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

	$('.workBubble').hover(function(){
		$('this:nth-child(0)').hide(),
		$('this:nth-child(1)').show();
	}, function(){
		$('this:nth-child(1)').hide(),	
		$('this:nth-child(0)').show();
	});


		// $(window).on('scroll', function(){
		// 	if($(window).scrollTop() > 600){
		// 		$('.imgL').animate({
		// 			left: '80.1%',
		// 		});
		// 		$('.imgR').animate({
		// 			left: '145.1%',
		// 		});
		// 		// $('.imgR').css({
		// 		// 	'margin': '0 auto',
		// 		// });
		// 	};
		// });

});