import _ from 'lodash';
import './style.css';
import Pic from './pic.jpg';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Adding image to current div
    const myPic = new Image();
    myPic.src = Pic;

    element.appendChild(myPic);
  
    return element;
  }
  
  document.body.appendChild(component());
