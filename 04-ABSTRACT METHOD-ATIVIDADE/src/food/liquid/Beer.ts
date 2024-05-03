import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getFood();
        console.log("Cerveja: saindo para entrega");
    }
    getFood(): void {
        console.log("Cerveja: bebida coletada");
    }

}