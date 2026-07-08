const calculadora = {
    historico: [],

    somar(a, b) {
        let resultado = a + b;
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return resultado;
    },

    subtrair(a, b) {
        let resultado = a - b;
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return resultado;
    },

    verHistorico() {
        console.log("Histórico de operações:");

        for (let i = 0; i < this.historico.length; i++) {
            console.log(this.historico[i]);
        }
    }
};

console.log(calculadora.somar(10, 5));
console.log(calculadora.subtrair(20, 8));
console.log(calculadora.somar(7, 3));

calculadora.verHistorico();