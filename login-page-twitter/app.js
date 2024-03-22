const boton = document.querySelector('.login')
const pantallaLogin = document.querySelector('.contenedor-principal-2')
const contenedorImg = document.querySelector('.contenedor-img')
const contenedorPagina = document.querySelector('.contenedor-pagina')

boton.addEventListener('click', () => {
  pantallaLogin.classList.toggle('active')
  contenedorImg.classList.toggle('blur')
  contenedorPagina.classList.toggle('blur')
})