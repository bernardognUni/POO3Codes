import Token from "../utils/Token";
import IMercadoPagoPayment from "./interfaces/IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
    authToken(): Token {
        throw new Error("Method not implemented.");
    }
    paypalPayment(): void {
        throw new Error("Method not implemented.");
    }
    paypalReceive(): void {
        throw new Error("Method not implemented.");
    }

   
}