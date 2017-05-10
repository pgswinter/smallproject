(function($){

	$.fn.fix3col = function(){

		var me = $(this)

		var numberArticle = ($('figure',me).length)
		if(numberArticle < 3){

			me.removeClass('set-columns')
			me.addClass('set-float-columns')

		}	
		else{

			me.removeClass('set-float')
			me.addClass('set-float-columns')

		}
				
	}

})(jQuery)