import Computador from "./produtos/Computador";
import Notebook from "./produtos/Notebook";

let computador1 = new Computador("Dell","Intel i7", 16, "512GB");
let notebook1 = new Notebook("Dell", "AMD Ryzen 7", 32, 16);
let notebook2 = notebook1.clone();
let computador2 = computador1.clone();

computador2.$marca = "Guts";

console.log(computador1);
console.log(computador2);
console.log(notebook1);
console.log(notebook2);