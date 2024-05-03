import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.getCargo();
        this.checkwind();
        console.log("Helicóptero: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros Embarcados!");
    }
    checkwind(): void {
        console.log("Helicóptero: ventos a 680km");
    }

}