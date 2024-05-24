import IConsole from "./interfaces/IConsole";

export default class XBox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("XBox: Console configurado.");
    }
    
    configureGame(): void {
        this.authtoken();
        console.log("XBox: Configurando jogo.");
    }
    authtoken(): void {
        console.log("XBox: Autorizando o console.");
    }
  
}