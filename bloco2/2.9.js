const temperaturas = [23, 17, 31, 8, 25, 14, 29, 11];

let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log("Maior temperatura:", maior);
console.log("Menor temperatura:", menor);