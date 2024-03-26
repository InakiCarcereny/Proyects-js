const buscador = document.querySelector('.buscador');
const imagenes = document.querySelectorAll('.carta');

const filtrador = () => {
  buscador.addEventListener('keyup', (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    imagenes.forEach((carta) => {
      const textoCarta = carta.textContent.toLowerCase();
      if (textoCarta.includes(textoBusqueda)) {
        carta.classList.remove('filter');
      } else {
        carta.classList.add('filter');
      }
    });
  });
}

filtrador(); // Llama a la función para activar el evento de filtrado
 