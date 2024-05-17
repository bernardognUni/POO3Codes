import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{

    sendCorreios(): void {
        console.log("Enviando produto via Correio");
    }
    receiveCorreios(): void {
        console.log("Recebendo produto via Correio");
    }

}