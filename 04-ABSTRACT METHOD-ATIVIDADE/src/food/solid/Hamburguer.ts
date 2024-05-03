import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getFood();
        console.log("Hamburguer: saindo para entrega");
    }
    getFood(): void {
        console.log("Hamburguer: Alimento coletado");
    }

}