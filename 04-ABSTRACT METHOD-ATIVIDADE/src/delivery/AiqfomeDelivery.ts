import Beer from "../food/liquid/Beer";
import IDrink from "../food/liquid/interfaces/IDrink";
import Hamburguer from "../food/solid/Hamburguer";
import IFood from "../food/solid/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IAiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink{
        return new Beer();
    }
    createDeliveryFood(): IFood{
        return new Hamburguer();
    }

}