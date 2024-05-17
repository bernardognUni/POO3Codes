import Token from "../utils/Token";
import IPayoneerPayment from "./interfaces/IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+ this.token.token);
        console.log("Enviando Pagamento Via Payoneer");
    }
    receivePayment(): void {
        console.log("Recebendo Pagamento Via Payoneer");
    }

}