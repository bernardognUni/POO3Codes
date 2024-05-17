import Token from "../../utils/Token";

export default interface IMercadoPagoPayment{
    authToken(): Token;
    paypalPayment(): void;
    paypalReceive(): void;
}