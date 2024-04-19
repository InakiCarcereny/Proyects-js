const form = document.querySelector('.contact');
const inputs = document.querySelectorAll('.contact [required]');

const validation = () => {
  inputs.forEach((input) => {
    const span = document.createElement('span');
    span.id = input.name;
    span.textContent = input.title;
    span.classList.add('validating', 'none');
    input.insertAdjacentElement('afterend', span);
  });

  document.addEventListener('keyup', (e) => {
    if (e.target.matches('.contact [required]')) {
      const input = e.target;
      const pattern = input.pattern;

      if (pattern && input.value !== '') {
        const regex = new RegExp(pattern);
        const isValid = regex.test(input.value);

        if (!isValid) {
          document.getElementById(input.name).classList.add('active');
        } else {
          document.getElementById(input.name).classList.remove('active');
        }
      }
    }
  });

  document.addEventListener('submit', (e) => {
    fetch('https://formsubmit.co/ajax/inakicarce@hotmail.com.ar', {
      method: 'POST',
      body: new FormData(e.target)
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
      console.log(json);
      form.reset();
    })
    .catch(err => {
      console.log(err);
    });
  });
}
validation();
