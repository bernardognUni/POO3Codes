import SoftDrink from "../food/liquid/SoftDrink";
import IDrink from "../food/liquid/interfaces/IDrink";
import HotDog from "../food/solid/HotDog";
import IFood from "../food/solid/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }

}