(function($){

  // var divs = $('.amc-parallax > div')
  // for(var i= 0; i <divs.length; i +=2){
  //   divs.slice(i, i+2).wrapAll("<div class='block'></div>")
  // }
  $('.amc-parallax .block').each(function(i){
    var my_img = $(this).find('img')
    var url_my_img = my_img.attr('src')
    $(this).find('.left').css({"background-image": "url("+url_my_img+"",
    "background-size":"cover",
    "background-repeat":"no-repeat",
    "background-position":"center center",
    "background-attachment":"fixed"
    })
  })
  // $('.amc-parallax .block').each(function(i){
  //   if(i === 0){
  //     $(this).find('.left').css({'top':'0vh'})
  //     $(this).find('.right').css({'top':'100vh'})
  //   }
  //   else{
  //     var myIndexLeft = i+1
  //     var myPositionLeft = 100 * myIndexLeft
  //     var myIndexRight = i+2
  //     var myPositionRight = 100 * myIndexRight
  //     $(this).find('.left').css({'top':''+myPositionLeft+'vh'})
  //     $(this).find('.right').css({'top':''+myPositionRight+'vh'})
  //   }
  // })

})(jQuery)