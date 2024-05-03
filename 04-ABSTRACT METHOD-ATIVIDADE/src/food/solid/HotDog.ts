import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getFood();
        console.log("HotDog: saindo para entrega");
    }
    getFood(): void {
        console.log("HotDog: Alimento coletado");
    }

}