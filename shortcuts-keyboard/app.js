const contenedorPelota = document.querySelector('.contenedor-pelota')
const pelota = document.querySelector('.pelota');

let x = 0;
let y = 0;

let controlBoard = pelota.getBoundingClientRect;
let controlBall = contenedorPelota.getBoundingClientRect;


document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') {
    y++
  };

  if (e.key === 'ArrowUp') {
    y--;
  };

  if (e.key === 'ArrowLeft') {
    x--;
  };

  if (e.key === 'ArrowRight') {
    x++;
  };

  pelota.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}) 

//agregar colisiones

function checkColision () {
  
}
