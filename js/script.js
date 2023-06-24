
//exercicio 1
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

// Exercício 2
const clientes = [
  new Cliente('11111111111', 'Cliente 1', '1990-01-01'),
  new Cliente('22222222222', 'Cliente 2', '1995-05-10'),
  new Cliente('33333333333', 'Cliente 3', '1988-12-15')
];

const produtos = [
  new Produto('001', 'Produto 1', 10),
  new Produto('002', 'Produto 2', 5),
  new Produto('003', 'Produto 3', 20),
  new Produto('004', 'Produto 4', 8),
  new Produto('005', 'Produto 5', 15),
  new Produto('006', 'Produto 6', 3),
  new Produto('007', 'Produto 7', 12),
  new Produto('008', 'Produto 8', 7)
];

const vendas = [
  new Venda('001', '2023-06-01 10:00:00', clientes[0], produtos[0]),
  new Venda('002', '2023-06-02 14:30:00', clientes[1], produtos[3]),
  new Venda('003', '2023-06-03 16:45:00', clientes[2], produtos[5]),
  new Venda('004', '2023-06-04 09:15:00', clientes[0], produtos[1]),
  new Venda('005', '2023-06-05 11:30:00', clientes[1], produtos[7])
];

// Exercício 3
// Array de clientes
const cliente = [
  { cpf: '11111111111', nome: 'João' },
  { cpf: '22222222222', nome: 'Maria' },
  { cpf: '33333333333', nome: 'Pedro' }
];

// Array de produtos
const produto = [
  { codigo: 'P1', descricao: 'Camiseta', qtdestoque: 10 },
  { codigo: 'P2', descricao: 'Calça', qtdestoque: 5 },
  { codigo: 'P3', descricao: 'Boné', qtdestoque: 20 }
];

// Array de vendas
const venda = [
  { codigo: 'V1', datahora: '2023-06-01 10:30', cliente: '11111111111', produto: 'P1' },
  { codigo: 'V2', datahora: '2023-06-02 15:45', cliente: '22222222222', produto: 'P2' },
  { codigo: 'V3', datahora: '2023-06-03 09:15', cliente: '33333333333', produto: 'P3' }
];

// Exibindo os atributos de cada classe
console.log('\n\nAtributos dos clientes:');
for (let i = 0; i < clientes.length; i++) {
  const cliente = clientes[i];
  console.log('Nome:', cliente.nome);
}

console.log('\n\nAtributos dos produtos:');
for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  console.log('Descrição:', produto.descricao);
}

console.log('\n\nAtributos das vendas:');
for (let i = 0; i < vendas.length; i++) {
  const venda = vendas[i];
  console.log('Data/Hora:', venda.datahora);
}


// Exercício 4

const clienteMap = new Map();
for (let i = 0; i < clientes.length; i++) {
  const cliente = clientes[i];
  clienteMap.set(cliente.cpf, { nome: cliente.nome, datanascimento: cliente.datanascimento });
}

const produtoMap = new Map();
for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  produtoMap.set(produto.codigo, { descricao: produto.descricao, qtdestoque: produto.qtdestoque });
}

const vendaMap = new Map();
for (let i = 0; i < vendas.length; i++) {
  const venda = vendas[i];
  vendaMap.set(venda.codigo, { datahora: venda.datahora, cliente: venda.cliente, produto: venda.produto });
}

console.log('\n\nMapa de clientes (objetos):', clienteMap);
console.log('\n\nMapa de produtos (objetos):', produtoMap);
console.log('\n\nMapa de vendas (objetos):', vendaMap);



// Exercício 5
// Transformando os arrays em objetos Map
const clienteMap1 = new Map();
for (let i = 0; i < clientes.length; i++) {
  const cliente = clientes[i];
  clienteMap.set(cliente.cpf, { nome: cliente.nome, datanascimento: cliente.datanascimento });
}

const produtoMap1 = new Map();
for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  produtoMap.set(produto.codigo, { descricao: produto.descricao, qtdestoque: produto.qtdestoque });
}

const vendaMap1 = new Map();
for (let i = 0; i < vendas.length; i++) {
  const venda = vendas[i];
  vendaMap.set(venda.codigo, { datahora: venda.datahora, cliente: venda.cliente, produto: venda.produto });
}

console.log('\nMapa de clientes (objetos):', clienteMap);
console.log('\nMapa de produtos (objetos):', produtoMap);
console.log('\nMapa de vendas (objetos):', vendaMap);
