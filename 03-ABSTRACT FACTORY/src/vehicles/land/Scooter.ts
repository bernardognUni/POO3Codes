import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Lambreta: iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Lambreta: Pacote coletado!");
    }

}