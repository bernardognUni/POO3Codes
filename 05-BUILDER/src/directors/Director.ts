import IBuilder from "../builders/interfaces/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{

    constructor(private builder: IBuilder){}

    constructSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1300));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(90));
    }
    
    constructTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTransmission(Transmission.MANUAL);
        this.builder.setEngine(new Engine(18000));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
    }
    
}