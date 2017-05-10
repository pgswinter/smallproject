(function($){
	
	$.fn.setHeight = function(){

		var me = $(this)
		
		$(window).on('resize load',function(){

			var widt = $(window).width()
			if(widt > 0){
				if(widt <= 360){

					me.height($(window).height()*1.3/5)

				}
				else if(widt <= 414){

					me.height($(window).height()*0.8/3)

				}
				else if(widt <= 425){

					me.height($(window).height()*1.08/3)

				}
				else if(widt <= 736){

					me.height($(window).height()*1.6/3)

				}

				else if(widt <= 755){

					me.setHeightOneThird()

				}

				else if(widt <= 768){

					me.setHeightAHalf()

				}

				else if(widt <= 1045){

					me.height($(window).height()*2/3)

				}

				else if(widt > 1024){

					me.height($(window).height())	

				}
			}


		})
		

	}

	$.fn.setHeightAHalf = function(){

		var me = $(this)
		
		me.height($(window).height()/2)

	}

	$.fn.setHeightThreeQuater = function(){

		var me = $(this)
		$(window).on('resize load',function(){

			var widt = $(window).width()
			if(widt <= 768){

				me.height('auto')

			}
			else{

				me.height($(window).height()*3/4)

			}

		})
		

	}

	$.fn.setHeightTwoThird = function(){

		var me = $(this)
		$(window).on('resize load',function(){

			var widt = $(window).width()
			if(widt <= 768){

				me.setHeightAHalf

			}
			else{

				me.height($(window).height()*2/3)		

			}

		})
		

	}

	$.fn.setHeightOneThird = function(){

		var me = $(this)

		me.height($(window).height()*1/3)

	}

	$.fn.setHeightFiveSixth = function(){

		var me = $(this)

		me.height($(window).height()*5/6)

	}

})(jQuery)