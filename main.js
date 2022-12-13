let circle = document.querySelector('#circle')
let selection_circle = document.querySelector('#colors div')
let img_show;

/* Mudar cor do Iphone */
function clicar(color) {
  img_show = document.querySelector('#main-img .show') 
  circle.style.background = color
  circle.style.transition = '.4s'
  img_show.classList.remove('show')
 

  switch (color) {
    case "#384937":
      document.querySelector('#img-verde').classList.add('show')
      break;
    
    case "#f8ddd6":
      document.querySelector('#img-rosa').classList.add('show')
      break;
    
    case "#225f7e":
      document.querySelector('#img-azul').classList.add('show')
      break;
    
    case "#192028":
      document.querySelector('#img-preto').classList.add('show')
      break;
    
    case "#f7f2ee":
      document.querySelector('#img-branco').classList.add('show')
      break;
    
    case "#ae0617":
      document.querySelector('#img-vermelho').classList.add('show')
      break;

  }
}

/* header menu mobile */

function show_menu() {
  document.querySelector('#icon_menu').classList.toggle('show')
  document.querySelector('#icon_close').classList.toggle('show')
  // document.querySelector('main div').classList.toggle('show')
  document.querySelector('#mobile_links').classList.toggle('show')
  document.querySelector('#all-main').classList.toggle('hide')
  
}
