import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda {
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[]; // Corrigido para ser uma matriz de Produto

    constructor(codigo: number, data: number, cliente: Cliente, produtos: Produto[]) {
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }

    // Getters e Setters
    /**
     * Getter codigo
     * @return {number}
     */
	public get codigo(): number {
		return this._codigo;
	}

    /**
     * Getter data
     * @return {number}
     */
	public get data(): number {
		return this._data;
	}

    /**
     * Getter cliente
     * @return {Cliente}
     */
	public get cliente(): Cliente {
		return this._cliente;
	}

    /**
     * Getter produtos
     * @return {Produto[]}
     */
	public get produtos(): Produto[] {
		return this._produtos;
	}

    /**
     * Setter codigo
     * @param {number} value
     */
	public set codigo(value: number) {
		this._codigo = value;
	}

    /**
     * Setter data
     * @param {number} value
     */
	public set data(value: number) {
		this._data = value;
	}

    /**
     * Setter cliente
     * @param {Cliente} value
     */
	public set cliente(value: Cliente) {
		this._cliente = value;
	}

    /**
     * Setter produtos
     * @param {Produto[]} value
     */
	public set produtos(value: Produto[]) {
		this._produtos = value;
	}


    // Método para calcular o total da venda
    public calcularTotal(): number {
        let soma: number = 0;
    
        for (let i = 0; i < this._produtos.length; i++) {
            soma += this._produtos[i].valor; 
        }
    
        return soma; 
    }
}
