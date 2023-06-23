//Exercício 01

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

//Exercício 02
// Instanciando objetos para a classe Cliente
const clientes = [
  new Cliente('111.111.111-11', 'João', '1990-01-01'),
  new Cliente('222.222.222-22', 'Maria', '1985-05-10'),
  new Cliente('333.333.333-33', 'Pedro', '1998-12-15')
];

// Instanciando objetos para a classe Produto
const produtos = [
  new Produto('001', 'Camiseta', 10),
  new Produto('002', 'Calça Jeans', 5),
  new Produto('003', 'Tênis', 15),
  new Produto('004', 'Boné', 20),
  new Produto('005', 'Óculos de Sol', 8),
  new Produto('006', 'Bolsa', 12),
  new Produto('007', 'Chapéu', 30),
  new Produto('008', 'Jaqueta', 3)
];

// Instanciando objetos para a classe Venda
const vendas = [
  new Venda('001', '2023-06-23 10:00:00', clientes[0], produtos[0]),
  new Venda('002', '2023-06-23 11:30:00', clientes[1], produtos[2]),
  new Venda('003', '2023-06-23 14:45:00', clientes[2], produtos[4]),
  new Venda('004', '2023-06-24 09:15:00', clientes[0], produtos[6]),
  new Venda('005', '2023-06-24 16:30:00', clientes[1], produtos[1])
];

////Exercício 03
// Exibindo os nomes dos clientes
console.log("Nomes dos clientes:");
clientes.forEach(cliente => console.log(cliente.nome));

// Exibindo as descrições dos produtos
console.log("\nDescrições dos produtos:");
produtos.forEach(produto => console.log(produto.descricao));

// Exibindo as datahora das vendas em formato JavaScript
console.log("\nDatahora das vendas (formato JavaScript):");
vendas.forEach(venda => console.log(venda.datahora));