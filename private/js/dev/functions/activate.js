//dependencies
import $ from 'jquery';
import {overlayOff, overlayOn} from '../functions/overlay.js';
import desactivate from '../functions/desactivate.js';

export default function(element){

  let elem = $(element).data('activable');
  let exit = $(element).data('desactivable');
  let over = $(element).attr('data-overlay');

  $(elem).addClass('active');
  (over)?overlayOn(elem):'';

  !!exit &&
    $(exit).click(function(){
      desactivate(elem);
    });
}
