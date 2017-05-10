(function($){

	'use strict'

	$.fn.selectBoxMenu1 = function(){

		$(this).each(function(){

			$(this).find('.circle-btn > label').click(function(){

				$('aside.leve-form ul li .circle-btn > label').removeClass('checked1')
				$(this).addClass('checked1')

			})

		})

	}

})(jQuery)