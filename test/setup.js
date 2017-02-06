import { jsdom } from 'jsdom';
import moment from 'moment';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

Object.keys(window).forEach(key => {
  if (!(key in global)) global[key] = window[key];
});

console.log(`---------------${moment().format('HH:mm:ss')}---------------`);
