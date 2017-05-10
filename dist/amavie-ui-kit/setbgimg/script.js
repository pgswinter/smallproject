(function($){

	$.fn.amc_get_img = function(){

		var me = $(this)
		var applyLoadIMG = function(){

			me.find('.block-text').each(function(i){

				var my_img = $(this).find('img')
				var url_my_img = my_img.attr('src')
				$(this).find('.bg-img').css({"background-image": "url("+url_my_img+"",
				"background-size":"center center",
				"background-repeat":"no-repeat",
				"background-position":"center center"})

			})

		}
		var init = function(){
			applyLoadIMG()
		}
		init()
	}

	$.fn.amc_get_img_fixed = function(){

		var me = $(this)
		var applyLoadIMG = function(){

			me.find('.block').each(function(i){

				var my_img = $(this).find('img')
				var url_my_img = my_img.attr('src')
				$(this).find('.bg-img').css({"background-image": "url("+url_my_img+"",
				"background-size":"cover",
				"background-repeat":"no-repeat",
				"background-position":"center center",
				"background-attachment":"fixed"
			})

			})

		}
		var init = function(){
			applyLoadIMG()
		}
		init()
	}

})(jQuery)