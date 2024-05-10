export default class Sauce{
    constructor(private _sauces: any){}

    public get sauces(): any{
        return this._sauces;
    }
    public set sauces(value: any){
        this._sauces = value;
    }
}