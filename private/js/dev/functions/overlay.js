//dependencies
import $ from 'jquery';
import desactivate from '../functions/desactivate';

const container = '<div class="overlay">';

export function overlayOff(elem){

  $(elem).removeClass('overlay-sup');
  $('.overlay').remove();
  $('html').removeClass('overlay-body');
  $('body').removeAttr('class');
  let rest = $('html').attr('class');

  !rest &&
    $('html').removeAttr('class');

  !!elem &&
    desactivate(elem);
};

export function overlayOn(elem){
    $(elem).addClass('overlay-sup');
    $('html').append(container).addClass('overlay-body');
    $('.overlay').on("click", function(){
        overlayOff(elem);
    });
};
