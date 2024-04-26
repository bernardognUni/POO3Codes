import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";
import Location from "./location/Location";

declare var process;

let location: Location;
if(process.argv.includes("filme")){
    location = new MovieLocation();
}else if(process.argv.includes("jogo")){
    location = new GameLocation();
}else{
    console.log("Selecione o tipo correto de produto!");
}
if(location){
    location.startItem();
}