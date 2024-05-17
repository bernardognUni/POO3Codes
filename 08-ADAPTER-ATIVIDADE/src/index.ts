import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";


 const pacote: ICorreios = new TransportadoraAdapter(new Transportadora());

 pacote.sendCorreios();
pacote.receiveCorreios();