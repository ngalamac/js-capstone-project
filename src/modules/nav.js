const modal = document.getElementById('modal-comment');
const close = document.getElementById('close');
class Navigation {

    showModal = (commentBtn) => {
        commentBtn.addEventListener('click', () => {
            //modal.style.display = 'flex';
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