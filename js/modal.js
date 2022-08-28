document.querySelectorAll('.modal-show').forEach(function(element){
    element.onclick = showModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
}

document.querySelectorAll('.modal-close').forEach(function(element){
    element.onclick = closeModal;
});

function closeModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.add('hide');
}

document.onkeydown = function(event){
    if (event.keyCode === 27){
        document.querySelectorAll('.modal-wrap').forEach(function(element) {
            element.classList.add('hide');
        });
    }   
}