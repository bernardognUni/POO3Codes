import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Cliente from "./Cliente";
import Produto from "./Produto";
import Venda from "./Venda";

// Objetos das classes Cliente, Endereco e Telefone
const enderecoCliente = new Endereco("Rua Dos Bobos", 0, "Midland", "Estado ZX");
const telefoneCliente1 = new Telefone("42", 999999999, "Residencial");
const telefoneCliente2 = new Telefone("41", 888888888, "Celular");

const cliente = new Cliente(
    "Gattsu",
    12345678900,
    19900101,
    "Masculino",
    enderecoCliente,
    [telefoneCliente1, telefoneCliente2]
);

// Objetos Produto
const produto1 = new Produto(1, "Pao", 100);
const produto2 = new Produto(2, "Shampoo", 200);

// Objeto Venda
const venda = new Venda(1001, 20240416, cliente, [produto1, produto2]);

// Exemplo da função calcularTotal
console.log("Total da venda:", venda.calcularTotal());