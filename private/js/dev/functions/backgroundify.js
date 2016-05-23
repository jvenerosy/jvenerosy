import $ from 'jquery';

export default function(element){

    $(element).each(function(){
      const img = $(this).data('mea');
      const absolute = $(this).data('absolute');

      $(this).css({
        'background-image' : `url(${img})`
      })

      if(absolute == false){
        $(this).addClass('backgroundify--solid');
      } else {
        $(this).parent().css('position', 'relative');
        $(this).addClass('backgroundify');
      }
    })
}
