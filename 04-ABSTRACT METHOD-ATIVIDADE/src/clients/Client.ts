import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../food/liquid/interfaces/IDrink";
import IFood from "../food/solid/interfaces/IFood";

export default class Client{
    private solid : IFood;
    private liquid: IDrink;

    constructor(delivery: IDeliveryFactory){
        this.liquid = delivery.createDeliveryDrink();
        this.solid = delivery.createDeliveryFood();
    }

    startDelivery(type: string): void{
        if(type == "liquid"){
            this.liquid.startDelivery();
        }else if(type == "solid"){
            this.solid.startDelivery();
        }else if(type == "both"){
            this.liquid.startDelivery();
            this.solid.startDelivery();
        }else{
            console.log("Tipo de comida não definido!");
        }
    }
}