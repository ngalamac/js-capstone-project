import DOMManipulator from './modules/dom.js';
//import pikachu from './images/pikachu.jpg';
import './style.css';

const dom = new DOMManipulator();

dom.createCommentModal();
//const modalImg = document.querySelector('.modal-image');
//modalImg.src= pikachu;

dom.displayItems();

const data = {
  item_id: 'Under the Dome',
  username: 'Wonde',
  comment: 'This is a test comment',
};
//dom.addComment(data);
dom.closeModal;