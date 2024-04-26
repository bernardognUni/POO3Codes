import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Iniciando o jogo!");
    }
    getDescription(): void {
        console.log("Descrição do jogo");
    }

}