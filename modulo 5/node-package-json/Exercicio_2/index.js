// Exercicio 2

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const soma = num1 + num2
const sub = num1 - num2
const mult = num1  * num2
const div = num1 /  num2

switch (operacao) {
    case "add":
        console.log(soma)
        break;
    case "sub":
        console.log(sub)
        break;
    case "div":
        console.log(div)
        break;
    case "mult":
        console.log(mult)
        break;
    default:
        break;
}