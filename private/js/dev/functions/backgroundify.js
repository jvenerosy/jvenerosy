import $ from 'jquery';

export default function(element){

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
