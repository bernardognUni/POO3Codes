export default class Contato{
    private _nome: string;
    private _telefone: string;

	constructor(nome: string, telefone: string) {
        this._nome = nome;
        this._telefone = telefone;
	}

    
    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter telefone
     * @return {string}
     */
	public get telefone(): string {
		return this._telefone;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter telefone
     * @param {string} value
     */
	public set telefone(value: string) {
		this._telefone = value;
	}

}