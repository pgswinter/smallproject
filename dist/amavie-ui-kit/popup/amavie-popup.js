(function($){

	'use strict'

	$('.apply-job').click(function(){

		$('.set-bg,.apply-form').removeClass('hide-element')

	})

	$('.apply-form').find('.close').click(function(){

		$('.set-bg,.apply-form').addClass('hide-element')			

	})

})(jQuery)