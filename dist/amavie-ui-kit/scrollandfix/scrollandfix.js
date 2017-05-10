(function($){

	$.fn.scrollandfix = function(){

		var me = $(this)
		$(window).on('scroll',function(){

			var pageTop = $(window).scrollTop()
			var pageBot = pageTop + $(window).height()
			console.log(pageTop)
			var elementTop = me.offset().top
			var elementBot = elementTop + me.height()
			console.log(elementTop)
			if(pageBot >= elementTop){

				$('.scroll-fixed').css({'display':'block'})

			}
			else{

				$('.scroll-fixed').css({'display':'none'})				

			}

		})

	}	

})(jQuery)