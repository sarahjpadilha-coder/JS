const nome = "Grate";
const classe = "guerreira";

let nivel = 5;
let pontosDeVida = 84;
let estaVivo = true;
let armaEquipada = "Machado de Batalha";

const status = estaVivo ? "Vivo" : "Morto";


console.log(`${nome} é uma ${classe} nível ${nivel} com ${pontosDeVida} HP. Arma: ${armaEquipada}. Status: ${status}`);