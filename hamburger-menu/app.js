const boton = document.querySelector('button');
const menu = document.querySelector('.contenedor')

boton.addEventListener('click', () => {
  menu.classList.toggle('active');
})
