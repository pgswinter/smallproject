(function($){

	$.fn.expaVert = function(){

		var me = $(this)
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function(){

				me.slideToggle()
				$(this).toggleClass('active')
		})

	}
	$.fn.expaVertSumm = function(){

		var me = $(this)
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function(){

				me.find('p').slideToggle()
				$(this).toggleClass('active')
		})

	}

	$.fn.expaArti = function(e){

		var me = $(this)

		$('> figure', me).each(function(){

			var meFigu = $(this)

			$('.expa-fram-btn',meFigu).click(function(e){

				$('.expa-fram p',meFigu).slideToggle()
				$(this).toggleClass('active')

			})

			$('.titl1',meFigu).click(function(e){

				e.preventDefault()	
				$('.expa-fram p',meFigu).slideToggle()
				$(this).toggleClass('active')

			})

		})
		

	}

})(jQuery)