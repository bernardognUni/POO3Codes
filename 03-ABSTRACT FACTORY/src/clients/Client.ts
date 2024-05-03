import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(type: string): void{
        if(type == "land"){
            this.vehicle.startRoute();
        }else if(type == "aircraft"){
            this.aircraft.startRoute();
        }else if(type == "both"){
            this.vehicle.startRoute();
            this.aircraft.startRoute();
        }else{
            console.log("Meio de locomoção não definido!");
        }
    }
}