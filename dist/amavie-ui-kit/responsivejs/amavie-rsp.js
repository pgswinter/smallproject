(function($){

	$(window).on('resize load',function(){

		
		var widt = $(window).width()

		if(widt > 0){

			if(widt <= 1024){

				$('.vert-anim').removeClass('navi-move')
				// $('.vert-anim').addClass('vert-move')
				$('.vert-anim').addClass('transition-effect')
				$('.icon-menu > ul').height($(window).height()-$('body > header > .head-wrap').height())
				$('.nav-btn').click(function(e){

					e.preventDefault()

					if($('.vert-anim').hasClass('vert-move')){

						$('.vert-anim').removeClass('vert-move')

					}
					else{
						
						$('.vert-anim').addClass('vert-move')						

					}
					e.stopPropagation()

				})

				$('.filter').prependTo('')

			}
			if(widt <= 768){
				

			}
			if(widt <= 736){

				$('.vert-menu > ul').height($(window).height()-$('body > header').height())

			}

		} 
		if(widt > 1024){

			$('.amar-nav').itemnav()

		}

	})

})(jQuery)