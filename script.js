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
for (let i = 0; i < 4; i++) {    
    modalButton2[i].addEventListener('click', openModal)
}
const chekBox = document.querySelector (".chek-box")
const iconNotify = document.querySelector (".notify-icon")
function onChekBoxClick (){
    if (iconNotify.classList.contains('hiden'))
    {
     iconNotify.classList.remove ('hiden')
    }
    else {
        iconNotify.classList.add ('hiden')
    }
}
chekBox.addEventListener('click', onChekBoxClick)

const chekBoxTwo = document.querySelector ('.chek-box.modal')
const iconNotifyTwo = document.querySelector ('.notify-icon.modal')
function onChekBoxClickTwo () {
     if (iconNotifyTwo.classList.contains('hiden'))
    {
     iconNotifyTwo.classList.remove ('hiden')
    }
    else {
        iconNotifyTwo.classList.add ('hiden')
    }
}
chekBoxTwo.addEventListener('click', onChekBoxClickTwo)