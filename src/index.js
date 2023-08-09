import DOMManipulator from './modules/dom.js';
import './style.css';

const dom = new DOMManipulator();
dom.displayItems();
const data = {
  item_id: 'Under the dome',
  username: 'Bish',
  comment: 'This is a test comment',
};
dom.addComment(data);