const carrinho = [
    { produto: "Notebook", preco: 4500, quantidade: 1 },
    { produto: "Mouse", preco: 120, quantidade: 2 },
    { produto: "Teclado", preco: 280, quantidade: 1 },
    { produto: "Monitor", preco: 1800, quantidade: 2 },
    { produto: "Headset", preco: 350, quantidade: 1 }
  ];
  
  let total = 0;
  let itemMaisCaro = carrinho[0].produto;
  let maiorPreco = carrinho[0].preco;
  
  for (let i = 0; i < carrinho.length; i++) {
  
      console.log(
          carrinho[i].produto +
          " x" +
          carrinho[i].quantidade +
          " - R$ " +
          carrinho[i].preco.toFixed(2)
      );
  
      let subtotal = carrinho[i].preco * carrinho[i].quantidade;
  
      console.log("Subtotal: R$ " + subtotal.toFixed(2));
  
      total += subtotal;
  
      if (carrinho[i].preco > maiorPreco) {
          maiorPreco = carrinho[i].preco;
          itemMaisCaro = carrinho[i].produto;
      }
  }
  
  console.log("Total da compra: R$ " + total.toFixed(2));
  console.log("Item mais caro: " + itemMaisCaro);
  
  if (total > 5000) {
      let desconto = total * 0.10;
      let valorFinal = total - desconto;
  
      console.log("Desconto: R$ " + desconto.toFixed(2));
      console.log("Valor final: R$ " + valorFinal.toFixed(2));
  } else {
      console.log("Sem desconto.");
  }