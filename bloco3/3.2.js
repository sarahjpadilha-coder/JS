const saudacao = (nome) => "Olá, " + nome + "! Bem-vindo ao sistema.";

const ehPositivo = (numero) => numero > 0;

const calcularArea = (largura, altura) => largura * altura;

console.log(saudacao("Grazi"));
console.log(saudacao("Sarah"));

console.log(ehPositivo(10));
console.log(ehPositivo(-5));

console.log(calcularArea(5, 8));
console.log(calcularArea(10, 4));