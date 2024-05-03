import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.getCargo();
        this.checkwind();
        console.log("Drone: Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Drone: Pacote coletado!");
    }
    checkwind(): void {
        console.log("Drone: ventos a 2522km");
    }

}