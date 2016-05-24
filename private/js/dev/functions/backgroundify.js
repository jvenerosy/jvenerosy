import $ from 'jquery';
import Blazy from 'blazy';

export default function(element){

    let bLazy = new Blazy({
      offset: 5
    });

    $(element).each(function(){
      const img = $(this).data('src');
      const absolute = $(this).data('absolute');

      if(absolute == false){
        $(this).addClass('backgroundify--solid');
      } else {
        $(this).parent().css('position', 'relative');
        $(this).addClass('backgroundify');
      }
    })

}
