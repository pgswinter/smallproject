(function($){

	// String.prototype.capitalizeFirstLetter = function() {
	//     return this.charAt(0).toUpperCase() + this.slice(1);
	// }
	$.fn.firstLetter = function (){

		var a = $(this).text()

		var b = a.charAt(0).toUpperCase()
		var c = a.slice(1)

		$('.zero').after("<div class='one'>"+b+"</div>")
		$('.zero').after("<div class='two'>"+c+"</div>")
		$('.zero').empty()
		$('.one').appendTo('.zero').css({'font-size':'60pt'})
		$('.two').appendTo('.zero')
		$(this).find('div').css({'display':'inline-block'})

	}

})(jQuery)

	

