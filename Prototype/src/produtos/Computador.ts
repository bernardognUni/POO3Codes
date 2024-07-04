import IProdutoPrototype from "./interfaces/IProdutoPrototype";

export default class Computador implements IProdutoPrototype{
    private marca: string;
    private processador: string;
    private memoriaRam: number;
    private discoRigido: string;
    
	constructor($marca: string, $processador: string, $memoriaRam: number, $discoRigido: string) {
		this.marca = $marca;
		this.processador = $processador;
		this.memoriaRam = $memoriaRam;
		this.discoRigido = $discoRigido;
	}

    
    public clone(): Computador {
        return new Computador(this.marca, this.processador, this.memoriaRam, this.discoRigido);
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
     * Getter $discoRigido
     * @return {string}
     */
	public get $discoRigido(): string {
		return this.discoRigido;
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
     * Setter $discoRigido
     * @param {string} value
     */
	public set $discoRigido(value: string) {
		this.discoRigido = value;
	}

}