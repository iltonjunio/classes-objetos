// Exercício 1: Definindo as classes
class Cliente {
  constructor(cpf, nome, datanascimento) {
    this.cpf = cpf;
    this.nome = nome;
    this.datanascimento = datanascimento;
  }
}

class Produto {
  constructor(codigo, descricao, qtdestoque) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.qtdestoque = qtdestoque;
  }
}

class Venda {
  constructor(codigo, datahora, cliente, produto) {
    this.codigo = codigo;
    this.datahora = datahora;
    this.cliente = cliente;
    this.produto = produto;
  }
}

// Exercício 2: Instanciando objetos
const cliente1 = new Cliente('111.111.111-11', 'João', '01/01/1990');
const cliente2 = new Cliente('222.222.222-22', 'Maria', '05/02/1985');
const cliente3 = new Cliente('333.333.333-33', 'Pedro', '10/10/2000');

const produto1 = new Produto('001', 'Camiseta', 10);
const produto2 = new Produto('002', 'Calça', 5);
const produto3 = new Produto('003', 'Boné', 20);
const produto4 = new Produto('004', 'Tênis', 15);
const produto5 = new Produto('005', 'Jaqueta', 8);
const produto6 = new Produto('006', 'Shorts', 12);
const produto7 = new Produto('007', 'Chinelo', 25);
const produto8 = new Produto('008', 'Bolsa', 7);

const venda1 = new Venda(1, '23/06/2023 14:30', cliente1, produto1);
const venda2 = new Venda(2, '24/06/2023 10:15', cliente2, produto2);
const venda3 = new Venda(3, '25/06/2023 18:45', cliente3, produto3);
const venda4 = new Venda(4, '26/06/2023 09:00', cliente1, produto4);
const venda5 = new Venda(5, '27/06/2023 16:20', cliente2, produto5);

// Exercício 3: Arrays e exibição dos atributos
const clientesArray = [cliente1, cliente2, cliente3];
const produtosArray = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8];
const vendasArray = [venda1, venda2, venda3, venda4, venda5];

console.log('Atributos dos clientes:');
clientesArray.forEach(cliente => {
  console.log(cliente.nome);
});

console.log('\nAtributos dos produtos:');
produtosArray.forEach(produto => {
  console.log(produto.descricao);
});

console.log('\nAtributos das vendas:');
vendasArray.forEach(venda => {
  console.log(venda.datahora);
});

// Exercício 4: Transformando arrays em objetos da classe Map com valores em formato de array
const mapaClientes = new Map(clientesArray.map(cliente => [cliente.cpf, [cliente.nome, cliente.datanascimento]]));
const mapaProdutos = new Map(produtosArray.map(produto => [produto.codigo, [produto.descricao, produto.qtdestoque]]));
const mapaVendas = new Map(vendasArray.map(venda => [venda.codigo, [venda.datahora, venda.cliente, venda.produto]]));

console.log('\nMapa de clientes:');
console.log(mapaClientes);

console.log('\nMapa de produtos:');
console.log(mapaProdutos);

console.log('\nMapa de vendas:');
console.log(mapaVendas);

// Exercício 5: Transformando arrays em objetos da classe Map com valores em formato de objeto
const mapaClientesObjetos = new Map(clientesArray.map(cliente => [cliente.cpf, { nome: cliente.nome, datanascimento: cliente.datanascimento }]));
const mapaProdutosObjetos = new Map(produtosArray.map(produto => [produto.codigo, { descricao: produto.descricao, qtdestoque: produto.qtdestoque }]));
const mapaVendasObjetos = new Map(vendasArray.map(venda => [venda.codigo, { datahora: venda.datahora, cliente: venda.cliente, produto: venda.produto }]));

console.log('\nMapa de clientes (objetos):');
console.log(mapaClientesObjetos);

console.log('\nMapa de produtos (objetos):');
console.log(mapaProdutosObjetos);

console.log('\nMapa de vendas (objetos):');
console.log(mapaVendasObjetos);

