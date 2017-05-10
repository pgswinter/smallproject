(function($){

	'use strict'

	$.fn.selectBoxMenu = function(){

		$(this).each(function(){
			$(this).find('.chck-lbl').on('click',function(){
				if($(this,'.node').hasClass('active')){

					$(this,'.node').removeClass('active')

				}
				else{

					$(this,'.node').addClass('active')	

				}
				
			})

		})

	}


})(jQuery)