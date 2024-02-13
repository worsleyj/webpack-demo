import _ from 'lodash';
import myName from './myName.js';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Joey');
  return element;
}
  
  document.body.appendChild(component());