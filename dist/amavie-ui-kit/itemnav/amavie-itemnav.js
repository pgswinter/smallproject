(function($){

	$.fn.itemnav = function(){

		var me = $(this)
		$(window).on('resize load',function(){
			var widt = $(window).width()

			if(widt > 1024){

				var wrapItem = $('ul',me)
				var item = $('ul li',me)
				var numbItem = item.length

				item.width(wrapItem.width()/numbItem)
				wrapItem.height('auto')

				var wrapItemDiv = $('.devideMe',me)
				var itemDiv = $('.devideMe .item',me)
				var numbItemDiv = itemDiv.length

				itemDiv.width(parseFloat(wrapItemDiv.width()/numbItemDiv).toFixed())
				wrapItemDiv.height('auto')

				console.log()
			}

		})
	}

})(jQuery)