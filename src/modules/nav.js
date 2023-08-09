import DOMManipulator from "./dom.js";
const modal = document.getElementById('modal-comment');
const close = document.getElementById('close');

const dom = new DOMManipulator();

class Navigation {

    showModal = (commentBtn) => {
        commentBtn.addEventListener('click', () => {
            //modal.style.display = 'flex';
            //console.log(commentBtn.previousElementSibling.querySelector('.name'));
            const item_id = commentBtn.previousElementSibling.querySelector('.name');
            dom.getComment(item_id);
            modal.showModal();
        });
    }

    closeModal = () => {
        close.addEventListener('click', () => {
            modal.close();
        });
    }
}

export default Navigation;