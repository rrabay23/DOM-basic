const input1 = document.getElementById('calcular');
const input2 = document.getElementById('calcular2');
const pResult = document.getElementById('result');
const btn = document.querySelector('#btnCalcular');

btn.addEventListener('click', btnOnClick);
btn.addEventListener('mouseover', btnOnMouseOver);

function btnOnMouseOver() {
    btn.style.backgroundColor = 'orange';

    setTimeout(() => {
        btn.style.backgroundColor = '';
    }, 600);
}

function btnOnClick() {
    const suma = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + suma;
}