$(document).ready(function(){

	$('.fa-bars').on('click', function(){
		if($('#menu').hasClass('open')){
			$('#menu').removeClass('open');
			$('#menu').animate({
				top: '-100px',
			});
		} else {
			$('#menu').addClass('open');
			$('#menu').animate({
				top: '25px',
			});
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