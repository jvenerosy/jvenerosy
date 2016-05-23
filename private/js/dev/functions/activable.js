import $ from 'jquery';
import activate from '../functions/activate.js';

export default function(element){
  $(element).each(function(){
    $(this).on('click', function(){
      activate($(this));
    });
  });
}
