import IPlatform from "../Platforms/interfaces/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform: IPlatform){
        super(platform);
    }

    subtitles(): void{
        console.log("Legendas Ativadas na Transmissão.");
    }

    comments(): void{
        console.log("Comentários Liberados na Transmissão.");
    }
}