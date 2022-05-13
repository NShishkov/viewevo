// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

$(function(){
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

	$('.footer__title').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
	});

});

