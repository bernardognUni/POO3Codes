import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Playstation: Console configurado.");
    }
    
    configureGame(): void {
        this.authtoken();
        console.log("Playstation: Configurando jogo.");
    }
    authtoken(): void {
        console.log("Playstation: Autorizando o console.");
    }

}