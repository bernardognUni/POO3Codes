export default class Wheel{
    constructor(private _rim: number){}

    public get rim(): number{
        return this._rim;
    }
    public set rim(value: number){
        this._rim = value;
    }
}