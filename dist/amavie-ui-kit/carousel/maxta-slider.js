(function($){
	'use strict'

	var defaults = {

		ctrlItem: true,
		pageItem: true,
		auto: false,
		gallery: false,
		click: true,
		mousewheel: false

	}

	$.fn.maxtaCRS = function(options){
		
		var maxtaCRS = $(this),
			maxtaCRSWrap = maxtaCRS.find('ul'),
			maxtaCRSItem = maxtaCRS.find('ul').find('li'),

			settings = $.extend({},defaults,options) ,

			getWidtElem = $(this).width(),
			getNumbItem = maxtaCRS.find('ul').find('li').length

		var setWidt = function(){
			
			$(window).on('resize load',function(){

				var widtOfCRS = getWidtElem * maxtaCRS.find('ul').find('li').length
				maxtaCRSWrap.width(widtOfCRS)
				maxtaCRSItem.width(maxtaCRS.width())

			})

		}
		// SMOOTH WHEEL ----------------------------------------------------------------------------
		// var wheel = function(event){

		//     var delta = 0;
		//     if (event.wheelDelta) delta = event.wheelDelta / 120;
		//     else if (event.detail) delta = -event.detail / 3;

		//     handle(delta);
		//     if (event.preventDefault) event.preventDefault();
		//     event.returnValue = false;
		
		// }

		// var handle = function(delta){

		// 	var animationInterval = 20; //lower is faster
		//   	var scrollSpeed = 20; //lower is faster

		// 	if (end == null) {
		//   		end = $(window).scrollLeft();
		//   	}
		//   	end -= 200 * delta;
		//   	goUp = delta > 0;

		//   	if (interval == null) {
		//     	interval = setInterval(function () {
		// 	      	var scrollLeft = $(window).scrollLeft();
		// 	      	var step = Math.round((end - scrollLeft) / scrollSpeed);

		// 	      	if (scrollLeft <= 0 || 
		// 	          	scrollLeft >= $(window).prop("scrollWidth") - $(window).width() ||
		// 	          	goUp && step > -1 || 
		// 	          	!goUp && step < 1 ) {
		// 	        		clearInterval(interval);
		// 	        		interval = null;
		// 	        		end = null;
		// 	      		}
		// 	      	$(window).scrollLeft(scrollLeft + step );
		// 	    }, animationInterval);
		//   	}

		// }

		// var goUp = true;
		// var end = null;
		// var interval = null;
		// SMOOTH WHEEL ----------------------------------------------------------------------------

		var moveLeft = function(){

			var finalItem = maxtaCRSWrap.find('li:nth-child('+getNumbItem+')')
			var getIndex = maxtaCRSWrap.find('li.active').index() + 1
			var activeItem = maxtaCRSWrap.find('li.active')

			// Syn with pagination
			var page = maxtaCRS.find('ol')
			var pageItems = page.find('li')
				
			console.log(getIndex)

			if(finalItem.hasClass('active')){

				maxtaCRSWrap.animate({

					'margin-left': 0

				},1000)

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child(1)').addClass('active')

				// Syn with pagination
				pageItems.removeClass('active')
				page.find('li:nth-child(1)').addClass('active')

			}else{

				if(settings.click == true && settings.mousewheel == false)	{

					maxtaCRSWrap.animate({

						'margin-left': '-'+(getWidtElem*getIndex)+'px'

					},1000)

				}
				if(settings.click == false && settings.mousewheel == true)	{

					// $('html,body').animate({

					// 	scrollLeft: getWidtElem*getIndex

					// },1000)

				}
				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child('+(getIndex+1)+')').addClass('active')

				pageItems.removeClass('active')
				page.find('li:nth-child('+(getIndex+1)+')').addClass('active')

			}

		}

		var moveRight = function(){

			var firstItem = maxtaCRSWrap.find('li:nth-child(1)')
			var getIndex = maxtaCRSWrap.find('li.active').index() + 1
			var activeItem = maxtaCRSWrap.find('li.active')

			// Syn with pagination
			var page = maxtaCRS.find('ol')
			var pageItems = page.find('li')

			console.log(getIndex)

			if(firstItem.hasClass('active')){

				maxtaCRSWrap.animate({

					'margin-left': '-'+(getWidtElem*(getNumbItem-1))+'px'

				},1000)

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child('+getNumbItem+')').addClass('active')

				// Syn with pagination
				pageItems.removeClass('active')
				page.find('li:nth-child('+getNumbItem+')').addClass('active')

			}else{

				maxtaCRSWrap.animate({

					'margin-left': '-'+(getWidtElem*(getIndex-2))+'px'

				},1000)

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child('+(getIndex-1)+')').addClass('active')

				// Syn with pagination
				pageItems.removeClass('active')
				page.find('li:nth-child('+(getIndex-1)+')').addClass('active')

			}

		}

		var active = function(){

			if(settings.ctrlItem == true){
				if(settings.click == true && settings.mousewheel == false)	{

					maxtaCRSWrap.find('li:first-child').addClass('active')

					var nextBtn = maxtaCRS.find('.next-ctrl')
					nextBtn.click(function(){

						moveLeft()

					})

					var prevBtn = maxtaCRS.find('.prev-ctrl')
					prevBtn.click(function(){

						moveRight()

					})

				}
				if(settings.mousewheel == true && settings.click == false)	{

					// maxtaCRSWrap.find('li:first-child').addClass('active')

					// $(document).on('mousewheel',function(e){

					// 	if(e.originalEvent.wheelDelta < 0) {

					// 		moveLeft()	

					// 	}

					// })

					// $(document).on('mousewheel',function(e){
						
					// 	if(e.originalEvent.wheelDelta > 0) {

					// 		moveRight()	

					// 	}

					// })

				}

			}else{

				maxtaCRS.find('ctrl-btn').remove()

			}

		}

		var auto = function(){

			if(settings.auto == true){

				setInterval(function(){

					moveLeft()

				},5000)

			}else{

				console.log('autorun was disabled')

			}

		}

		var pageItem = function(){

			if(settings.pageItem == true){

				$('<ol></ol>').appendTo(maxtaCRS)
				for(var i = 0; i < getNumbItem; i++){

					$('<li></li>').appendTo(maxtaCRS.find('ol'))

				}

				var page = maxtaCRS.find('ol')
				var pageItems = page.find('li')
				
				page.find('li:first-child').addClass('active')

				pageItems.click(function(){

					var getPageIndex = $(this).index()
					var firstPageItem = page.find('li:first-child')

					var activeItem = maxtaCRSWrap.find('li.active')
					console.log(getPageIndex)

					maxtaCRSWrap.animate({

						'margin-left': '-'+(getWidtElem*getPageIndex)+'px'

					},1000)

					activeItem.removeClass('active')
					maxtaCRSWrap.find('li:nth-child('+(getPageIndex+1)+')').addClass('active')

					pageItems.removeClass('active')
					maxtaCRS.find('ol').find('li:nth-child('+(getPageIndex+1)+')').addClass('active')

					maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD').find('ul li').removeClass('active')
					maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD').find('ul').find('li:nth-child('+(getPageIndex+1)+')').addClass('active')

				})

			}else{

				console.log('disabled pagination')

			}

		}

		var gallery = function(){

			if(settings.gallery == true){

				var getURL = maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD')
				var pageRelaSLD = getURL.find('ul')
				var itemRelaSLD = getURL.find('li')

				pageRelaSLD.find('li:first-child').addClass('active')

				itemRelaSLD.each(function(){

					$(this).click(function(){

						var activeItemCRS = maxtaCRSWrap.find('li.active')
						var getIndexSelected = $(this).index()

						maxtaCRSWrap.animate({

							'margin-left':'-'+(getWidtElem*getIndexSelected)+'px'

						},500)

						activeItemCRS.removeClass('active')
						maxtaCRSWrap.find('li:nth-child('+(getIndexSelected+1)+')').addClass('active')

						getURL.find('ul li').removeClass('active')
						getURL.find('ul').find('li:nth-child('+(getIndexSelected+1)+')').addClass('active')

						maxtaCRS.find('ol li').removeClass('active')
						maxtaCRS.find('ol').find('li:nth-child('+(getIndexSelected+1)+')').addClass('active')

					})
					

				})

			}else{

				console.log('gallery disabled')

			}

		}
		
		
		var init = function(){

			pageItem()
			active()
			setWidt()
			auto()
			gallery()
			
		}

		init()

	}

})(jQuery)