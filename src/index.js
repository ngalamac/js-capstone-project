import Navigation from './modules/nav.js';
import DOMManipulator from './modules/dom.js';
import pikachu from './images/pikachu.jpg';
import './style.css';

const nav = new Navigation();

const dom = new DOMManipulator();

//dom.createCommentModal();
const modalImg = document.querySelector('.modal-image');
modalImg.src= pikachu;

dom.displayItems();

const data = {
  item_id: 'Under the dome',
  username: 'Bish',
  comment: 'This is a test comment',
};
dom.addComment(data);
nav.closeModal;