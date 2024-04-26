import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Bicicleta: Pacote Coletado!");
    }

}