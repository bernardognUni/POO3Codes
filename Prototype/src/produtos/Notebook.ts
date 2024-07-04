import IProdutoPrototype from "./interfaces/IProdutoPrototype";

export default class Notebook implements IProdutoPrototype{
    private marca: string;
    private processador: string;
    private memoriaRam: number;
    private tamanhoTela: number;

	constructor($marca: string, $processador: string, $memoriaRam: number, $tamanhoTela: number) {
		this.marca = $marca;
		this.processador = $processador;
		this.memoriaRam = $memoriaRam;
		this.tamanhoTela = $tamanhoTela;
	}
    
    clone(): IProdutoPrototype {
        return new Notebook(this.marca, this.processador, this.memoriaRam, this.tamanhoTela);
    }

     /**
     * Getter $marca
     * @return {string}
     */
	public get $marca(): string {
		return this.marca;
	}

    /**
     * Getter $processador
     * @return {string}
     */
	public get $processador(): string {
		return this.processador;
	}

    /**
     * Getter $memoriaRam
     * @return {number}
     */
	public get $memoriaRam(): number {
		return this.memoriaRam;
	}

    /**
     * Getter $tamanhoTela
     * @return {number}
     */
	public get $tamanhoTela(): number {
		return this.tamanhoTela;
	}

    /**
     * Setter $marca
     * @param {string} value
     */
	public set $marca(value: string) {
		this.marca = value;
	}

    /**
     * Setter $processador
     * @param {string} value
     */
	public set $processador(value: string) {
		this.processador = value;
	}

    /**
     * Setter $memoriaRam
     * @param {number} value
     */
	public set $memoriaRam(value: number) {
		this.memoriaRam = value;
	}

    /**
     * Setter $tamanhoTela
     * @param {number} value
     */
	public set $tamanhoTela(value: number) {
		this.tamanhoTela = value;
	}
}