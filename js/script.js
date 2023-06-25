// Exercício 1: Definindo as classes
// class Cliente {
//   constructor(cpf, nome, datanascimento) {
//     this.cpf = cpf;
//     this.nome = nome;
//     this.datanascimento = datanascimento;
//   }
// }

// class Produto {
//   constructor(codigo, descricao, qtdestoque) {
//     this.codigo = codigo;
//     this.descricao = descricao;
//     this.qtdestoque = qtdestoque;
//   }
// }

// class Venda {
//   constructor(codigo, datahora, cliente, produto) {
//     this.codigo = codigo;
//     this.datahora = datahora;
//     this.cliente = cliente;
//     this.produto = produto;
//   }
// }

// // Exercício 2: Instanciando objetos
// const cliente1 = new Cliente('111.111.111-11', 'João', '01/01/1990');
// const cliente2 = new Cliente('222.222.222-22', 'Maria', '05/02/1985');
// const cliente3 = new Cliente('333.333.333-33', 'Pedro', '10/10/2000');

// const produto1 = new Produto('001', 'Camiseta', 10);
// const produto2 = new Produto('002', 'Calça', 5);
// const produto3 = new Produto('003', 'Boné', 20);
// const produto4 = new Produto('004', 'Tênis', 15);
// const produto5 = new Produto('005', 'Jaqueta', 8);
// const produto6 = new Produto('006', 'Shorts', 12);
// const produto7 = new Produto('007', 'Chinelo', 25);
// const produto8 = new Produto('008', 'Bolsa', 7);

// const venda1 = new Venda(1, '23/06/2023 14:30', cliente1, produto1);
// const venda2 = new Venda(2, '24/06/2023 10:15', cliente2, produto2);
// const venda3 = new Venda(3, '25/06/2023 18:45', cliente3, produto3);
// const venda4 = new Venda(4, '26/06/2023 09:00', cliente1, produto4);
// const venda5 = new Venda(5, '27/06/2023 16:20', cliente2, produto5);

// // Exercício 3: Arrays e exibição dos atributos
// const clientesArray = [cliente1, cliente2, cliente3];
// const produtosArray = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8];
// const vendasArray = [venda1, venda2, venda3, venda4, venda5];

// console.log('Atributos dos clientes:');
// clientesArray.forEach(cliente => {
//   console.log(cliente.nome);
// });

// console.log('\nAtributos dos produtos:');
// produtosArray.forEach(produto => {
//   console.log(produto.descricao);
// });

// console.log('\nAtributos das vendas:');
// vendasArray.forEach(venda => {
//   console.log(venda.datahora);
// });

// // Exercício 4: Transformando arrays em objetos da classe Map com valores em formato de array
// const mapaClientes = new Map(clientesArray.map(cliente => [cliente.cpf, [cliente.nome, cliente.datanascimento]]));
// const mapaProdutos = new Map(produtosArray.map(produto => [produto.codigo, [produto.descricao, produto.qtdestoque]]));
// const mapaVendas = new Map(vendasArray.map(venda => [venda.codigo, [venda.datahora, venda.cliente, venda.produto]]));

// console.log('\nMapa de clientes:');
// console.log(mapaClientes);

// console.log('\nMapa de produtos:');
// console.log(mapaProdutos);

// console.log('\nMapa de vendas:');
// console.log(mapaVendas);

// // Exercício 5: Transformando arrays em objetos da classe Map com valores em formato de objeto
// const mapaClientesObjetos = new Map(clientesArray.map(cliente => [cliente.cpf, { nome: cliente.nome, datanascimento: cliente.datanascimento }]));
// const mapaProdutosObjetos = new Map(produtosArray.map(produto => [produto.codigo, { descricao: produto.descricao, qtdestoque: produto.qtdestoque }]));
// const mapaVendasObjetos = new Map(vendasArray.map(venda => [venda.codigo, { datahora: venda.datahora, cliente: venda.cliente, produto: venda.produto }]));

// console.log('\nMapa de clientes (objetos):');
// console.log(mapaClientesObjetos);

// console.log('\nMapa de produtos (objetos):');
// console.log(mapaProdutosObjetos);

// console.log('\nMapa de vendas (objetos):');
// console.log(mapaVendasObjetos);

// Classes  
class Cliente {
  constructor(cpf, nome, datanasc) {
      this.cpf = cpf
      this.nome = nome
      this.datanasc = datanasc
  }
}

class Produto {
  constructor(codigo, descr, qtdestoque) {
      this.codigo = codigo
      this.descr = descr
      this.qtdestoque = qtdestoque
  }
}

class Venda {
  constructor(codigo, datahora, cliente, produto) {
      this.codigo = codigo
      this.datahora = datahora
      this.cliente = cliente
      this.produto = produto

  }
}
// Novo Cliente
let cliente1 = new Cliente('123456789', 'João', '1990-05-15')
let cliente2 = new Cliente('987654321', 'Maria', '1995-10-20')

// Novo Produto
let produto1 = new Produto('001', 'Camiseta', 10)
let produto2 = new Produto('002', 'Calça', 5)

//Nova venda
let venda1 = new Venda('001', '24031990', cliente1, produto1)
let venda2 = new Venda('002', '24021990', cliente2, produto2)

console.log(venda1.cliente.nome)
console.log(venda2.produto.descr)

// Nova Array 
let clientes = []
let produtos = []
let vendas = []

// Nova Instaciando objetos da classe Produto
for (let i = 0; i < 3; i++) {
  let cliente = new Cliente(`CPF ${i}`, `Cliente ${i}`, '1990-01-01')
  clientes.push(cliente)
}

for (let i = 0; i < 8; i++) {
  let produto = new Produto(`COD ${i}`, `Produto ${i}`, 10)
  produtos.push(produto)
}

// Instanciando objetos da classe Venda, fazendo referência aos clientes e produtos existentes
for (let i = 0; i <5; i++) {
  let clienteIndex = i % 3
  let produtoIndex = i % 8
  let venda = new Venda(`VENDA ${i}`, new Date(), clientes[clienteIndex], produtos[produtoIndex])
  vendas.push(venda)
}

// Exibindo objetos criados
console.log(clientes)
console.log(produtos)
console.log(vendas)


// Arrays para armazenar os objetos de cada classe 
let arrayClientes = clientes
let arrayProdutos = produtos
let arrayVendas = vendas

// Exibindo os atributos de cada objeto
console.log("Atributos dos Clientes:")
arrayClientes.forEach(cliente => {
  console.log(cliente.nome)
})

console.log("Atributos do Produtos:")
arrayProdutos.forEach(produto => {
  console.log(produto.descr)
})

console.log("Atributos das Vendas:")
arrayVendas.forEach(venda => {
  console.log(venda.datahora)
})

// Transformando o array de Clientes em um objeto Map
let mapClientes = new Map(arrayClientes.map(cliente => [cliente.cpf, [cliente.nome, cliente.datanasc]]))

// Transformando o array de Produtos em um objeto Map
let mapProdutos = new Map(arrayProdutos.map(produto => [produto.codigo, [produto.descr, produto.qtdestoque]]))

// Transformando o array de Vendas em um objeto Map
let mapVendas = new Map(arrayVendas.map(venda => [venda.codigo, [venda.datahora, venda.cliente, venda.produto]]))

// Exibindo os objetos Map
console.log("Objeto Map dos Clientes:", mapClientes)
console.log("Objeto Map dos Produtos:", mapProdutos)
console.log("Objeto Map das Vendas:", mapVendas)

// Transformando o array de Clientes em um objeto Map
let mapClientes1 = new Map(arrayClientes.map(cliente => [cliente.cpf, { nome: cliente.nome, datanascimento: cliente.dataNascimento }]))

// Transformando o array de Produtos em um objeto Map
let mapProdutos1 = new Map(arrayProdutos.map(produto => [produto.codigo, {descr: produto.descr, qtdestoque: produto.qtdestoque} ]))

// Transformando o array de Vendas em um objeto Map
let mapVendas1 = new Map(arrayVendas.map(venda => [venda.codigo, {datahora: venda.cliente, produto: venda.produto }]))

// Exibindo os objetos Map
console.log("Objeto Map dos CLientes:", mapClientes)
console.log("Objeto Map dos Produtos", mapProdutos)
console.log("Objeto Map das Vendas", mapVendas)