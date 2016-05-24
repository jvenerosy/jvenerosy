//dependencies
import $ from 'jquery';
import activable from './functions/activable.js';
import backgroundify from './functions/backgroundify.js';
import swipeMenu from './functions/swipeMenu';
import Blazy from 'blazy';

$(function() {
  //activate function
  //$('#menu').on('click', activable(this));
  activable('[data-activable]');

  //lazyload
  let bLazy = new Blazy({
    offset: 5
  });

  //activate backgroundify
  backgroundify('.bgify');

  //swipe on menu
  swipeMenu();
});
