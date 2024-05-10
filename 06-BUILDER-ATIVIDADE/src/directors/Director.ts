import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAOHOTDOG);
        this.builder.setProtein(Protein.MISTURA);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauce(new Sauce("Barbecue"));
        this.builder.addSauce(new Sauce("Mostarda"));
        this.builder.addSauce(new Sauce("Maionese"));
    }
    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.BRIOCHE);
        this.builder.setProtein(Protein.BOVINA);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauce(new Sauce("Barbecue"));
        this.builder.addSauce(new Sauce("Mostarda"));
        this.builder.addSauce(new Sauce("Maionese"));

    }
}