import Location from "./Location";
import Movie from "./items/Movie";
import IItem from "./items/interfaces/IItem";

export default class MovieLocation extends Location{
    
    protected createItem(): IItem {
        return new Movie();
    }

}