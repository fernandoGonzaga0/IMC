function calcular() {
    const nome = document.getElementById('input_nome').value
    const altura = document.getElementById('input_altura').value
    const peso = document.getElementById('input_peso').value
    const caixa_texto = document.getElementById('text_area_resultado')
    const resultado = peso / ((altura / 100) ** 2)
    let IMC = ''

    if (resultado < 18.5) {
        IMC = "Seu IMC é classificado como BAIXO PESO.";
    } else if (resultado >= 18.5 && resultado <= 24.99) {
        IMC = "Seu IMC é classificado como NORMAL.";
    } else if (resultado >= 25 && resultado <= 29.99) {
        IMC = "Seu IMC é classificado como SOBREPESO.";
    } else {
        IMC = "Seu IMC é classificado como OBESIDADE.";
    }
    // alert(`${nome}, você possui ${resultado.toFixed(2)} de IMC.\n\n${IMC}`)
    caixa_texto.innerText = `${nome}, você possui ${resultado.toFixed(2)} de IMC. ${IMC}`
    // document.querySelectorAll("input").forEach(input => input.value = "")
}

function reiniciar() {
    document.querySelectorAll("input").forEach(input => input.value = '')
    document.querySelectorAll("textarea").forEach(textarea => textarea.value = '')
}

const botao = document.getElementById('botao_calcular')
botao.addEventListener('click', calcular)

const botaoReiniciar = document.getElementById('botao_reiniciar')
botaoReiniciar.addEventListener('click', reiniciar)