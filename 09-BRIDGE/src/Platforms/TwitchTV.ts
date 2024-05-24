import IPlatform from "./interfaces/IPlatform";

export default class TwitchTV implements IPlatform{
  
    constructor(){
        this.configureRMTP();
        console.log("Twitch: Plataforma configurada.");
    }
    
    configureRMTP(): void {
        this.authtoken();
        console.log("Twitch: Configurando Broadcasting.");
    }
    authtoken(): void {
        console.log("Twitch: Autorizando a plataforma.");
    }

}