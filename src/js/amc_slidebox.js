(function($){

	$('.slidebox .close-btn').click(function(){

		$(this).parent().addClass('hide-element')

    })
    $(window).scroll(function(){

        if($(window).scrollTop() > 0){
            $('.slidebox').fadeIn()
        }

        else{
            $('.slidebox').fadeOut()
        }
    })



})(jQuery)