import DOMManipulator from './modules/dom.js';
import './style.css';

const dom = new DOMManipulator();

dom.createCommentModal();
dom.displayItems();
dom.closeModal();