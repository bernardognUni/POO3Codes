import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("Criando veículo...");
console.log("Tipo: "+sedan.vehicleType);
console.log("Potência: "+sedan.engine.power);
console.log("Transmissão: "+sedan.transmission);
console.log("Assentos: "+sedan.seats);
console.log("Rodas: "+sedan.wheels.length + " - Aro " +sedan.wheels[3].rim);
console.log("=================================");