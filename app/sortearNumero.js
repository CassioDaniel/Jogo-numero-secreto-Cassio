const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número Secreto:', numeroSecreto)

const elemnetoMenorValor = document.getElementById('menor-valor')
elemnetoMenorValor.innerHTML = menorValor

const elemnetoMaiorValor = document.getElementById('maior-valor')
elemnetoMaiorValor.innerHTML = maiorValor