const countDown = document.getElementsByClassName('countdown')[0];

const cuenta = () => {
  let destinoFinal = new Date('June 30, 2025 09:00:00').getTime();

  let cuentaAtras = setInterval (() => {
    const ahora =  new Date().getTime();
    let limite = destinoFinal - ahora;
    let dias = Math.floor(limite / (1000 * 60 * 60 * 24));
    let horas = ('0' + Math.floor((limite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    let minutos = ('0' + Math.floor((limite % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    let segundos = ('0' + Math.floor((limite % (1000 * 60)) / 1000)).slice(-2);

    countDown.innerHTML = `<h3>${dias}d ${horas}h ${minutos}m ${segundos}s</h3>`;

    if (limite <= 0) {
      clearInterval(cuentaAtras);
      countDown.innerHTML = '<h3>Su espera ha terminado</h3>';
    }
  }, 1000);
}

cuenta()