import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();
    reset() {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche() {
        const sanduba: Sanduiche = this.sanduiche;
        this.reset();
        return sanduba;
    }
    setSanduicheType(SanduicheType: SanduicheType) {
        this.sanduiche.sanduicheType = SanduicheType;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;        
    }
    addSauce(sauce: Sauce) {
        this.sanduiche.addSauce(sauce);
    }

}