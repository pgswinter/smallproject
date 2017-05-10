(function($){

	$.fn.detectScroll = function(){

		var me = $(this)
		var pageTop = $(window).scrollTop();
		var pageBottom = pageTop + $(window).height();
		var elementTop = me.offset().top - 600;
		var elementBottom = elementTop + me.height();

		if((pageTop >= elementTop) && (pageTop <= elementBottom)){

			return true

		}
		else{

		 	return false

		}

	}
	$('.amc_scrolling_dot .dot-form article p').hide()
	$('.amc_scrolling_dot .dot-form').each(function(){
		var me = $(this)
		me.find('img').click(function(){
			$(this).siblings('p').slideToggle()
		})
	})
	var lastScrollTop = 0
	$(window).on('scroll load',function(){
		var currentScrollTop = $(this).scrollTop()
		$('.amc_scrolling_dot .dot-form').each(function(){

			var itemNumber = $(this).find('.dot-line').find('.dot')

			// itemNumber.each(function(){
			// 	if($(this).detectScroll() == true){

			// 		if(currentScrollTop > lastScrollTop){
			// 			$(this).addClass('blind_dot1')
			// 		}
			// 		else{
			// 			$(this).removeClass('blind_dot1')
			// 		}
			// 	}

			// })

			if($(this).detectScroll() == true){

				if(currentScrollTop > lastScrollTop){
					itemNumber.addClass('blind_dot1')
				}
				else{
					itemNumber.removeClass('blind_dot1')
				}
			}


		})
		lastScrollTop = currentScrollTop
	})

})(jQuery)