import IConsole from "../Consoles/interfaces/IConsole";
import IPlay from "./interfaces/IPlay";

export default class Play implements IPlay {
    
    constructor(private console: IConsole){
        
    }
    playing(): void {
        console.log("Iniciando a partida.");
    }
    result(): void {
        console.log("****** Partida Iniciada ******");
    }

}