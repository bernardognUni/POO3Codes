import Company from "./delivery/Company";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";
import AiqfomeDelivery from "./delivery/AiqfomeDelivery";
import IFoodDelivery from "./delivery/IFoodDelivery";
import Client from "./clients/Client";
const currentCompany = Company.AIQFOME;
let delivery: IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME:
        delivery = new AiqfomeDelivery();
    break;
    case Company.IFOOD:
        delivery = new IFoodDelivery();
    break;
    default:
        console.log("Empresa não definida");
}
const client = new Client(delivery);
client.startDelivery("both");