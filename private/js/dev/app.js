//dependencies
import $ from 'jquery';
import activable from './functions/activable.js';
import backgroundify from './functions/backgroundify.js';
import swipeMenu from './functions/swipeMenu';

$(function() {
  //activate function
  //$('#menu').on('click', activable(this));
  activable('[data-activable]');

  //activate backgroundify
  backgroundify('[data-src]');

  //swipe on menu
  swipeMenu();
});
