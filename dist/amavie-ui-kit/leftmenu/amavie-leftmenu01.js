$.fn.menuAMR = function(){

	var widt = $(window).width()
	var me = $(this)

	if($('.menu-btn').hasClass('acti-hove')){

		$('.menu-btn').hover(function(){

			// $(this).css({'background-color':'rgba(69, 69, 71, 0.8)'})
			$(this).find('label,span').addClass('move-ltr transition-effect')


		},function(){

			$(this).css({'background-color': 'transparent'})
			$(this).find('label,span').removeClass('move-ltr')

		})

	}

	$('.menu-btn').on('click',function(e){

		e.preventDefault()

		me.addClass('transition-effect-1').toggleClass('menu-move')

		$(document).one('click',function closeMenu (e){

			if(me.has(e.target).length === 0){
	            me.removeClass('menu-move');
	            $('.sect-amar.abou-us').addClass('transition-effect-1').toggleClass('navi-move')
	        } else {
	            $(document).one('click', closeMenu);
	        }

	        if(!me.hasClass('menu-move')){

				$(this).find('.fa.fa-bars').removeClass('hide-element')	
				$(this).find('.fa.fa-close').addClass('hide-element')
				// $(this).find('label').addClass('hide-element')

			}
			else{

				$(this).find('.fa.fa-bars').addClass('hide-element')	
				$(this).find('.fa.fa-close').removeClass('hide-element')
				// $(this).find('label').removeClass('hide-element')

			}

		})
		
		if(widt > 0){

			if(widt > 1024){

				$('.sect-amar.abou-us').addClass('transition-effect-1').toggleClass('navi-move')	

			}
		}
		

		if(!me.hasClass('menu-move')){

			$(this).find('.fa.fa-bars').removeClass('hide-element')	
			$(this).find('.fa.fa-close').addClass('hide-element')
			// $(this).find('label').addClass('hide-element')

		}
		else{

			$(this).find('.fa.fa-bars').addClass('hide-element')	
			$(this).find('.fa.fa-close').removeClass('hide-element')
			// $(this).find('label').removeClass('hide-element')

		}
		
		e.stopPropagation()

	})

}