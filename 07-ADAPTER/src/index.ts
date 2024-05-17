import PayoneerAdapter from "./adapters/PayoneerAdapter";
import Payoneer from "./payoneer/Payoneer";
import IPayoneerPayment from "./payoneer/interfaces/IPayoneerPayment";
import Paypal from "./paypal/Paypal";
import IPaypalPayment from "./paypal/interfaces/IPaypalPayment";


// const payment: IPaypalPayment = new Paypal();
const payment: IPaypalPayment = new PayoneerAdapter(new Payoneer());
payment.paypalPayment();
payment.paypalReceive();

