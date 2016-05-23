import Hammer from 'hammerjs';
import $ from 'jquery';
import desactivate from '../functions/desactivate.js';
import activate from '../functions/activate.js';
import {overlayOff, overlayOn} from '../functions/overlay.js';


export default function(){
  delete Hammer.defaults.cssProps.userSelect;
  const mc = new Hammer(document.querySelector('body'));  
  const open = function(){
    activate('.menu--link');
    $('body').addClass('swiperight');
  };
  const close = function(){
    desactivate('#menu');
  };


  mc.on('swiperight', function(e){
    let isOpen = $('body').hasClass('swiperight');

    !isOpen &&
      (Math.abs(e.deltaX) > $(window).width() / 3) ? open() : '';
  });

  mc.on('swipeleft', function(e){
    let isOpen = $('body').hasClass('swiperight');

    !!isOpen &&
      (Math.abs(e.deltaX) > $(window).width() / 3) ? close() : '';
  });
};
