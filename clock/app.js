const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const contenedorHora = document.querySelector('.hora');

let tiempo;

function mostrarHora() {
  iniciar.addEventListener('click', () => {
    tiempo = setInterval(() => {
      hora = new Date().toLocaleTimeString();
      contenedorHora.textContent = hora;
    }, 1000);
  })
}

console.log(mostrarHora());

function pararHora() {
  parar.addEventListener('click', () => {
    clearInterval(tiempo);
    contenedorHora.textContent = '00:00:00';
  })
}

console.log(pararHora());
