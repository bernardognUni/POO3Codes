import Playstation from "./Consoles/Playstation";
import XBox from "./Consoles/XBox";
import IConsole from "./Consoles/interfaces/IConsole";
import AdvancedPlay from "./plays/AdvancedPlay";
import Play from "./plays/Play";

function startPlay(consoles: IConsole){
    console.log("Aguarde...");
    const play = new Play(consoles);
    play.playing();
    play.result();
}

function startAdvancedPlay(consoles: IConsole){
    startPlay(consoles);
    const play = new AdvancedPlay(consoles);
    play.challenge();
    console.log("\\------------------------------------/");
}

startPlay(new XBox());
startPlay(new Playstation());
startAdvancedPlay(new XBox());
startAdvancedPlay(new Playstation());