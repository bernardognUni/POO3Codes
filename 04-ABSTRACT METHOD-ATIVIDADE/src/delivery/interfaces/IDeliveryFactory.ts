import IDrink from "../../food/liquid/interfaces/IDrink";
import IFood from "../../food/solid/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}