alert("Na próxima etapa digite 2 números para a executar as operações?")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let resultSoma = numberOne + numberTwo
let resultSub = numberOne - numberTwo
let resultMult = numberOne * numberTwo
let resultDiv = numberOne / numberTwo
let resultRestDiv = numberOne % numberTwo

resultDiv = resultDiv.toFixed(2)

alert("A soma dos dois números: "+ resultSoma)
alert("A subtração dos dois números: "+ resultSub)
alert("A multiplicação dos dois números: "+ resultMult)
alert("A divisão dos dois números: "+ resultDiv)
alert("O resto da divisão dos dois números: "+ resultRestDiv)

if(resultSoma % 2 === 0) {
  alert("A soma dos dois número é par: " +resultSoma)
} else {
  alert("A soma dos dois númros é impar: " +resultSoma)
}

if(numberOne == numberTwo) {
  alert("Os dois números são iguais!")
} else {
  alert("Os dois números são diferentes!")
}
