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
// const swiper = new Swiper('.swiper', {
//     breakpoints: {
//         // when window width is >= 320px
//         375: {
//           slidesPerView: 1,
//         },
//         576: {
//           slidesPerView: 2,
//         },
//         // when window width is >= 480px
//         768: {
//           slidesPerView: 3,
//         },
//         // when window width is >= 640px
//         1024: {
//           slidesPerView: 4,
//         },
//         1200: {
//             slidesPerView: 1,
//         }
//       }
//   });

/* Создаем префикс +7, даже если вводят 8 или 9 */
const prefixNumber = (str) => {
  /* если вводят семерку, добавляем ей скобку */
  if (str === "7") {
    return "7 (";
  }
  /* если вводят восьмерку, ставим вместо нее +7 ( */
  if (str === "8") {
    return "+7 (";
  }
  /* если пишут девятку, заменяем на +7 (9  */
  if (str === "9") {
    return "7 (9";
  }
  /* в других случаях просто 7 (  */
  return "7 (";
};
; /* профикс в любом раскладе будет +7 () */

// ======================================
/* Ловим события ввода в любом поле */
document.addEventListener("input", (e) => {
  /* Проверяем, что это поле имеет класс phone-mask */
  if (e.target.classList.contains("phone-mask")) {
    /* поле с телефоном помещаем в переменную input */
    const input = e.target;
    /* вставляем плюс в начале номера */
    const value = input.value.replace(/\D+/g, "");
    /* длинна номера 11 символов */
    const numberLength = 11;

    /* Создаем переменную, куда будем записывать номер */
    let result;
    /* Если пользователь ввел 8... */
    if (input.value.includes("+8") || input.value[0] === "8") {
      /* Стираем восьмерку */
      result = "";
    } else {
      /* Оставляем плюсик в поле */
      result = "+";
    }

    //
    /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          /* в самом начале ставим префикс +7 ( */
          result += prefixNumber(value[i]);
          continue;
        case 4:
          /* добавляем после "+7 (" круглую скобку ")" */
          result += ") ";
          break;
        case 7:
          /* дефис после 7 символа */
          result += "-";
          break;
        case 9:
          /* еще дефис  */
          result += "-";
          break;
        default:
          break;
      }
      /* на каждом шаге цикла добавляем новую цифру к номеру */
      result += value[i];
    }
    /* итог: номер в формате +7 (999) 123-45-67 */
    input.value = result;
  }
});
// ======================================
