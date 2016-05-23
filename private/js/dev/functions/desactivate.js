import $ from 'jquery';
import {overlayOff, overlayOn} from '../functions/overlay.js';

export default function(elem){
    let trigger = $(`[data-activable='${elem}']`);
    let over = $(trigger).attr('data-overlay');

    $(elem).removeClass('active');
    let rest = $(elem).attr('class');

    !!rest &&
        $(elem).removeAttr('class');

    !!over &&
        overlayOff(over);
}
