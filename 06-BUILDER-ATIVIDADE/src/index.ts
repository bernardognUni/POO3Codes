import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Criando sanduiche...");
console.log("Tipo: "+hotdog.sanduicheType);
console.log("Pão: "+hotdog.bread);
console.log("Proteína: "+hotdog.protein);
console.log("Salada: "+hotdog.salad);
console.log("Molhos: "+hotdog.sauces.length);
hotdog.sauces.forEach((sauce) => {
    console.log("- " + sauce.sauces);
});
console.log("=================================");

director.constructXSalada();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("Criando sanduiche...");
console.log("Tipo: "+xsalada.sanduicheType);
console.log("Pão: "+xsalada.bread);
console.log("Proteína: "+xsalada.protein);
console.log("Salada: "+xsalada.salad);
console.log("Molhos: "+xsalada.sauces.length);
xsalada.sauces.forEach((sauce) => {
    console.log("- " + sauce.sauces);
});
console.log("=================================");