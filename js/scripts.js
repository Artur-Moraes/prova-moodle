
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuLinks = document.querySelector('.menu-links');

menuHamburguer.addEventListener('click', () => {
    menuLinks.style.display = menuLinks.style.display === 'block' ? 'none' : 'block';
});


const imcForm = document.getElementById('imc-form');
const resultadoImc = document.getElementById('resultado-imc');

imcForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!isNaN(peso) && !isNaN(altura)) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc < 24.9) classificacao = 'Peso normal';
        else if (imc < 29.9) classificacao = 'Sobrepeso';
        else classificacao = 'Obesidade';

        resultadoImc.textContent = `Seu IMC é ${imc} (${classificacao}).`;
    } else {
        resultadoImc.textContent = 'Por favor, insira valores válidos.';
    }
});
