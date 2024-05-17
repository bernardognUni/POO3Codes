import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{

    send(): void {
        console.log("Enviando produto via Transportadora");
    }
    receive(): void {
        console.log("Recebendo produto via Transportadora");
    }

}