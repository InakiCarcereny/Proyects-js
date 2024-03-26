const button = document.querySelector('.toggle');
const aside = document.querySelector('aside');
const active = document.querySelector('span');

button.addEventListener('click', () => {
  aside.classList.toggle('aside-toggle');
  active.forEach(element => {
    element.classList.toggle('aside-active');
  });
})