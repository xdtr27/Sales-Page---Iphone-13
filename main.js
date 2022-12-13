let circle = document.querySelector('#circle')
let selection_circle = document.querySelector('#colors div')
let img_show;

let green = document.querySelector('#green')

// green.addEventListener('click', clicar)
// function clicar(event) {
//     console.log(event)
// }

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
