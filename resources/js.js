const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const reiniciar = document.getElementById('reset');

const contador = document.getElementById('contador');

let contadorValor = 0;

sumar.addEventListener('click', () => {
    contadorValor++;
    contador.textContent = contadorValor;
});

restar.addEventListener('click', () => {
    contadorValor--;
    contador.textContent = contadorValor;
});

reiniciar.addEventListener('click', () => {
    contadorValor = 0;
    contador.textContent = contadorValor;
});