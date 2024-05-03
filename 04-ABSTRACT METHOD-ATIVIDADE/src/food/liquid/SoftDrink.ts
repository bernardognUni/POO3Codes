import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getFood();
        console.log("Refrigerante: saindo para entrega");
    }
    getFood(): void {
        console.log("Refrigerante: bebida coletada");
    }

}