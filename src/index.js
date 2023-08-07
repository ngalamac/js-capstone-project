import './style.css';
import image from './images/ic.png';

function component(elt) {
  const element = document.createElement(elt);
  element.innerHTML = 'Hello Webpack';
  return element;
}

const img = component('img');
img.src = image;
document.body.appendChild(img);
document.body.appendChild(component('div'));