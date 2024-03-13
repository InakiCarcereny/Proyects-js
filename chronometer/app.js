const iniciar  = document.querySelector('.iniciar');
const reiniciar = document.querySelector('.borrar');
const cambiarCronometro = document.querySelector('.cronometro');
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" />
<path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" />
</svg>`;
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate-clockwise" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />`;
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" />
</svg>`;



let segundos = 0;
let minutos = 0;
let horas = 0;

let intervaloDeTiempo;
let estado = 'pausado';

const extraerTiempo = () => {
  segundos++

  if (segundos / 60 === 1) {
    segundos = 0
    minutos++
  }

  if (minutos / 60 === 1) {
    minutos = 0
    horas++
  }

  const segundosConFormato = agregarCero(segundos);
  const minutosConFormato = agregarCero(minutos);
  const horasConFormato = agregarCero(horas);
  
  cambiarCronometro.innerHTML = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function agregarCero (agregar) {
  return agregar < 10 ? '0' + agregar
  :agregar 
}


iniciar.addEventListener ('click', () => {
  if (estado === 'pausado') {
    intervaloDeTiempo = window.setInterval(extraerTiempo, 1000);

    let pausar = document.querySelector('#pausar')
    pausar.innerHTML = svg1;

    estado = 'andando';
  } else {
    
    window.clearInterval(intervaloDeTiempo);

    let pausar = document.querySelector('#pausar')
    pausar.innerHTML = svg2;

    estado = 'pausado';
  }
})

reiniciar.addEventListener ('click', () => {
  let pausar = document.querySelector('#pausar')
  pausar.innerHTML = svg3;
  window.clearInterval(intervaloDeTiempo)
  cambiarCronometro.textContent = '00:00:00'
  estado = 'pausado'
})

