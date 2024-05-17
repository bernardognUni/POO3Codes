import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{
    
    constructor(private transportadora: Transportadora){
        console.log("Adaptando Transportadora no Correio");
    }

    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }

}