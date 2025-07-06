const modalButton = document.querySelector ('.button-record')
function openModal () {
    modalOpen.classList.remove ('hiden')
}
const modalButton2 = document.querySelectorAll  ('.button-recording')
const modalButton3 = document.querySelector('.button.form')
const modalOpen = document.querySelector ('.modal-bg')
modalButton.addEventListener('click', openModal )
modalButton3.addEventListener ('click', openModal)
const modalClose = document.querySelector ('.modal-close')
function closeModal () {
    modalOpen.classList.add ('hiden')
}
modalClose.addEventListener ('click', closeModal)
for (let i = 0; i < 6; i++) {    
    modalButton2[i].addEventListener('click', openModal)
}