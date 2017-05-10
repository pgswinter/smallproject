(function($){

	'use strict'

	$.fn.selectBoxMenu2 = function(){

		$(this).each(function(){

			$(this).find(' > li > .square-btn input[type=checkbox]').on('click',function(){

				if($(this).parent().hasClass('checked2')){

					if($(this).parent().siblings('.sub-checkbox').find('.square-btn').hasClass('checked2')){

						$(this).parent().removeClass('checked2')	
						$(this).parent().siblings('.sub-checkbox').find('.square-btn').removeClass('checked2')

					}
					else{

						$(this).parent().removeClass('checked2')	
						$(this).parent().siblings('.sub-checkbox').find('.square-btn').removeClass('checked2')

					}

				}
				else{

					$(this).parent().addClass('checked2')	
					$(this).parent().siblings('.sub-checkbox').find('.square-btn').addClass('checked2')

				}

			})
		})

		$(this).each(function(){

			$(this).find(' > li > .sub-checkbox .square-btn input[type=checkbox]').on('click',function(){

				if($(this).parent().hasClass('checked2')){

					$(this).parent().removeClass('checked2')
					$(this).parent().parent().siblings('.square-btn').removeClass('checked2')

				}
				else{

					$(this).parent().addClass('checked2')	

				}
				
			})

		})

	}


})(jQuery)