import IPlatform from "./interfaces/IPlatform";

export default class Youtube implements IPlatform{
  
    constructor(){
        this.configureRMTP();
        console.log("Youtube: Plataforma configurada.");
    }
    
    configureRMTP(): void {
        this.authtoken();
        console.log("Youtube: Configurando Broadcasting.");
    }
    authtoken(): void {
        console.log("Youtube: Autorizando a plataforma.");
    }

}