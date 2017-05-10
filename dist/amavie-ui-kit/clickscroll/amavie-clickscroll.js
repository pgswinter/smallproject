(function($){

	var defaults = {

		dest: null

	}

	$.fn.clickScroll = function(options){

		var me = $(this)
		var settings = $.extend({},defaults,options)

		me.click(function(e){

			e.preventDefault()
			console.log('xxx')
			console.log(settings.dest)
			if(settings.dest == null){

				alert('Please set the destinate for your scrolling!')

			}
			else{

				$('body,html').animate({

					scrollTop: settings.dest.offset().top

				},500)

			}

		})


	}
	

})(jQuery)