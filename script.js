const modalButton = document.querySelector ('.button-record')
function openModal () {
    modalOpen.classList.remove ('hiden')
}
const modalButton2 = document.querySelector ('.button-recording')
const modalButton3 = document.querySelector ('.button.form')
const modalOpen = document.querySelector ('.modal-bg')
modalButton.addEventListener('click', openModal )
modalButton2.addEventListener ('click', openModal)
modalButton3.addEventListener ('click', openModal)
const modalClose = document.querySelector ('.modal-close')
function closeModal () {
    modalOpen.classList.add ('hiden')
}
modalClose.addEventListener ('click', closeModal     )