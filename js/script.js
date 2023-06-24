// class Cliente {
//     constructor(cpf, nome, datanascimento) {
//     this.cpf = cpf;
//     this.nome = nome;
//     this.datanascimento = datanascimento;
//     }
// }

// class Produto {
//     constructor(codigo, descricao, qtdestoque) {
//     this.codigo = codigo;
//     this.descricao = descricao;
//     this.qtdestoque = qtdestoque;
//     }
// }

// class Venda {
//     constructor(codigo, datahora, cliente, produto) {
//     this.codigo = codigo;
//     this.datahora = datahora;
//     this.cliente = cliente;
//     this.produto = produto;
//     }
// }

//   // Exercício 02
//   // Instanciando objetos para a classe Cliente
// const clientes = [
//     new Cliente('111.111.111-11', 'João', '1990-01-01'),
//     new Cliente('222.222.222-22', 'Maria', '1985-05-10'),
//     new Cliente('333.333.333-33', 'Pedro', '1998-12-15')
// ];

//   // Instanciando objetos para a classe Produto
// const produtos = [
//     new Produto('001', 'Camiseta', 10),
//     new Produto('002', 'Calça Jeans', 5),
//     new Produto('003', 'Tênis', 15),
//     new Produto('004', 'Boné', 20),
//     new Produto('005', 'Óculos de Sol', 8),
//     new Produto('006', 'Bolsa', 12),
//     new Produto('007', 'Chapéu', 30),
//     new Produto('008', 'Jaqueta', 3)
// ];

//   // Instanciando objetos para a classe Venda
// const vendas = [
//     new Venda('001', '2023-06-23 10:00:00', clientes[0], produtos[0]),
//     new Venda('002', '2023-06-23 11:30:00', clientes[1], produtos[2]),
//     new Venda('003', '2023-06-23 14:45:00', clientes[2], produtos[4]),
//     new Venda('004', '2023-06-24 09:15:00', clientes[0], produtos[6]),
//     new Venda('005', '2023-06-24 16:30:00', clientes[1], produtos[1])
// ];

//   // Exercício 03
//   // Exibindo os nomes dos clientes
// console.log("Nomes dos clientes:");
// clientes.forEach(cliente => console.log(cliente.nome));

//   // Exibindo as descrições dos produtos
// console.log("\nDescrições dos produtos:");
// produtos.forEach(produto => console.log(produto.descricao));

//   // Exibindo as datahora das vendas em formato JavaScript
// console.log("\nDatahora das vendas (formato JavaScript):");
// vendas.forEach(venda => console.log(venda.datahora));

//   // Exercício 5
//   // Transformando o array de clientes em um objeto Map
// const clientesMap = new Map(
//     clientes.map(cliente => [cliente])
// )
// Exercício 1
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
const clienteNomes = clientes.map(cliente => cliente.nome);
const produtoDescricoes = produtos.map(produto => produto.descricao);
const vendaDataHoras = vendas.map(venda => venda.datahora);

console.log('Nomes dos clientes:', clienteNomes);
console.log('Descrições dos produtos:', produtoDescricoes);
console.log('Datas e horas das vendas:', vendaDataHoras);

// Exercício 4
const clienteMap = new Map(clientes.map(cliente => [cliente.cpf, [cliente.nome, cliente.datanascimento]]));
const produtoMap = new Map(produtos.map(produto => [produto.codigo, [produto.descricao, produto.qtdestoque]]));
const vendaMap = new Map(vendas.map(venda => [venda.codigo, [venda.datahora, venda.cliente, venda.produto]]));

console.log('Mapa de clientes:', clienteMap);
console.log('Mapa de produtos:', produtoMap);
console.log('Mapa de vendas:', vendaMap);

// Exercício 5
const clienteObj = new Map(clientes.map(cliente => [cliente.cpf, { nome: cliente.nome, datanascimento: cliente.datanascimento }]))