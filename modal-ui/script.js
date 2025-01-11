console.clear();
const modalRef = document.querySelector('.modalContainer');
const containerRef = document.querySelector('.container');
const closeModalRef = document.querySelector('.closeModalButton');
const buttonRefAll = document.querySelectorAll('.container button')

function closeModal() {
    modalRef.classList.remove('visible');
    modalRef.classList.add('hidden');


}
closeModalRef.addEventListener('click', closeModal);

function buttonClickHandler(e) {
    e.stopPropagation();

    if (modalRef.classList.contains('visible')) {
        closeModal();
    } else {
        modalRef.classList.remove('hidden');
        modalRef.classList.add('visible');

    }
}
console.log('hi')
buttonRefAll.forEach((buttonRef) => buttonRef.addEventListener('click', buttonClickHandler));
window.addEventListener('click', function (e) {
    if(modalRef.classList.contains('visible')) {
        closeModal();
    }

})
