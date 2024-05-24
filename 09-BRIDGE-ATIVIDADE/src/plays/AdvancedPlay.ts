import IConsole from "../Consoles/interfaces/IConsole";
import Live from "./Play";

export default class AdvancedLive extends Live{
    constructor(console: IConsole){
        super(console);
    }

    challenge(): void{
        console.log("Desafios iniciados.");
    }
}