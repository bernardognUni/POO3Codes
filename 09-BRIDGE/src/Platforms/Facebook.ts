import IPlatform from "./interfaces/IPlatform";

export default class Facebook implements IPlatform{
  
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Plataforma configurada.");
    }
    
    configureRMTP(): void {
        this.authtoken();
        console.log("Facebook: Configurando Broadcasting.");
    }
    authtoken(): void {
        console.log("Facebook: Autorizando a plataforma.");
    }

}