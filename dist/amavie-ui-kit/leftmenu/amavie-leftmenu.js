(function($){

	'use strict'

	$('.for-mobi.main-btn').click(function(){

		if($('.left-menu.menu-01').hasClass('move-ltr')){

			$('.left-menu.menu-01').removeClass('move-ltr')

		}

		$('.left-menu.menu-02').toggleClass('move-ltr').addClass('transition-effect')

	})
	$('.for-mobi.sear-btn').click(function(){

		if($('.left-menu.menu-02').hasClass('move-ltr')){

			$('.left-menu.menu-02').removeClass('move-ltr')

		}

		$('.left-menu.menu-01').toggleClass('move-ltr').addClass('transition-effect')

	})

})(jQuery)