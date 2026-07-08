const estoque = {
    produtos: [],

    adicionarProduto(nome, preco, quantidade) {
        this.produtos.push({
            nome: nome,
            preco: preco,
            quantidade: quantidade
        });
    },

    listarProdutos() {
        console.log("Lista de Produtos:");

        for (let i = 0; i < this.produtos.length; i++) {
            console.log(
                `${this.produtos[i].nome} - R$ ${this.produtos[i].preco.toFixed(2)} - Quantidade: ${this.produtos[i].quantidade}`
            );
        }
    },

    buscarProduto(nome) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome === nome) {
                return this.produtos[i];
            }
        }

        return null;
    },

    valorTotal() {
        let total = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].preco * this.produtos[i].quantidade;
        }

        return total;
    }
};

estoque.adicionarProduto("Notebook", 4500, 2);
estoque.adicionarProduto("Mouse", 120, 5);
estoque.adicionarProduto("Teclado", 280, 3);
estoque.adicionarProduto("Monitor", 1800, 1);

estoque.listarProdutos();

console.log("\nBuscar produto:");
console.log(estoque.buscarProduto("Mouse"));

console.log("\nBuscar produto inexistente:");
console.log(estoque.buscarProduto("Celular"));

console.log("\nValor total do estoque:");
console.log("R$ " + estoque.valorTotal().toFixed(2));