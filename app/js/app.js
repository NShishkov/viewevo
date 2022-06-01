// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

$(function(){
	
	if ($(window).scrollTop() > 80)
		$('.header').addClass('fixed');

	$(window).scroll(function(){
		if (this.scrollY > 80){
			$('.header').addClass('fixed');
		}else{
			$('.header').removeClass('fixed');
		}
	});

	$('.header-menu__mobile').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('.header-menu__wrapper').toggleClass('open');
	});

	$('.herosect__down').click(function(){
		$('html, body').animate({
			scrollTop: $(".aboutsect").offset().top-$('.header').height()  // класс объекта к которому приезжаем
		}, 400); 
	})

	$('.footer__title').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
	});


});

