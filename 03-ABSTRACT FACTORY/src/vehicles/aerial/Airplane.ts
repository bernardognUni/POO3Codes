import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.getCargo();
        this.checkwind();
        console.log("Avião: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Avião: Passageiros Embarcados!");
    }
    checkwind(): void {
        console.log("Avião: ventos a 25km");
    }

}