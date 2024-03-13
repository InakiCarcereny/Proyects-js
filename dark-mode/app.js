const boton = document.querySelector('.darkmode')
const cuerpo = document.querySelector('.cuerpo')
const sun = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
<path d="M6.343 17.657l-1.414 1.414" />
<path d="M6.343 6.343l-1.414 -1.414" />
<path d="M17.657 6.343l1.414 -1.414" />
<path d="M17.657 17.657l1.414 1.414" />
<path d="M4 12h-2" />
<path d="M12 4v-2" />
<path d="M20 12h2" />
<path d="M12 20v2" />
</svg>`
const moon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>`

let darkMode = false;

boton.addEventListener('click', () => {
  darkMode = !darkMode; // Cambiar el estado del modo oscuro

  cuerpo.classList.toggle('dark', darkMode); // Alternar la clase 'dark' basada en el estado del modo oscuro
  cuerpo.style.transition = 'ease-in .2s';
  
  if (darkMode) {
    boton.innerHTML = sun; // Cambiar el icono a luna
  } else {
    boton.innerHTML = moon; // Cambiar el icono a sol
  }
});
