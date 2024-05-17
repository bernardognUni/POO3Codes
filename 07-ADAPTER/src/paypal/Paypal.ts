import Token from "../utils/Token";
import IPaypalPayment from "./interfaces/IPaypalPayment";

export default class Paypal implements IPaypalPayment{
    private token : Token;
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+ this.token.token);
        console.log("Enviando Pagamento Via Paypal");
    }
    paypalReceive(): void {
        console.log("Recebendo Pagamento Via Paypal");
    }

}