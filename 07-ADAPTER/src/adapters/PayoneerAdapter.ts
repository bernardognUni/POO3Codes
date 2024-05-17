import Payoneer from "../payoneer/Payoneer";
import IPaypalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPaypalPayment{
    
    constructor(private payoneer: Payoneer){
        console.log("Adaptando Payoneer no Paypal...");
    }
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        this.payoneer.receivePayment();
    }

}