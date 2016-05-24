import $ from 'jquery';
import Blazy from 'blazy';

export default function(element){

    let bLazy = new Blazy();

    $(element).each(function(){
      const img = $(this).data('src');
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
