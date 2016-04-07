$(document).ready(function(){

	$('.fa-bars').on('click', function(){
		if($('#menu').hasClass('open')){
			$('#menu').removeClass('open');
			$('#menu').slideUp();
		} else {
			$('#menu').addClass('open');
			$('#menu').slideDown();
		};
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