// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

$(function(){
	$(window).scroll(function(){
		if (this.scrollY > 80){
			$('.header').addClass('fixed');
		}else{
			$('.header').removeClass('fixed');
		}
	})
});

